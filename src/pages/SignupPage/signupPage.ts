import Block from '../../utils/Block';
import template from './signupPage.hbs';
import { FormTitle } from '../../components/FormTitle/formTitle';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import './signupPage.sass';

export class Signin extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.formTitle = new FormTitle({
      title: 'Регистрация'
    });

    this.children.firstName = new Input({
      label: 'First Name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      classModifier: 'field_columns_two'
    });

    this.children.secondName = new Input({
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
      classModifier: 'field_columns_two'
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      classModifier: 'field_columns_two'
    });

    this.children.email = new Input({
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'E-mail',
      classModifier: 'field_columns_two'
    });

    this.children.password = new Input({
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'E-mail',
      classModifier: 'field_columns_two'
    });

    this.children.phone = new Input({
      label: 'Password',
      name: 'phone',
      type: 'phone',
      placeholder: 'Телефон',
      classModifier: 'field_columns_two'
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.formLink = new FormLink({
      urlTitle: 'Уже зарегистрированы?',
      urlText: 'Вход',
      url: "./signin.html"
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const signin = new Signin();
  document.querySelector('#app')!.append(signin.getContent()!);
  signin.dispatchComponentDidMount();
