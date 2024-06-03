import './message-list.scss';
import Block from '../common/block';
import template from './template/message-list';
import type { TProps } from '../../types/common';

interface IMessageListProps extends TProps {
    messages: Array<{ content: string, sender: string, id: number }>;
  }
  
  export class MessageList extends Block {
    constructor(props: IMessageListProps) {
      super(props, 'div');
    }
  
    render() {
      return this.compileTemplate(template);
    }
  }