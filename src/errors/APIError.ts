export default class APIError extends Error {
  /**
   * Class for handling errors when making API requests.
   * @param code {number} Status code.
   * @param message {string} Detailed information about the error.
   */
  constructor(code: number, message: string) {
    super(`During the execution of the request, an error occurred with the status ${code}: ${message}`);
  }
}
