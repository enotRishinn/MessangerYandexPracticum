import './input.scss';

import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from '../input/template/input';


interface IInputProps extends TProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  events?: { [key: string]: EventListener };
  attr?: { [key: string]: string };
}

export class Input extends Block {
  constructor(props: IInputProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
