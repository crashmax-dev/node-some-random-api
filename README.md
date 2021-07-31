<h2 align="center">Node Some Random API (NSRA)</h2>
<p align="center">Promise-based Node.js wrapper for <a href="https://some-random-api.ml">Some Random API</a>.</p>
<p align="center">
  <a href="https://github.com/Pelfox/node-some-random-api/actions"><img src="https://img.shields.io/github/workflow/status/Pelfox/node-some-random-api/Build%20&%20Publish%20library" alt="NSRA library build state." /></a>
  <a href="https://https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/v/node-some-random-api" alt="NSRA npm status."/></a>
  <a href="https://https://www.npmjs.com/package/node-some-random-api"><img src="https://img.shields.io/npm/dw/node-some-random-api" alt="NSRA downloads counter" /></a>
</p>

### Installation

---

##### Requirements:

- node: **12.0.0** or newer,
- npm: **6.9.0** or newer.

##### Download library:

Via npm:

```bash
npm install node-some-random-api
```

Or, if you're using yarn:

```bash
yarn add node-some-random-api
```

### Basic usage

---

```js
const someRandomAPI = require("node-some-random-api");
const client = new someRandomAPI.SRAClient("put-here-your-token");

client.dog().then((response) => console.log(response));
```
