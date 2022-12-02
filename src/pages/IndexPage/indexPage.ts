import Block from '../../utils/Block';
import template from './indexPage.hbs';
import { Title } from '../../components/Title/title';
import { NavLink } from '../../components/NavLink/navLink';
import { links } from '../../utils/bigData';
import './indexPage.scss';

export class IndexPage extends Block {
  constructor() {
    super({
      links,
    });
  }

  init() {

    this.props.Link = this.props.links.map((link: any, index: number) => this.children[`link${index+1}`] = new NavLink(link));

    this.children.title = new Title({
      title: 'Страницы'
    });

  }

  render() {
    return this.compile(template, {...this.props});
  }
}

  const indexPage = new IndexPage();
  document.querySelector('#app')!.append(indexPage.getContent()!);
  indexPage.dispatchComponentDidMount();
