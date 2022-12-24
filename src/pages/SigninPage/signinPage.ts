import Block from '../../utils/Block';
import template from './signinPage.hbs';
import { Title } from '../../components/Title/title';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/Link';
import { signinPageData } from '../../utils/bigData';
import './signinPage.scss';

export class SigninPage extends Block {
  constructor() {
    super({ signinPageData });
  }

  init() {
    this.children.title = new Title(this.props.signinPageData.title);
    this.props.signinPageData.inputs.map((item: any) => this.children[item.name] = new Input(item));
    this.children.button = new Button(this.props.signinPageData.button);
    this.children.formLink = new Link(this.props.signinPageData.formLink);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
