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
    super({});
  }

  init() {
    this.children.title = new Title({
      title: 'Профиль'
    });

    this.children.firstName = new Input({
      label: 'First Name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Александр',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    });

    this.children.secondName = new Input({
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Белый',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    });

    this.children.displayName = new Input({
      label: 'Display Name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Доцент',
      classModifier: 'field_columns_two',
      validation: '',
      errorMessage: 'Обязательное поле',
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Docent',
      classModifier: 'field_columns_two',
      validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
      errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
    });

    this.children.email = new Input({
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'docent@bk.ru',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$"',
      errorMessage: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака»',
    });

    this.children.phone = new Input({
      label: 'Phone',
      name: 'phone',
      type: 'phone',
      placeholder: '+7-777-777-77-77',
      classModifier: 'field_columns_two',
      validation: 'pattern="^\\+?[0-9]{10,15}$"',
      errorMessage: 'От 10 до 15 символов, состоит из цифр, может начинаться с символа плюс.',
    });

    this.children.oldPassword = new Input({
      label: 'Old Password',
      name: 'old_password',
      type: 'password',
      placeholder: '********',
      classModifier: 'field_columns_two',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this.children.newPassword = new Input({
      label: 'New Password',
      name: 'new_password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: 'field_columns_two',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this.children.button = new Button({
      label: 'Сохранить',
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
