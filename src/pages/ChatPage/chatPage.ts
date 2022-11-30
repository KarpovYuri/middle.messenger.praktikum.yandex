import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.userCard1 = new UserCard({
      userName: 'Косой',
      lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
      dateLastMessage: '10:49',
      qtyUnreadMessage: '2'
    });

    this.children.userCard2 = new UserCard({
      userName: 'Алибаба',
      lastMessage: 'А в тюрьме сейчас ужин… макароны…',
      dateLastMessage: '9:00',
      qtyUnreadMessage: '12'
    });

    this.children.userCard3 = new UserCard({
      userName: 'Хмырь',
      lastMessage: 'Это тебе не мелочь по карманам тырить!',
      dateLastMessage: 'ПН',
      qtyUnreadMessage: '1024'
    });

    this.children.userCard4 = new UserCard({
      userName: 'Трошкин',
      lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
      dateLastMessage: 'ВС',
      qtyUnreadMessage: '123'
    });

    this.children.userCard5 = new UserCard({
      userName: 'Anonimus',
      lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
      quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
      saepe!`,
      dateLastMessage: 'СБ',
      qtyUnreadMessage: ''
    });

    this.children.userCard6 = new UserCard({
      userName: 'Косой',
      lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
      dateLastMessage: '10:49',
      qtyUnreadMessage: '2'
    });

    this.children.userCard7 = new UserCard({
      userName: 'Алибаба',
      lastMessage: 'А в тюрьме сейчас ужин… макароны…',
      dateLastMessage: '9:00',
      qtyUnreadMessage: '12'
    });

    this.children.userCard8 = new UserCard({
      userName: 'Хмырь',
      lastMessage: 'Это тебе не мелочь по карманам тырить!',
      dateLastMessage: 'ПН',
      qtyUnreadMessage: '1024'
    });

    this.children.userCard9 = new UserCard({
      userName: 'Трошкин',
      lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
      dateLastMessage: 'ВС',
      qtyUnreadMessage: '123'
    });

    this.children.userCard10 = new UserCard({
      userName: 'Anonimus',
      lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
      quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
      saepe!`,
      dateLastMessage: 'СБ',
      qtyUnreadMessage: ''
    });

    this.children.message1 = new Message({
      messageClassModifier: 'message_place_right',
      messageTimeClassModifier: 'message__time_place_right',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
      accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
      veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
      officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
      modi veniam rem!`,
      timeMessage: '9:30'
    });

    this.children.message2 = new Message({
      messageClassModifier: 'message_place_right',
      messageTimeClassModifier: 'message__time_place_right',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
      accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
      veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
      officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
      modi veniam rem!`,
      timeMessage: '9:25'
    });

    this.children.message3 = new Message({
      messageClassModifier: 'message_place_right',
      messageTimeClassModifier: 'message__time_place_right',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
      accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
      veniam rem!`,
      timeMessage: '9:20'
    });

    this.children.message4 = new Message({
      messageClassModifier: 'message_place_right',
      messageTimeClassModifier: 'message__time_place_right',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      timeMessage: '9:15'
    });

    this.children.message5 = new Message({
      messageClassModifier: 'message_place_right',
      messageTimeClassModifier: 'message__time_place_right',
      message: `Круто!!!`,
      timeMessage: '9:10'
    });

    this.children.message6 = new Message({
      messageClassModifier: '',
      messageTimeClassModifier: '',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
      accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
      veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
      officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
      modi veniam rem!`,
      timeMessage: '9:05'
    });

    this.children.message7 = new Message({
      messageClassModifier: '',
      messageTimeClassModifier: '',
      message: `Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не
      попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
      timeMessage: '9:00'
    });

    this.children.message8 = new Message({
      messageClassModifier: '',
      messageTimeClassModifier: '',
      message: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила
      Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью
      500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с
      собой забрали только кассеты с пленкой.`,
      timeMessage: '8:55'
    });

    this.children.button = new Button({
      label: '',
      className: 'message-enter__send-btn',
      events: {
        click: () => this.handleClick(),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const chatPage = new ChatPage();
document.querySelector('#app')!.append(chatPage.getContent()!);
chatPage.dispatchComponentDidMount();
