import Block from '../../utils/Block';
import template from './chatPage.hbs';
import { UserCard } from '../../components/UserCard/userCard';
import { Message } from '../../components/Message/message';
import { Button } from '../../components/Button/button';
import handleSubmit from '../../utils/handleSubmit';
import './chatPage.scss';

export class ChatPage extends Block {
  constructor() {
    super({
      userCards: [
        {
          userName: 'Косой',
          lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
          dateLastMessage: '10:49',
          qtyUnreadMessage: '2'
        },
        {
          userName: 'Алибаба',
          lastMessage: 'А в тюрьме сейчас ужин… макароны…',
          dateLastMessage: '9:00',
          qtyUnreadMessage: '12'
        },
        {
          userName: 'Хмырь',
          lastMessage: 'Это тебе не мелочь по карманам тырить!',
          dateLastMessage: 'ПН',
          qtyUnreadMessage: '1024'
        },
        {
          userName: 'Трошкин',
          lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
          dateLastMessage: 'ВС',
          qtyUnreadMessage: '123'
        },
        {
          userName: 'Anonimus',
          lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
          quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
          saepe!`,
          dateLastMessage: 'СБ',
          qtyUnreadMessage: ''
        },
        {
          userName: 'Косой',
          lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
          dateLastMessage: '10:49',
          qtyUnreadMessage: '2'
        },
        {
          userName: 'Алибаба',
          lastMessage: 'А в тюрьме сейчас ужин… макароны…',
          dateLastMessage: '9:00',
          qtyUnreadMessage: '12'
        },
        {
          userName: 'Хмырь',
          lastMessage: 'Это тебе не мелочь по карманам тырить!',
          dateLastMessage: 'ПН',
          qtyUnreadMessage: '1024'
        },
        {
          userName: 'Трошкин',
          lastMessage: 'Прошу вас, возьмите в руки космические ложки. Подкрепитесь основательно. Ракета до обеда на землю не вернется.',
          dateLastMessage: 'ВС',
          qtyUnreadMessage: '123'
        },
        {
          userName: 'Anonimus',
          lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni quae aspernatur vel ab provident
          quibusdam. Hic fugiat provident deleniti aut, perferendis ratione numquam debitis soluta unde temporibus optio
          saepe!`,
          dateLastMessage: 'СБ',
          qtyUnreadMessage: ''
        }
      ],
      messages: [
        {
          messageClassModifier: 'message_place_right',
          messageTimeClassModifier: 'message__time_place_right',
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
          accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
          veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
          officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
          modi veniam rem!`,
          timeMessage: '9:30'
        },
        {
          messageClassModifier: 'message_place_right',
          messageTimeClassModifier: 'message__time_place_right',
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
          accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
          veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
          officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
          modi veniam rem!`,
          timeMessage: '9:25'
        },
        {
          messageClassModifier: 'message_place_right',
          messageTimeClassModifier: 'message__time_place_right',
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
          accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
          veniam rem!`,
          timeMessage: '9:20'
        },
        {
          messageClassModifier: 'message_place_right',
          messageTimeClassModifier: 'message__time_place_right',
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          timeMessage: '9:15'
        },
        {
          messageClassModifier: 'message_place_right',
          messageTimeClassModifier: 'message__time_place_right',
          message: `Круто!!!`,
          timeMessage: '9:10'
        },
        {
          messageClassModifier: '',
          messageTimeClassModifier: '',
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et officia
          accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae, modi
          veniam rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis facilis obcaecati quia et
          officia accusamus porro animi tempore repellendus sequi corporis praesentium ullam architecto delectus vitae,
          modi veniam rem!`,
          timeMessage: '9:05'
        },
        {
          messageClassModifier: '',
          messageTimeClassModifier: '',
          message: `Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не
          попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
          timeMessage: '9:00'
        },
        {
          messageClassModifier: '',
          messageTimeClassModifier: '',
          message: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила
          Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью
          500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с
          собой забрали только кассеты с пленкой.`,
          timeMessage: '8:55'
        }
      ],
    });
  }

  init() {

    this.props.UserCard = this.props.userCards.map((card: any, index: number) => this.children[`userCard${index+1}`] = new UserCard(card));
    this.props.Message = this.props.messages.map((message: any, index: number) => this.children[`message${index+1}`] = new Message(message));

    this.children.button = new Button({
      label: '',
      className: 'message-enter__send-btn',
      type: 'submit',
      disabled: '',
      events: {
        click: (evt: Event) => handleSubmit(evt),
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
