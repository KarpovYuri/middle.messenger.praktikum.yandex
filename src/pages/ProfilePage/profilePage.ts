import Block from '../../utils/Block';
import template from './profilePage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import handleSubmit from '../../utils/handleSubmit';
import { inputsProfile } from '../../utils/bigData';
import './profilePage.scss';

export class Profile extends Block {
  constructor() {
    super({
      inputsProfile,
    });
  }

  init() {
    this.children.title = new Title({
      title: 'Профиль'
    });

    this.props.Input = this.props.inputsProfile.map((input: any) => this.children[input.name] = new Input(input));

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
