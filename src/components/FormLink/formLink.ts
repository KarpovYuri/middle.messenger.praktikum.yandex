import Block from '../../utils/Block';
import template from './formLink.hbs';
import  './formLink.scss';

type FormLinkProps = {
  urlTitle: string;
  url: string;
  urlText: string;
}

export class FormLink extends Block<FormLinkProps> {
  constructor(props: FormLinkProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
