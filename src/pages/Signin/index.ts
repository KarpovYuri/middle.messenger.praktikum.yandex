import Block from '../../utils/Block';
import template from './signin.hbs';
import { Button } from '../../components/Button';

export class Signin extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
