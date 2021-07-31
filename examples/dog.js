const someRandomAPI = require('node-some-random-api');
const client = new someRandomAPI.SRAClient();

client.dog().then((response) => console.log(`Look at this cute dog! ${response.image}`));
