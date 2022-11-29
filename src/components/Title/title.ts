import Block from '../../utils/Block';
import template from './title.hbs';
import  './title.sass';

type TitleProps = {
  title: string;
}

export class Title extends Block<TitleProps> {
  constructor(props: TitleProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
