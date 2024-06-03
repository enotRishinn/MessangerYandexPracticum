import './register-page.scss';
import Block from '../../components/common/block';
import template from './template/register-page';
import Validator from '../../utils/validation';
import { InputField, Input, Button, Dialog, Link } from '../../components';
import { RegisterForm } from './components/register-form/register-form';
import onSubmit from '../../utils/submitForm';
import openPage from "../../utils/open-page";


  const EmailInputField = new InputField({
    name: 'email',
    label: 'Почта',
    input: new Input({
        type: 'text',
        id: 'email',
        name: 'email',
        events: {
          blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
          focus: (event: Event) => Validator.clearError('email', event.target as HTMLTemplateElement),
        },
        attr: {class: 'register-form__input', id: 'register_form_email'}
      })
  })

const LoginInputField = new InputField({
  name: 'login',
  label: 'Логин',
  input: new Input({
    type: 'text',
    id: 'login',
    name: 'login',
    events: {
      blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
      focus: (event: Event) => Validator.clearError('login', event.target as HTMLTemplateElement),
    },
    attr: {class: 'register-form__input', id: 'register_form_login'}
  })
})

const FirstNameInputField = new InputField({
    name: 'first_name',
    label: 'Имя',
    input: new Input({
        type: 'text',
        id: 'first_name',
        name: 'first_name',
        events: {
          blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
          focus: (event: Event) => Validator.clearError('first_name', event.target as HTMLTemplateElement),
        },
        attr: {class: 'register-form__input', id: 'register_form_first_name'}
      })
  })

  const SecondNameInputField = new InputField({
    name: 'second_name',
    label: 'Фамилия',
    input: new Input({
        type: 'text',
        id: 'second_name',
        name: 'second_name',
        events: {
          blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
          focus: (event: Event) => Validator.clearError('second_name', event.target as HTMLTemplateElement),
        },
        attr: {class: 'register-form__input', id: 'register_form_second_name'}
      })
  })

  const PhoneInputField = new InputField({
    name: 'phone',
    label: 'Телефон',
    input: new Input({
        type: 'text',
        id: 'phone',
        name: 'phone',
        events: {
          blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
          focus: (event: Event) => Validator.clearError('phone', event.target as HTMLTemplateElement),
        },
        attr: {class: 'register-form__input', id: 'register_form_phone'}
      })
  })

const PasswordInputField = new InputField({
  name: 'password',
  label: 'Пароль',
  input: new Input({
    type: 'password',
    id: 'password',
    name: 'password',
    events: {
      blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
      focus: (event: Event) => Validator.clearError('password', event.target as HTMLTemplateElement),
    },
    attr: {class: 'register-form__input', id: 'register_form_password'}
  })
})

const RepeatPasswordInputField = new InputField({
    name: 'repeat_password',
    label: 'Подтвердите пароль',
    input: new Input({
        type: 'password',
        id: 'repeat_password',
        name: 'repeat_password',
        events: {
          blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
          focus: (event: Event) => Validator.clearError('repeat_password', event.target as HTMLTemplateElement),
        },
        attr: {class: 'register-form__input', id: 'register_form_repeat_password'}
      })
  })

const SubmitButton = new Button({
  label: 'Зарегистрироваться',
  page: '/login',
  type: 'submit',
  attr: { class: 'register-form__button button', id: 'register_button' },
});

const RegistrationLink = new Link({
  value: 'Войти',
  page: '/login',
  attr: { class: 'register-form__link link', id: 'sign_in_link' },
  events: {
    click: (event: Event) => {openPage(event.target as HTMLTemplateElement, event)}
  }
});

const RegisterDialog = new Dialog({
  content: new RegisterForm({
    header: 'Регистрация',
    emailInput: EmailInputField,
    loginInput: LoginInputField,
    firstNameInput: FirstNameInputField,
    secondNameInput: SecondNameInputField,
    phoneInput: PhoneInputField,
    passwordInput: PasswordInputField,
    repeatPasswordInput: RepeatPasswordInputField,
    submitButton: SubmitButton,
    loginLink: RegistrationLink,
    attr: {class: 'register-form', page: '/login'},
    events: {
      submit: (event: Event) => onSubmit(event.target as HTMLTemplateElement, event),
    }
  }),
  attr: { class: 'dialog'},
});

export class RegisterPage extends Block {
  constructor() {

    super({
      registerDialog: RegisterDialog,
      attr: {class: 'dialog'}
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}