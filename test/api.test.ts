import { SRAClient } from "../src";

const api = new SRAClient();

it('animal/dog', async () => {
  api.dog().then(({ fact, image }) => {
    expect(fact).not.toBeUndefined();
    expect(image).not.toBeUndefined();
  });
});