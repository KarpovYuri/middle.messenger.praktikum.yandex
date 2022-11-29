# Мессенджер

* Макет в Figma: [Ссылка на макет](https://www.figma.com/file/k9as4XTLEBJwQ8zgFJw2RK/Chat_Karpov?node-id=0%3A1)
* Опубликованное в Netlify приложение: [Ссылка на приложение](https://amazing-syrniki-922dd2.netlify.app)
* [Pull Request](https://github.com/KarpovYuri/middle.messenger.praktikum.yandex/pull/2)

## Описание

Самостоятельная проектная работа, выполненная в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/)  [Яндекс.Практикума](https://praktikum.yandex.ru).

## Спринт 1

* Свёрстан макет приложения 'Мессенджер' в Figma.
* Настроена сборка с использованием Parcel и раздача статики сервером на Express.
* Свёрстаны основные страницы приложения с использованием шаблонизатора Handlebars.
* Приложение автоматически деплоится на Netlify из ветки `deploy`.

## Спринт 2

* Проект переведен на TypeScript.
* Реализована шина событий `EventBus.ts`.
* Реализован компонент `Block.ts` с пропсами, жизненным циклом и реактивным ререндером при изменении пропсов на `Proxy`.
* Проект переписан с учётом компонентного подхода.
* Реализована живая валидация форм.
* Реализован аналог `fetch` запросов к серверу `HTTPTransport.ts`.

## Установка и запуск

### Установка

Установка зависимостей:

```bash
npm i
```

### Сборка и запуск

Сборка проекта. Используемый сборщик [Parcel](https://parceljs.org/):

```bash
npm run build
```

Сборка проекта с наблюдением за файлами (Hot Reloading):

```bash
npm run dev
```

Сборка проекта и запуск сервера на Express, на порту 3000. http://localhost:3000:

```bash
npm run start
```

**Мессенджер**

- [Ссылка на приложение](https://amazing-syrniki-922dd2.netlify.app)
