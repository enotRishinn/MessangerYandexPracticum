import './register-form.scss';
import Block from '../../../../components/common/block';
import type { TProps } from '../../../../types/common';
import template from './template/register-form';

export interface IRegisterFormProps extends TProps {
    emailInput: Block,
    loginInput: Block,
    firstNameInput: Block,
    secondNameInput: Block,
    phoneInput: Block,
    passwordInput: Block,
    repeatPasswordInput: Block,
    submitButton: Block,
    loginLink: Block,
    attr?: { [key: string]: string };
}

export class RegisterForm extends Block {
  constructor(props: IRegisterFormProps) {
    super(props, 'div');
  }

  render(): HTMLTemplateElement {
    return this.compileTemplate(template);
  }
}
