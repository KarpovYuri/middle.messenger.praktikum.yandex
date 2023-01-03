import handleSubmit from './handleSubmit';
import Router from './Router';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import noAvatar from '../assets/images/no-avatar.png';
import ChatsController from '../controllers/ChatsController';

export const signinPageData = {
  title: {
    title: 'Авторизация'
  },
  inputs: [
    {
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      classModifier: '',
      validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
      errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: '',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    }
  ],
  link: {
    urlText: 'Регистрация',
    url: "/sign-up",
  },
  button: {
    label: 'Войти',
    type: 'submit',
    events: {
      click: (evt: Event) => {
        const data = handleSubmit(evt);
        AuthController.signin(data);
      }
    }
  }
}

export const signupPageData = {
  title: {
    title: 'Регистрация'
  },
  inputs: [
    {
      label: 'First Name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    },
    {
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    },
    {
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      classModifier: 'field_columns_two',
      validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
      errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'E-mail',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$"',
      errorMessage: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака»',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      classModifier: 'field_columns_two',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'phone',
      placeholder: 'Телефон',
      classModifier: 'field_columns_two',
      validation: 'pattern="^\\+?[0-9]{10,15}$"',
      errorMessage: 'От 10 до 15 символов, состоит из цифр, может начинаться с символа плюс.',
    }
  ],
  button: {
    label: 'Зарегистрироваться',
    type: 'submit',
    events: {
      click: (evt: Event) => {
        const data = handleSubmit(evt);
        AuthController.signup(data);
      }
    }
  },
  link: {
    urlText: 'Вход',
    url: "/"
  },
}


export const profilePageData = {
  noAvatar: noAvatar,
  title: {
    title: 'Профиль'
  },
  inputs: [
    {
      label: 'First Name',
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    },
    {
      label: 'Second Name',
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[А-ЯЁA-Z]{1,}[а-яёa-z-]+$"',
      errorMessage: 'Латиница или кириллица, первая буква заглавня, без пробелов, цифр и спецсимволов (допустим только дефис)',
    },
    {
      label: 'Display Name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Никнейм',
      classModifier: 'field_columns_two',
      validation: '',
      errorMessage: 'Обязательное поле',
    },
    {
      label: 'Login',
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      classModifier: 'field_columns_two',
      validation: 'minlength="3" maxlength="20" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$"',
      errorMessage: 'Латиница, может содержать цифры, но не состоять из них, (допустимы дефис и нижнее подчёркивание)',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'text',
      placeholder: 'E-mail',
      classModifier: 'field_columns_two',
      validation: 'pattern="^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$"',
      errorMessage: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака»',
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'phone',
      placeholder: 'Телефон',
      classModifier: 'field_columns_two',
      validation: 'pattern="^\\+?[0-9]{10,15}$"',
      errorMessage: 'От 10 до 15 символов, состоит из цифр, может начинаться с символа плюс.',
    },
  ],
  button: {
    label: 'Сохранить',
    type: 'submit',
    events: {
      click: (evt: Event) => {
        const data = handleSubmit(evt);
        UserController.updateProfile(data);
      }
    }
  },
  linkBack: {
    urlText: 'Назад',
    url: "/messenger"
  },
  logoutLink: {
    urlText: 'Выйти из аккаунта',
    url: '/',
    events: {
      click: () => AuthController.logout()
    },
  },
  changePasswordLink: {
    urlText: 'Изменить пароль',
    url: '/password',
  },
  events: {
    change: (evt: InputEvent) => {
      const { files }: { files: FileList | null } = evt.target as HTMLInputElement;
      if (!files?.length) {
        return;
      }
      const formData = new FormData();
      formData.append('avatar', files[0]);
      UserController.updateAvatar(formData);
    },
  },
}

export const passwordPageData = {
  title: {
    title: 'Смена пароля'
  },
  inputs: [
    {
      label: 'Old Password',
      name: 'oldPassword',
      type: 'password',
      placeholder: 'Старый пароль',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    {
      label: 'New Password',
      name: 'newPassword',
      type: 'password',
      placeholder: 'Новый пароль',
      validation: 'minlength="8" maxlength="40" pattern="^(?=.*[0-9])(?=.*[А-ЯЁA-Z])[а-яА-ЯёЁa-zA-Z0-9]+$"',
      errorMessage: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
  ],
  link: {
    urlText: 'Назад',
    url: "/settings",
  },
  button: {
    label: 'Изменить',
    type: 'submit',
    events: {
      click: (evt: Event) => {
        const data = handleSubmit(evt);
        UserController.updatePassword(data);
      }
    }
  }
}

export const messagePageData = {
  userCards: [
    {
      userName: 'Чат #1',
      lastMessage: 'Автомашину куплю с магнитофоном, пошью костюм с отливом – и в Ялту!',
      dateLastMessage: '10:49',
      qtyUnreadMessage: '2'
    },
  ],
  messages: [
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
  button: {
    label: '',
    className: 'message-enter__send-btn',
    type: 'submit',
    disabled: '',
    events: {
      click: (evt: Event) => handleSubmit(evt),
    },
  },
  linkProfile: {
    url: '/settings',
    urlText: 'Profile',
    addClass: 'chat__edit-profile'
  },
  linkAddChat: {
    urlText: 'Add chat',
    addClass: 'chat__add-chat',
    events: {
      click: async () => await ChatsController.create('Тестовый Чат'),
    },
  }
}

export const notFoundPageData = {
  error: {
    errorTitle: '404',
    errorDesc: 'Страница не найдена',
  },
  link: {
    urlText: 'Назад',
    events: {
      click: () => Router.back()
    },
  }
}

export const serverErrorPageData = {
  error: {
    errorTitle: '500',
    errorDesc: 'Ошибка сервера'
  },
  link: {
    urlText: 'Назад',
    events: {
      click: () => Router.back()
    },
  }
}
