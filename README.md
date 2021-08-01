<h2 align="center">Node Some Random API (NSRA)</h2>
<p align="center">Promise-based Node.js wrapper for <a href="https://some-random-api.ml">Some Random API</a>.</p>
<p align="center">
  <a href="https://github.com/Pelfox/node-some-random-api/actions"><img src="https://img.shields.io/github/workflow/status/Pelfox/node-some-random-api/Build%20&%20Publish%20library" alt="NSRA library build state." /></a>
  <a href="https://https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/v/node-some-random-api" alt="NSRA npm status."/></a>
  <a href="https://https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/dw/node-some-random-api" alt="NSRA downloads counter" /></a>
</p>

### About

---

The NSRA library was created in order to simplify and speed up working with the [Some Random API](https://some-random-api.ml) in the TypeScript and JavaScript environment. Here are some of the main benefits:

- The library is completely built on the principle of Promises.
- Almost complete coverage of Endpoints by the library.
- Continuous improvement and completion of the library.

### Installation

---

##### Requirements:

- node: **12.0.0** or newer,
- npm: **6.9.0** or newer.

##### Download library:

Installation using npm package manager:

```bash
npm install node-some-random-api
```

Or, if you are using Yarn, enter this command::

```bash
yarn add node-some-random-api
```

### Basic usage

---

```js
const { SRAClient } = require("node-some-random-api");
const client = new SRAClient("put-here-your-token");

client
  .dog()
  .then(response => console.log(response));
```

### Examples

---

You can find some examples [here](./examples/). You can also supplement them by creating a new [Pull Request](https://github.com/Pelfox/node-some-random-api/pulls) with the written examples.

### License

---

The [NSRA](https://github.com/Pelfox/node-some-random-api) library is licensed and published under the **GPL-3.0** license. You can read the text of this license [here](./LICENSE).

> &copy; Pelfox & Contributors, 2021. Created on Earth :)
