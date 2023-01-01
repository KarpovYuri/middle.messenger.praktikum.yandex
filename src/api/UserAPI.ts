import BaseAPI from './BaseAPI';

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}
export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
