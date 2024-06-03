import './change-password-page.scss';
import Block from '../../components/common/block';
import template from './template/change-password-page';
import { Button, Avatar, Link, Input, InputField } from '../../components';
import Validator from '../../utils/validation';
import onSubmit from '../../utils/submitForm';
import openPage from "../../utils/open-page";

const ProfileAvatar = new Avatar({
    size: '130',
    avatar_url: '',
    attr: {atl: 'Аватар пользователя', class: 'user_avatar'}
})

const SubmitButton = new Button({
    label: 'Сохранить',
    page: '/profile',
    type: 'submit',
    attr: { class: 'change-password-page__button button', id: 'change_password_button' },
  });

  
  const BackToChatsLink = new Link({
      value: 'Назад к чатам',
      page: '/chats',
      attr: { class: 'change-password-page__link link', id: 'back_to_chats_link' },
      events: {
        click: (event: Event) => {openPage(event.target as HTMLTemplateElement, event)}
      }
    });

    const OldPasswordInputField = new InputField({
        name: 'old_password',
        label: 'Старый пароль',
        input: new Input({
          type: 'password',
          id: 'old_password',
          name: 'old_password',
          events: {
            blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
            focus: (event: Event) => Validator.clearError('old_password', event.target as HTMLTemplateElement),
          },
          attr: {class: 'change-password-page__input', id: 'change-password-page_old_password'}
        })
      })
    
    const NewPasswordInputField = new InputField({
        name: 'password',
        label: 'Новый пароль',
        input: new Input({
          type: 'password',
          id: 'password',
          name: 'password',
          events: {
            blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
            focus: (event: Event) => Validator.clearError('password', event.target as HTMLTemplateElement),
          },
          attr: {class: 'change-password-page__input', id: 'change-password-page_new_password'}
        })
      })
      
      const RepeatNewPasswordInputField = new InputField({
          name: 'repeat_password',
          label: 'Подтвердите новый пароль',
          input: new Input({
              type: 'password',
              id: 'repeat_password',
              name: 'repeat_password',
              events: {
                blur: (event: Event) => Validator.validateField(event.target as HTMLInputElement),
                focus: (event: Event) => Validator.clearError('repeat_password', event.target as HTMLTemplateElement),
              },
              attr: {class: 'change-password-page__input', id: 'change-password-page_repeat_new_password'}
            })
        })
    

export class ChangePasswordPage extends Block {
  constructor() {
    super({
      avatar: ProfileAvatar, 
      oldPassword: OldPasswordInputField,
      newPassword: NewPasswordInputField,
      repeatNewPassword: RepeatNewPasswordInputField,
      backToChatsLink: BackToChatsLink,
      submitButton: SubmitButton,
      events: {
        submit: (event: Event) => onSubmit(event.target as HTMLTemplateElement, event),
      }
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
