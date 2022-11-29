import Block from '../../utils/Block';
import template from './error.hbs';
import  './error.sass';

type ErrorProps = {
  errorTitle: string;
  errorDesc: string;
}

export class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
