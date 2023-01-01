import API, { UserAPI } from '../api/UserAPI';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.fetchUser();
    } catch (error: any) {
      console.error(error);
    }
  }
}

export default new UserController();
