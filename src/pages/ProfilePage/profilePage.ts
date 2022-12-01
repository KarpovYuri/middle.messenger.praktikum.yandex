import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import handleSubmit from '../../utils/handleSubmit';
import './profilePage.scss';

export class Profile extends Block {
  constructor() {
    super({
      fields: [
        {
          label: 'First Name',
          name: 'firstName',
          type: 'text',
          placeholder: 'Александр',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
          errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
        },
        {
          label: 'Second Name',
          name: 'secondName',
          type: 'text',
          placeholder: 'Белый',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
          errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
        },
        {
          label: 'Display Name',
          name: 'displayName',
          type: 'text',
          placeholder: 'Доцент',
          classModifier: 'field_columns_two',
          validation: '',
          errorMessage: 'Обязательное поле',
        },
        {
          label: 'Login',
          name: 'login',
          type: 'text',
          placeholder: 'Docent',
          classModifier: 'field_columns_two',
          validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
          errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
        },
        {
          label: 'E-mail',
          name: 'email',
          type: 'text',
          placeholder: 'docent@bk.ru',
          classModifier: 'field_columns_two',
          validation: 'pattern="^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$"',
          errorMessage: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака»',
        },
        {
          label: 'Phone',
          name: 'phone',
          type: 'phone',
          placeholder: '+77777777777',
          classModifier: 'field_columns_two',
          validation: 'pattern="^\\+?[0-9]{10,15}$"',
          errorMessage: 'От 10 до 15 символов, состоит из цифр, может начинаться с символа плюс.',
        },
        {
          label: 'Old Password',
          name: 'oldPassword',
          type: 'password',
          placeholder: '********',
          classModifier: 'field_columns_two',
          validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
          errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        },
        {
          label: 'New Password',
          name: 'newPassword',
          type: 'password',
          placeholder: 'Пароль',
          classModifier: 'field_columns_two',
          validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
          errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        }
      ],
    });
  }

  init() {
    this.children.title = new Title({
      title: 'Профиль'
    });

    this.props.Input = this.props.fields.map((field: any) => this.children[field.name] = new Input(field));

    this.children.button = new Button({
      label: 'Сохранить',
      type: 'submit',
      events: {
        click: (evt: Event) => handleSubmit(evt),
      },
    });

    this.children.formLink = new FormLink({
      urlTitle: 'Внесите изменения и сохраните.',
      urlText: 'Назад',
      url: "./chat.html"
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const profile = new Profile();
  document.querySelector('#app')!.append(profile.getContent()!);
  profile.dispatchComponentDidMount();
