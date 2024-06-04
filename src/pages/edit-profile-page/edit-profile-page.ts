import './edit-profile-page.scss';
import Block from '../../components/common/block';
import template from './template/edit-profile-page';
import {
  Button, Avatar, Link, Input, InputField,
} from '../../components';
import Validator from '../../utils/validation';
import onSubmit from '../../utils/submitForm';
import openPage from '../../utils/open-page';

const ProfileAvatar = new Avatar({
  size: '130',
  avatar_url: '',
  attr: { atl: 'Аватар пользователя', class: 'user_avatar' },
});

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
    attr: { class: 'edit-profile-page__input', id: 'edit-profile-page_email' },
  }),
});

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
    attr: { class: 'edit-profile-page__input', id: 'edit-profile-page_login' },
  }),
});

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
    attr: { class: 'edit-profile-page__input', id: 'edit-profile-page_first_name' },
  }),
});

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
    attr: { class: 'edit-profile-page__input', id: 'edit-profile-page_second_name' },
  }),
});

const DisplayNameInputField = new InputField({
  name: 'display_name',
  label: 'Имя в чате',
  input: new Input({
    type: 'text',
    id: 'display_name',
    name: 'display_name',
    events: {
      blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
      focus: (event: Event) => Validator.clearError('display_name', event.target as HTMLTemplateElement),
    },
    attr: { class: 'edit-profile-page__input', id: 'edit-profile-page_display_name' },
  }),
});

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
    attr: { class: 'edit-profile-page__input', id: 'edit_profile-page_phone' },
  }),
});

const SubmitButton = new Button({
  label: 'Сохранить',
  page: '/profile',
  type: 'submit',
  attr: { class: 'edit-profile-page__button button', id: 'change_profile_button' },
});

const BackToChatsLink = new Link({
  value: 'Назад к чатам',
  page: '/chats',
  attr: { class: 'edit-profile-page__link link', id: 'back_to_chats_link' },
  events: {
    click: (event: Event) => { openPage(event.target as HTMLTemplateElement, event); },
  },
});

export default class EditProfilePage extends Block {
  constructor() {
    super({
      avatar: ProfileAvatar,
      emailInput: EmailInputField,
      loginInput: LoginInputField,
      firstNameInput: FirstNameInputField,
      secondNameInput: SecondNameInputField,
      displayNameInput: DisplayNameInputField,
      phoneInput: PhoneInputField,
      backToChatsLink: BackToChatsLink,
      submitButton: SubmitButton,
      events: {
        submit: (event: Event) => onSubmit(event.target as HTMLTemplateElement, event),
      },
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
