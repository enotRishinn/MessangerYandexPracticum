import './button.scss';
import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/button';

interface IButtonProps extends TProps {
  label: string;
  page?: string;
  type?: string;
  events?: { [key: string]: EventListener };
}

export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
