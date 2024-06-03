import './dialog.scss';
import Block from '../common/block';
import type { TProps } from '../../types/common';
import template from './template/dialog';


interface IDialogProps extends TProps {
  content: Block,
  attr?: { [key: string]: string };
}

export class Dialog extends Block {
  constructor(props: IDialogProps) {
    super(props, 'div');
  }

  render() {
    return this.compileTemplate(template);
  }
}
