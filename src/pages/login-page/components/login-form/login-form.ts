import './login-form.scss';
import Block from '../../../../components/common/block';
import type { TProps } from '../../../../types/common';
import template from './template/login-form';

export interface ILoginFormProps extends TProps {
    loginInput: Block,
    passwordInput: Block,
    submitButton: Block,
    registrationLink: Block,
    attr?: { [key: string]: string };
}

export class LoginForm extends Block {
  constructor(props: ILoginFormProps) {
    super(props, 'div');
  }

  render(): HTMLTemplateElement {
    return this.compileTemplate(template);
  }
}
