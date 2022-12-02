import Block from '../../utils/Block';
import template from './signupPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import handleSubmit from '../../utils/handleSubmit';
import { inputsSignup } from '../../utils/bigData';
import './signupPage.scss';

export class Signin extends Block {
  constructor() {
    super({
      inputsSignup,
    });
  }

  init() {
    this.children.title = new Title({
      title: 'Регистрация'
    });

    this.props.Input = this.props.inputsSignup.map((input: any) => this.children[input.name] = new Input(input));

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
