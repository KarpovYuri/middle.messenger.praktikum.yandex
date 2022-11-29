---
title: "Авторизация"
submit: "Войти"
url: "./signup.hbs"
url-title: "Ещё не зарегистрированы?"
url-text: "Регистрация"
fields:
  - name: "login"
    label: "Login"
    type: "text"
    placeholder: "Логин"
    error-text: "Ошибка"
  - name: "password"
    label: "Password"
    type: "password"
    placeholder: "Пароль"
    error-text: "Ошибка"
---

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <link rel="stylesheet" href="../vendor/normalize.css">
  <link rel="stylesheet" href="../vendor/fonts.sass">
  <link rel="stylesheet" href="../sass/form.sass">
</head>

<body class="root">
  <main>
    <form class="form">
      <h1 class="form__title">{{title}}</h1>
      <fieldset class="form__fieldset">
        {{#each fields}}
        {{>input name=name label=label type=type placeholder=placeholder error=error-text}}
        {{/each}}
      </fieldset>
      {{>button submit=submit}}
      <p class="form__link-wrapper">
        {{url-title}}
        <a class="form__link" href={{url}}>{{url-text}}</a>
      </p>
    </form>
  </main>
</body>

</html>
