import fetch, {Response} from "node-fetch";

/**
 * Method for creating the request to the API.
 * @param method {string} Endpoint, that we requesting.
 * @param args {any} Additional to the request arguments.
 * @returns {Promise<Response>} Response from the server.
 */
export default async function (method: string, args?: any): Promise<Response> {
  try {
    // Default (or start) request URI.
    const uri = `https://some-random-api.ml/${method}?${new URLSearchParams(args)}`;

    // Fetch & convert the response to the JSON.
    return (await fetch(uri)).json();
  } catch (error) {
    throw new Error(`During the execution of the request, an error occurred: ${error}.`);
  }
}
