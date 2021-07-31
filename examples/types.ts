// Library has types!
import { SRAClient } from "node-some-random-api";
const client = new SRAClient();

client
  .lyrics("Never Gonna Give You Up")
  .then((response) => console.log(`Raw data from the API. ${response}`));
