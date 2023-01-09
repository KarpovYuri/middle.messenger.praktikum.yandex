import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import router from '../utils/Router';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  addUserToChat(data) {
    this.api.addUsers(data);
    router.go('/messenger');
  }

  async delete(id: number) {
    await this.api.delete(id);
    store.set('selectedChat', undefined);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(chatId: number, title: string) {
    store.set('selectedChat', chatId);
    store.set('title', title);
    localStorage.setItem('selectedChat', `${chatId}`);
    localStorage.setItem('title', `${title}`);
  }
}

export default new ChatsController();
