import './link.scss';
import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/link';

export interface ILinkProps extends TProps {
    value: string,
    page: string,
    attr?: { [key: string]: string };
}

export class Link extends Block {
  constructor(props: ILinkProps) {
    super(props, 'div');
  }

  render(): HTMLTemplateElement {
    return this.compileTemplate(template);
  }
}
