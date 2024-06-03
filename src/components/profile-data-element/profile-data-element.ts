import './profile-data-element.scss';
import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/profile-data-element';


interface IProfileDataElementProps extends TProps {
  title: string;
  value: string;
  attr?: { [key: string]: string };
}

export class ProfileDataElement extends Block {
  constructor(props: IProfileDataElementProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}

