import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
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
      classModifier: 'field_columns_two'
    });

    this.children.secondName = new Input({
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Белый',
      classModifier: 'field_columns_two'
    });

    this.children.displayName = new Input({
      label: 'Display Name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Доцент',
      classModifier: 'field_columns_two'
    });

    this.children.login = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Docent',
      classModifier: 'field_columns_two'
    });

    this.children.email = new Input({
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'docent@bk.ru',
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
        click: () => this.handleClick(),
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
