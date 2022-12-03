import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { FormLink } from '../../components/FormLink/formLink';
import { signinPageData } from '../../utils/bigData';
import './signinPage.scss';

export class Signin extends Block {
  constructor(propsWithChildren: {}) {
    super({ propsWithChildren });
  }

  init() {
    this.children.title = new Title(this.props.propsWithChildren.title);
    this.props.propsWithChildren.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.propsWithChildren.button);
    this.children.formLink = new FormLink(this.props.propsWithChildren.formLink);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const signin = new Signin(signinPageData);
  document.querySelector('#app')!.append(signin.getContent()!);
  signin.dispatchComponentDidMount();

