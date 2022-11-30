import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.message1 = new UserCard({
      userName: 'Косой',
      lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
      dateLastMessage: '10:49',
      qtyUnreadMessage: '2'
    });

    this.children.message2 = new UserCard({
      userName: 'Алибаба',
      lastMessage: 'А в тюрьме сейчас ужин… макароны…',
      dateLastMessage: '9:00',
      qtyUnreadMessage: '12'
    });

    this.children.message3 = new UserCard({
      userName: 'Хмырь',
      lastMessage: 'Это тебе не мелочь по карманам тырить!',
      dateLastMessage: 'ПН',
      qtyUnreadMessage: '1024'
    });

    this.children.message4 = new UserCard({
      userName: 'Трошкин',
      lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
      dateLastMessage: 'ВС',
      qtyUnreadMessage: '123'
    });

    this.children.message5 = new UserCard({
      userName: 'Anonimus',
      lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
      quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
      saepe!`,
      dateLastMessage: 'СБ',
      qtyUnreadMessage: ''
    });

    this.children.message6 = new UserCard({
      userName: 'Косой',
      lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
      dateLastMessage: '10:49',
      qtyUnreadMessage: '2'
    });

    this.children.message7 = new UserCard({
      userName: 'Алибаба',
      lastMessage: 'А в тюрьме сейчас ужин… макароны…',
      dateLastMessage: '9:00',
      qtyUnreadMessage: '12'
    });

    this.children.message8 = new UserCard({
      userName: 'Хмырь',
      lastMessage: 'Это тебе не мелочь по карманам тырить!',
      dateLastMessage: 'ПН',
      qtyUnreadMessage: '1024'
    });

    this.children.message9 = new UserCard({
      userName: 'Трошкин',
      lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
      dateLastMessage: 'ВС',
      qtyUnreadMessage: '123'
    });

    this.children.message10 = new UserCard({
      userName: 'Anonimus',
      lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
      quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
      saepe!`,
      dateLastMessage: 'СБ',
      qtyUnreadMessage: ''
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const chatPage = new ChatPage();
document.querySelector('#app')!.append(chatPage.getContent()!);
chatPage.dispatchComponentDidMount();
