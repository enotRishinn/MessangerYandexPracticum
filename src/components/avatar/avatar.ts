import './avatar.scss';
import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/avatar';

interface IAvatarProps extends TProps {
  avatar_url: string;
  size: string;
  events?: { [key: string]: EventListener };
  attr?: { [key: string]: string };
}

export class Avatar extends Block {
  constructor(props: IAvatarProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
