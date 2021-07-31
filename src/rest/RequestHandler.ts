import axios from "axios";
import APIError from "../errors/APIError";

/**
 * Method for creating the request to the API.
 * @param method {string} Endpoint, that we requesting.
 * @param args {Array<RequestArgument>} Additional arguments.
 * @returns {Promise<any>} Response from the server.
 * @throws APIError If any API error exists.
 */
export default async function (method: string, args?: Array<RequestArgument>): Promise<any> {
  try {
    // Default (or start) request URI.
    // TODO: remove "?a=b" from URI.
    let uri: string = `https://some-random-api.ml/${method}?a=b`;

    // This is a generator for our arguments array.
    args?.forEach((arg: RequestArgument) => {
      if (arg.name && arg.value) uri.concat(`&${arg.name}=${arg.value}`);
    });

    // Returning only "data" field (if exist).
    return (await axios.get(encodeURI(uri))).data
  } catch (error) {
    // Here we can catch 2 types of errors:
    // 1. Response error (if something went wrong with response).
    // 2. Request error (if something went wrong with our request).

    // So, this is handler for the response error.
    if (error.response) {
      throw new APIError(error.response.status, error.response.statusText);
    }

    // And for the request error.
    if (error.request) {
      throw new APIError(error.request.status, error.request.statusText);
    }
  }
}

/**
 * `RequestArgument` — interface for our request arguments.
 * @example {name: 'smth', value: 'good!'}
 */
export interface RequestArgument {
  name: string,
  value?: string | number | boolean;
}
