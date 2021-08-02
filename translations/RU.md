<h2 align="center">Node Some Random API (NSRA)</h2>
<p align="center">Promise-based Node.js wrapper for <a href="https://some-random-api.ml">Some Random API</a>.</p>
<p align="center">
  <a href="https://github.com/Pelfox/node-some-random-api/actions"><img src="https://img.shields.io/github/workflow/status/Pelfox/node-some-random-api/Build%20&%20Publish%20library" alt="Сборка NSRA" /></a>
  <a href="https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/v/node-some-random-api" alt="Версия NSRA"/></a>
  <a href="https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/dw/node-some-random-api" alt="Кол-во загрузок NSRA" /></a>
</p>

### О библиотеке

---

Библиотека NSRA создана для для упрощения и ускорения работы с [Some Random API](https://some-random-api.ml) на языках TypeScript и JavaScript. Вот несколько преимуществ библиотеки:

- Библиотека построена на принципах Promise'ов.
- Задействованы почти все функции Some Random API.
- Поддержка библиотеки.

### Установка

---

##### Требования:

- node: **12.0.0** или новее,
- npm: **6.9.0** или новее.

##### Установка библиотеки:

Установка при помощи npm:

```bash
npm install node-some-random-api
```

Установка при помощи Yarn:

```bash
yarn add node-some-random-api
```

### Пример использования

---

```js
const someRandomAPI = require("node-some-random-api");
const client = new someRandomAPI.SRAClient("ваш-токен-тут");

client.dog().then((response) => console.log(response));
```

### Другие примеры использования

---

Вы можете найти другие примеры использования [здесь](./examples/). Вы также можете добавить свой пример, создав новый [Pull Request](https://github.com/Pelfox/node-some-random-api/pulls).

### Лицензия

---

Библиотека [NSRA](https://github.com/Pelfox/node-some-random-api) лицензирована и опубликована прд лицензией **GPL-3.0**. Вы можете прочитать текст лицензии [здесь](./LICENSE).

> &copy; Pelfox & Contributors, 2021. Сделано на Земле :)
