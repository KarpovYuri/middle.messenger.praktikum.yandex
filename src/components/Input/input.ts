import Block from '../../utils/Block';
import template from './input.hbs';
import  './input.sass';

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  classModifier: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
