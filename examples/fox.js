const someRandomAPI = require('node-some-random-api');
const client = new someRandomAPI.SRAClient();

client.fox().then((response) => console.log(`Here is another fact about the foxes: ${response.fact}`));
