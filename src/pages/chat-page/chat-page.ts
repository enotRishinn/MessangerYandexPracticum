import './chat-page.scss';
import Block from '../../components/common/block';
import template from './template/chat-page';
import { Avatar, ChatItem, Input, Link, Button, MessageItem  } from '../../components';
import openPage from "../../utils/open-page";
import { formatTime } from "../../utils/format-time";


const Chats = [new ChatItem({
    avatar: new Avatar({
        size: '30',
        avatar_url: '',
        attr: {atl: 'Аватар пользователя', class: 'user_avatar'}
    }),    
    name: 'Chat 1', 
    lastMessage: 'Hello!', 
    id: 1
}), new ChatItem({
    avatar: new Avatar({
        size: '30',
        avatar_url: '',
        attr: {atl: 'Аватар пользователя', class: 'user_avatar'}
    }),    
    name: 'Chat 2', 
    lastMessage: 'Hello!!!', 
    id: 2}), 
    new ChatItem({   avatar: new Avatar({
        size: '30',
        avatar_url: '',
        attr: {atl: 'Аватар пользователя', class: 'user_avatar'}
    }),    
        name: 'Chat 3', 
        lastMessage: 'Hello!!!!!!!!!', 
        id: 3
    })]


    const SearchInput = new Input({
        type: 'text',
        id: 'search',
        name: 'search',
        placeholder: 'Поиск...',
        attr: { class: 'chat-page__search-input' },
      });
  

    const ProfileLink = new Link({
        value: 'Профиль',
        page: '/profile',
        attr: { class: 'chat-page__profile-link link', },
        events: {
          click: (event: Event) => {openPage(event.target as HTMLTemplateElement, event)}
        }
      });

      const MessagesList = [
        new MessageItem({id: 1, content: 'Текст', isMy: true, date: formatTime(new Date()), attr: {class: 'message-item message-item--my'}}),
        new MessageItem({id: 1, content: 'Текст1', isMy: true, date: formatTime(new Date()), attr: {class: 'message-item message-item--my'}}),
        new MessageItem({id: 1, content: 'Текст2', isMy: true, date: formatTime(new Date()), attr: {class: 'message-item message-item--other'}}),
        new MessageItem({id: 1, content: 'Текст3', isMy: false, date: formatTime(new Date()), attr: {class: 'message-item message-item--other'}}),
        new MessageItem({id: 1, content: 'Текст4', isMy: true, date: formatTime(new Date()), attr: {class: 'message-item message-item--my'}}),
      ];

      const AttachButton = new Button({
        value: 'attach',
        label: 'Вложения',
        attr: { class: 'chat-page__attach-button button' }
      });
      
      const MessageInputField = new Input({
        type: 'text',
        id: 'message',
        name: 'message',
        placeholder: 'Введите сообщение...',
        attr: { class: 'chat-page__message-input-field' }
      });
      
      const SendMessageButton = new Button({
        value: 'send_message',
        label: 'Отправить',
        attr: { class: 'chat-page__send-button button' }
      });


export class ChatPage extends Block {
    constructor() {
        super({
            chatList: Chats,
            profileLink: ProfileLink,
            searchInput: SearchInput,
            attachButton: AttachButton,
            messageInput: MessageInputField,
            sendMessageButton: SendMessageButton,
            messages: MessagesList,
            name: "Виктор",
            avatar: new Avatar({
                size: '30',
                avatar_url: '',
                attr: {atl: 'Аватар пользователя', class: 'dialog-user'}
            })
          }, 'div');
    }
  
    render() {
        return this.compileTemplate(template);
    }
  }
