// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import EventBus from '../../utils/event-bus';
import deepEqual from '../../utils/deep-equal';
import type { TProps, TChild, TChildList } from '../../types/common';

export default class Block {
  private static readonly EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected _id: string;

  private _element: HTMLElement | null = null;

  private props: TProps;

  private _children: TChild;

  private _lists: TChildList;

  private _meta: { tagName: string, props: TProps } | null = null;

  private eventBus: EventBus;

  constructor(propsAndChildren: TProps = {}, tagName: string = 'div') {
    this._id = this.generateRandomId();

    const { props, children, lists } = this._getPropsAndChildren(propsAndChildren);

    this.props = this._makePropsProxy(props);
    this._children = children;
    this._lists = lists;
    this._meta = {
      tagName,
      props,
    };

    const eventBus = new EventBus();
    this.eventBus = eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const tagName = this._meta?.tagName ?? 'div';
    this._element = this._createDocumentElement(tagName);
  }

  private _getPropsAndChildren(propsAndChildren: TProps) {
    const props: TProps = {};
    const children: Record<string, Block> = {};
    const lists: Record<string, Block[]> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value) && value.every((item) => item instanceof Block)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children, lists };
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const isRerender = this.componentDidUpdate(oldProps, newProps);

    if (isRerender) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: TProps, newProps: TProps) {
    return deepEqual(oldProps, newProps);
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  private _render() {
    const element = this.render();

    this._removeEvents();

    const newElement = element.firstElementChild as HTMLTemplateElement;
    this._element?.replaceWith(newElement);
    this._element = newElement;

    const { attr = {} } = this.props as { attr?: Record<string, string> };
    Object.entries(attr).forEach(([key, value]) => {
      newElement?.setAttribute(key, value);
    });

    this._addEvents();
  }

  render(): HTMLTemplateElement {
    return this._createDocumentElement('template');
  }

  compileTemplate(template: string) {
    const propsAndStubs: TProps = { ...this.props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this._lists || {}).forEach(([key, children]) => {
      propsAndStubs[key] = children.map((child) => `<div data-id="${child._id}"></div>`).join('');
    });

    const element: HTMLTemplateElement = this._createDocumentElement(this._meta?.tagName || 'div');

    element.innerHTML = Handlebars.compile(template)({ ...propsAndStubs });

    Object.values(this._children).forEach((child) => {
      const stub = element.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent() as HTMLElement);
        const newElement = stub?.firstElementChild as HTMLTemplateElement;
        if (newElement) {
          stub.replaceWith(newElement as HTMLElement);
        }
      }
    });

    Object.values(this._lists || {}).forEach((children) => {
      children.forEach((child) => {
        const stub = element.querySelector(`[data-id="${child._id}"]`);
        if (stub) {
          stub.replaceWith(child.getContent() as HTMLElement);
          const newElement = stub?.firstElementChild as HTMLTemplateElement;
          if (newElement) {
            stub.replaceWith(newElement as HTMLElement);
          }
        }
      });
    });

    return element as HTMLTemplateElement;
  }

  private _addEvents(): void {
    // eslint-disable-next-line no-undef
    const { events = {} } = this.props as { events?: Record<string, EventListener> };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents(): void {
    // eslint-disable-next-line no-undef
    const { events = {} } = this.props as { events?: Record<string, EventListener> };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _makePropsProxy(props: TProps) {
    const self = this;

    return new Proxy(props, {
      get(target: TProps, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('No access to prop');
        }

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: TProps, prop: string, value: unknown) {
        const newTarget = target;
        newTarget[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...newTarget }, newTarget);
        return true;
      },
      deleteProperty() {
        throw new Error('No access to delete prop');
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLTemplateElement {
    const element = document.createElement(tagName) as HTMLTemplateElement;
    element.setAttribute('data-id', this._id);

    return element;
  }

  getContent(): HTMLElement | null {
    return this._element;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }

  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
