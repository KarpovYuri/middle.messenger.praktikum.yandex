import Block from '../../utils/Block';
import template from './serverErrorPage.hbs';
import { Error } from '../../components/Error/error';
import { Link } from '../../components/Link/Link';
import { serverErrorPageData } from '../../utils/bigData';
import './serverErrorPage.scss';

export class ServerErrorPage extends Block {
  constructor() {
    super({ ...serverErrorPageData });
  }

  init() {
    this.children.error = new Error(this.props.error);
    this.children.link = new Link(this.props.link);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
