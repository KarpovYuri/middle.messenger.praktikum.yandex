import BaseAPI from './BaseAPI';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateAvatar(data: FormData) {
    return this.http.post('/profile/avatar', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
