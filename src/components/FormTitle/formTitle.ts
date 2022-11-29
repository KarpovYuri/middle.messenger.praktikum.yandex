import Block from '../../utils/Block';
import template from './formTitle.hbs';
import  './formTitle.sass';

type FormTitleProps = {
  title: string;
}

export class FormTitle extends Block<FormTitleProps> {
  constructor(props: FormTitleProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
