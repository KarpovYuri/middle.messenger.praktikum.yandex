import Block from '../../utils/Block';
import template from './indexPage.hbs';
import { Title } from '../../components/Title/title';
import { NavLink } from '../../components/NavLink/navLink';
import { indexPageData } from '../../utils/bigData';
import './indexPage.scss';

export class IndexPage extends Block {
  constructor(propsWithChildren: {}) {
    super({ propsWithChildren });
  }

  init() {
    this.children.title = new Title(this.props.propsWithChildren.title);
    this.props.propsWithChildren.links.map((item: any, index: number) => (
      this.children[`link${index + 1}`] = new NavLink(item)
    ));
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const indexPage = new IndexPage(indexPageData);
document.querySelector('#app')!.append(indexPage.getContent()!);
indexPage.dispatchComponentDidMount();
