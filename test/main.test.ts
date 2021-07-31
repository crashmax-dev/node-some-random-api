import { SRAClient } from "../src";
const api = new SRAClient();

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
