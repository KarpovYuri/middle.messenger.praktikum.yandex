import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import handleSubmit from '../../utils/handleSubmit';
import { inputsSignin } from '../../utils/bigData';
import './signinPage.scss';

export class Signin extends Block {
  constructor() {
    super({
      inputsSignin,
    });
  }

  init() {
    this.children.title = new Title({
      title: 'Авторизация'
    });

    this.props.Input = this.props.inputsSignin.map((input: any) => this.children[input.name] = new Input(input));

    this.children.button = new Button({
      label: 'Войти',
      type: 'submit',
      events: {
        click: (evt: Event) => handleSubmit(evt),
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

