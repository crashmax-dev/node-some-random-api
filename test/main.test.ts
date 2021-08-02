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
