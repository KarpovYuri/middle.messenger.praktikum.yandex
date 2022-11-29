import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { FormTitle } from '../../components/FormTitle/formTitle';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import './profilePage.sass';

export class Profile extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.formTitle = new FormTitle({
      title: 'Профиль'
    });

    this.children.firstName = new Input({
      label: 'First Name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Вася',
      classModifier: 'field_columns_two'
    });

    this.children.secondName = new Input({
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Форточкин',
      classModifier: 'field_columns_two'
    });

    this.children.displayName = new Input({
      label: 'Display Name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Василич',
      classModifier: 'field_columns_two'
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Vasy',
      classModifier: 'field_columns_two'
    });

    this.children.email = new Input({
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'vasy@bk.ru',
      classModifier: 'field_columns_two'
    });

    this.children.phone = new Input({
      label: 'Phone',
      name: 'phone',
      type: 'phone',
      placeholder: '+7-777-777-77-77',
      classModifier: 'field_columns_two'
    });

    this.children.oldPassword = new Input({
      label: 'Old Password',
      name: 'old_password',
      type: 'password',
      placeholder: '********',
      classModifier: 'field_columns_two'
    });

    this.children.newPassword = new Input({
      label: 'New Password',
      name: 'new_password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: 'field_columns_two'
    });

    this.children.button = new Button({
      label: 'Сохранить',
      events: {
        click: () => console.log('clicked'),
      },
    });

    this.children.formLink = new FormLink({
      urlTitle: 'Внесите изменения и сохраните.',
      urlText: 'Выйти',
      url: "./index.html"
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const profile = new Profile();
  document.querySelector('#app')!.append(profile.getContent()!);
  profile.dispatchComponentDidMount();
