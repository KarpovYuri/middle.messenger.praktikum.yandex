import Block from '../../utils/Block';
import template from './notFoundPage.hbs';
import { Error } from '../../components/Error/error';
import { Link } from '../../components/Link/Link';
import { notFoundPageData } from '../../utils/bigData';
import './notFoundPage.scss';

export class NotFoundPage extends Block {
  constructor() {
    super({ ...notFoundPageData });
  }

  init() {
    this.children.error = new Error(this.props.error);
    this.children.link = new Link(this.props.link);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
