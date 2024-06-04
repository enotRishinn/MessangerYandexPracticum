import './input.scss';

import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/input';

interface IInputProps extends TProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-undef
  events?: { [key: string]: EventListener };
  attr?: { [key: string]: string };
}

export default class Input extends Block {
  constructor(props: IInputProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
