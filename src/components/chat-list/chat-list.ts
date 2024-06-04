import './chat-list.scss';
import Block from '../common/block';
import template from './template/chat-list';
import type { TProps } from '../../types/common';

interface IChatListProps extends TProps {
    chats: Block[];
  }

export default class ChatList extends Block {
  constructor(props: IChatListProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
