import './profile-page.scss';
import Block from '../../components/common/block';
import template from './template/profile-page';
import { ProfileDataElement, Avatar, Link } from '../../components';
import openPage from '../../utils/open-page';

const ProfileAvatar = new Avatar({
  size: '130',
  avatar_url: '',
  attr: { atl: 'Аватар пользователя', class: 'user_avatar' },
});

const ChangeDataLink = new Link({
  value: 'Изменить данные',
  page: '/edit-profile',
  attr: { class: 'profile-page__link link', id: 'change_profile_link' },
  events: {
    click: (event: Event) => { openPage(event.target as HTMLTemplateElement, event); },
  },
});

const ChangePasswordLink = new Link({
  value: 'Изменить пароль',
  page: '/change-password',
  attr: { class: 'profile-page__link link', id: 'change_password_link' },
  events: {
    click: (event: Event) => { openPage(event.target as HTMLTemplateElement, event); },
  },
});

const LogOutLink = new Link({
  value: 'Выйти',
  page: '/login',
  attr: { class: 'profile-page__link link', id: 'log_out_link' },
  events: {
    click: (event: Event) => { openPage(event.target as HTMLTemplateElement, event); },
  },
});

const BackToChatsLink = new Link({
  value: 'Назад к чатам',
  page: '/chats',
  attr: { class: 'profile-page__link link', id: 'back_to_chats_link' },
  events: {
    click: (event: Event) => { openPage(event.target as HTMLTemplateElement, event); },
  },
});

export default class ProfilePage extends Block {
  constructor() {
    super({
      avatar: ProfileAvatar,
      profileName: 'Виктория',
      emailData: new ProfileDataElement({
        title: 'Почта',
        value: '12344hda@mail.ru',
        attr: { class: 'profile-page__element', id: 'profile-page_email' },
      }),
      loginData: new ProfileDataElement({
        title: 'Логин',
        value: 'user012',
        attr: { class: 'profile-page__element', id: 'profile-page_login' },
      }),
      firstNameData: new ProfileDataElement({
        title: 'Имя',
        value: 'Виктория',
        attr: { class: 'profile-page__element', id: 'profile-page_first_name' },
      }),
      secondNameData: new ProfileDataElement({
        title: 'Фамилия',
        value: 'Емцева',
        attr: { class: 'profile-page__element', id: 'profile-page_second_name' },
      }),
      displayNameData: new ProfileDataElement({
        title: 'Имя в чате',
        value: 'Вика',
        attr: { class: 'profile-page__element', id: 'profile-page_display_name' },
      }),
      phoneData: new ProfileDataElement({
        title: 'Телефон',
        value: '+7 (931) 999 90 99',
        attr: { class: 'profile-page__element', id: 'profile-page_phone' },
      }),
      changeDataLink: ChangeDataLink,
      changePasswordLink: ChangePasswordLink,
      logOutLink: LogOutLink,
      backToChatsLink: BackToChatsLink,
      attr: { class: 'profile-page' },
    }, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
