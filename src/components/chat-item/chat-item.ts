import './chat-item.scss';
import Block from '../common/block';
import template from './template/chat-item';
import type { TProps } from '../../types/common';

interface IChatItemProps extends TProps {
    name: string;
    lastMessage: string;
    id: number;
    avatar: Block
  }
  
  export class ChatItem extends Block {
    constructor(props: IChatItemProps) {
        super(props, 'div');
      }
  
    render() {
      return this.compileTemplate(template);
    }
  }