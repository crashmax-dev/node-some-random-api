import axios from "axios";
import APIError from "@errors/APIError";

/**
 *
 * @param m {string} endpoint
 * @param a {string} arguments
 */
// TODO: rewrite code
export default async function (m: string, a?: any): Promise<any> {
  try {
    let uri = `https://some-random-api.ml/${m}?a=b`;

    if (a !== undefined) {
      a.forEach((arg: { name: string; value: string; }) => {
        if (arg.name !== undefined && arg.value !== undefined)
          uri += `&${arg.name}=${arg.value}`;
      })
    }

    const response = await axios.get(encodeURI(uri));
    return response.data;
  } catch (error) {
    throw new APIError(error.status, error.message);
  }
}
