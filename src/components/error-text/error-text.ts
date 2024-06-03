import Block from '../common/block';
import type { TProps } from '../../types/common';
import './error-text.scss';
import template from './template/error-text';

export interface IErrorTextProps extends TProps {
    errorCode: string,
    errorHeader: string;
    errorText: string,
    attr?: { [key: string]: string };
}

export class ErrorText extends Block {
  constructor(props: IErrorTextProps) {
    super(props, 'div');
  }

  render(): HTMLTemplateElement {
    return this.compileTemplate(template);
  }
}
