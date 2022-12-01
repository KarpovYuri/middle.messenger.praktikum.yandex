import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import './signinPage.scss';

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
      classModifier: '',
      validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
      errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
    });

    this.children.password = new Input({
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: '',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this.children.button = new Button({
      label: 'Войти',
      type: 'submit',
      events: {
        click: (evt: Event) => this.handleClick(evt),
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

