import API, { ChatsAPI, ChatUsers } from '../api/ChatsAPI';
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

  addUserToChat(data: ChatUsers) {
    this.api.addUsers(data);
    router.go('/messenger');
  }

  deleteUserToChat(data: ChatUsers) {
    this.api.deleteUsers(data);
    router.go('/messenger');
  }

  getUserFromChat(data: number) {
    return this.api.getUsers(data);
  }

  async delete(id: number) {
    await this.api.delete(id);
    store.set('selectedChat', undefined);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(chatId: number, title: string, avatar: string) {
    store.set('selectedChat', chatId);
    store.set('title', title);
    store.set('avatar', avatar);
    localStorage.setItem('selectedChat', `${chatId}`);
    localStorage.setItem('title', `${title}`);
    localStorage.setItem('avatar', `${avatar}`);
  }
}

export default new ChatsController();
