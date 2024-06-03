import './input-field.scss';

import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/input-field';


interface IInputFieldProps extends TProps {
  name: string;
  label: string,
  input: Block,
  error?: string;
  attr?: { [key: string]: string };
}

export class InputField extends Block {
  constructor(props: IInputFieldProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
