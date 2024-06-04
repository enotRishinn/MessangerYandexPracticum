import './message-item.scss';
import Block from '../common/block';
import template from './template/message-item';
import type { TProps } from '../../types/common';

interface IMessageItemProps extends TProps {
    content: string;
    isMy: boolean;
    date: string;
    id: number;
  }

export default class MessageItem extends Block {
  constructor(props: IMessageItemProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
