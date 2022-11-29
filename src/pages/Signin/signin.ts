import Block from '../../utils/Block';
import template from './signin.hbs';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/input';
import { FormTitle } from '../../components/FormTitle/formTitle';
import './signin.sass';

export class Signin extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.formTitle = new FormTitle({
      title: 'Авторизация'
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин'
    });

    this.children.password = new Input({
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль'
    });

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

  const signin = new Signin();
  document.querySelector('#app')!.append(signin.getContent()!);
  signin.dispatchComponentDidMount();
