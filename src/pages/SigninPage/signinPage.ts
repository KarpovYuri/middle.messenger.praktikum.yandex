import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import './signinPage.sass';

export class Signin extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.title = new Title({
      title: 'Авторизация'
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      classModifier: ''
    });

    this.children.password = new Input({
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: ''
    });

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.formLink = new FormLink({
      urlTitle: 'Ещё не зарегистрированы?',
      urlText: 'Регистрация',
      url: "/signup.html"
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const signin = new Signin();
  document.querySelector('#app')!.append(signin.getContent()!);
  signin.dispatchComponentDidMount();
