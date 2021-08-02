import { writeFile } from "fs";
import { promisify } from "util";
import { SRAClient } from "../src";

const writeFilePromise = promisify(writeFile);
const api = new SRAClient("");

it("Look and read something about this nice dog!", async () => {
  api.dog().then(({ fact, image }) => {
    expect(fact).not.toBeUndefined();
    expect(image).not.toBeUndefined();
  });
});

it("Get fluffy fox image and fact!", async () => {
  api.fox().then(({ fact, image }) => {
    expect(fact).not.toBeUndefined();
    expect(image).not.toBeUndefined();
  });
});

it("Get welcome image!", async () => {
  api
    .greetingImage({
      template: 4,
      avatar:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      background: "rainbow",
      discriminator: 6460,
      username: "crashmax",
      guildName: "???",
      memberCount: 10,
      textcolor: "black",
      type: "join",
    })
    .then((buffer) => {
      writeFilePromise(__dirname + "/banner.png", Buffer.from(buffer));
    });
});

it("triggered!", async () => {
  api
    .triggered(
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    )
    .then((buffer) => {
      writeFilePromise(__dirname + "/triggered.gif", Buffer.from(buffer));
    });
});
