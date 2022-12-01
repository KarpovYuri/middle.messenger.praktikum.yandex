import Block from '../../utils/Block';
import template from './signupPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import handleSubmit from '../../utils/handleSubmit';
import './signupPage.scss';

export class Signin extends Block {
  constructor() {
    super({
      fields: [
        {
          label: 'First Name',
          name: 'firstName',
          type: 'text',
          placeholder: 'Имя',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
          errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
        },
        {
          label: 'Second Name',
          name: 'secondName',
          type: 'text',
          placeholder: 'Фамилия',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
          errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
        },
        {
          label: 'Login',
          name: 'login',
          type: 'text',
          placeholder: 'Логин',
          classModifier: 'field_columns_two',
          validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
          errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
        },
        {
          label: 'E-mail',
          name: 'email',
          type: 'text',
          placeholder: 'E-mail',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$"',
          errorMessage: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака»',
        },
        {
          label: 'Password',
          name: 'password',
          type: 'password',
          placeholder: 'Пароль',
          classModifier: 'field_columns_two',
          validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
          errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        },
        {
          label: 'Phone',
          name: 'phone',
          type: 'phone',
          placeholder: 'Телефон',
          classModifier: 'field_columns_two',
          validation: 'pattern="^\\+?[0-9]{10,15}$"',
          errorMessage: 'От 10 до 15 символов, состоит из цифр, может начинаться с символа плюс.',
        }
      ],
    });
  }

  init() {
    this.children.title = new Title({
      title: 'Регистрация'
    });

    this.props.Input = this.props.fields.map((field: any) => this.children[field.name] = new Input(field));

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      type: 'submit',
      events: {
        click: (evt: Event) => handleSubmit(evt),
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

  const signup = new Signin();
  document.querySelector('#app')!.append(signup.getContent()!);
  signup.dispatchComponentDidMount();
