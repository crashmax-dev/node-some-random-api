const { SRAClient } = require("node-some-random-api");
const api = new SRAClient();

const { writeFile } = require("fs");
const { promisify } = require("util");
const writeFilePromise = promisify(writeFile);

api
  .triggered(
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  )
  .then((buffer) => {
    writeFilePromise(__dirname + "/triggered.gif", Buffer.from(buffer));
  });
