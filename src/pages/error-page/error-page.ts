import './error-page.scss';
import Block from '../../components/common/block';
import { ErrorText, Link } from '../../components';
import template from './template/error-page';
import openPage from '../../utils/open-page';

const NotFoundError = new ErrorText({
  errorCode: '404',
  errorHeader: 'Oops!',
  errorText: 'Вы не туда попали. Страницы не существует:(',
});

const BugFixError = new ErrorText({
  errorCode: '500',
  errorHeader: 'Oops!',
  errorText: 'Что-то пошло не так. Но мы уже фиксим!',
});



export class NotFoundErrorPage extends Block {
  constructor() {

    const ReturnLink = new Link({
      value: 'Назад к чатам',
      page: '/chats',
      attr: { class: 'link' },
      events: {
        click: (event: Event) => openPage(event.target as HTMLTemplateElement, event)
      }
    });

    super({
      error: NotFoundError,
      link: ReturnLink,
      attr: { class: 'error-block' },
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}

export class BugFixErrorPage extends Block {
  constructor() {
    const ReturnLink = new Link({
      value: 'Назад к чатам',
      page: '/chats',
      attr: { class: 'link' },
      events: {
        click: (event: Event) => openPage(event.target as HTMLTemplateElement, event)
      }
    });


    super({
      error: BugFixError,
      link: ReturnLink,
      attr: { class: 'error-block' },
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}