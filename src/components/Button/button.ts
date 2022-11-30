import Block from '../../utils/Block';
import template from './button.hbs';
import  './button.scss';

type ButtonProps = {
  type?: string;
  className?: string;
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', className: 'button', ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
