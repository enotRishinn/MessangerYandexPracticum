import './login-page.scss';
import Block from '../../components/common/block';
import template from './template/login-page';
import Validator from '../../utils/validation';
import { InputField, Input, Button, Dialog, Link } from '../../components';
import { LoginForm } from './components/login-form/login-form';
import onSubmit from '../../utils/submitForm';
import openPage from "../../utils/open-page";


const LoginInput = new Input({
  type: 'text',
  id: 'login',
  name: 'login',
  events: {
    blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
    focus: (event: Event) => Validator.clearError('login', event.target as HTMLTemplateElement),
  },
  attr: {class: 'login-form__input', id: 'login_form_login'}
})

const PasswordInput = new Input({
  type: 'password',
  id: 'password',
  name: 'password',
  events: {
    blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
    focus: (event: Event) => Validator.clearError('password', event.target as HTMLTemplateElement),
  },
  attr: {class: 'login-form__input', id: 'login_form_password'}
})


const LoginInputField = new InputField({
  name: 'login',
  label: 'Логин',
  input: LoginInput
})

const PasswordInputField = new InputField({
  name: 'password',
  label: 'Пароль',
  input: PasswordInput
})

const SubmitButton = new Button({
  label: 'Авторизоваться',
  page: '/chats',
  type: 'submit',
  attr: { class: 'login-form__button button', id: 'log_in_button' },
});

const RegistrationLink = new Link({
  value: 'Нет аккаунта',
  page: '/register',
  attr: { class: 'login-form__link link', id: 'sign_up_link' },
  events: {
    click: (event: Event) => {openPage(event.target as HTMLTemplateElement, event)}
  }
});

const LoginContent = new LoginForm({
  header: 'Вход',
  loginInput: LoginInputField,
  passwordInput: PasswordInputField,
  submitButton: SubmitButton,
  registrationLink: RegistrationLink,
  attr: {class: 'login-form', page: '/chats'},
  events: {
    submit: (event: Event) => onSubmit(event.target as HTMLTemplateElement, event),
  }
});

const LoginDialog = new Dialog({
  content: LoginContent,
  attr: { class: 'dialog'},
});

export class LoginPage extends Block {
  constructor() {

    super({
      loginDialog: LoginDialog,
      attr: {class: 'dialog'}
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}