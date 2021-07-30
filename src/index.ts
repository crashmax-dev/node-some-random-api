import RequestHandler from "@rest/RequestHandler";

export default class SRAClient {
  private readonly _t: string | undefined;

  /**
   * `SRAClient` — wrapper for `Some Random API`.
   * @param token {string?} Token, that you got from SRA.
   */
  public constructor(token?: string) {
    this._t = token;
  }

  /**
   * Get passed SRA token (if any was passed).
   * @returns {string | undefined} Passed token.
   */
  public get token(): string | undefined {
    return this._t;
  }

  /**
   * An endpoint that sends a random image and fact of a dog.
   * @returns {object} Returned data from API.
   */
  public async dog() {
    return await RequestHandler("animal/dog");
  }

  /**
   * An endpoint that sends a random image and fact of a cat.
   * @returns {object} Returned data from API.
   */
  public async cat() {
    return await RequestHandler("animal/cat");
  }

  /**
   * An endpoint that sends a random image and fact of a panda.
   * @returns {object} Returned data from API.
   */
  public async panda() {
    return await RequestHandler("animal/panda");
  }

  /**
   * An endpoint that sends a random image and fact of a red panda.
   * @returns {object} Returned data from API.
   */
  public async red_panda() {
    return await RequestHandler("animal/red_panda");
  }

  /**
   * An endpoint that sends a random image and fact of a koala.
   * @returns {object} Returned data from API.
   */
  public async koala() {
    return await RequestHandler("animal/koala");
  }

  /**
   * An endpoint that sends a random image and fact of a bird.
   * @returns {object} Returned data from API.
   */
  public async bird() {
    return await RequestHandler("animal/bird");
  }

  /**
   * An endpoint that sends a random image and fact of a raccoon.
   * @returns {object} Returned data from API.
   */
  public async raccoon() {
    return await RequestHandler("animu/raccoon");
  }

  /**
   * An endpoint that sends a random image and fact of a kangaroo.
   * @returns {object} Returned data from API.
   */
  public async kangaroo() {
    return await RequestHandler("animu/kangaroo");
  }

  /**
   * An endpoint that returns a random winking gif.
   * @returns {object} Returned data from API.
   */
  public async wink() {
    return await RequestHandler("animu/wink");
  }

  /**
   * An endpoint that returns a random patting gif.
   * @returns {object} Returned data from API.
   */
  public async pat() {
    return await RequestHandler("animu/pat");
  }

  /**
   * An endpoint that returns a random hugging gif.
   * @returns {object} Returned data from API.
   */
  public async hug() {
    return await RequestHandler("animu/hug");
  }

  /**
   * An endpoint which searches for lyrics.
   * @param title {string} Name of the song.
   * @returns {object} Returned data from API.
   */
  public async lyrics(title: string) {
    return await RequestHandler("lyrics", [{name: 'title', value: title}]);
  }

  /**
   * An endpoint which returns jokes.
   * @returns {object} Returned data from API.
   */
  public async joke() {
    return await RequestHandler("joke");
  }

  /**
   * Search for information about pokemon'.
   * @param pokemon {string} Pokemon name.
   * @returns {object} Returned data from API.
   */
  public async pokedex(pokemon: string) {
    return await RequestHandler("pokedex", [{name: 'pokemon', value: pokemon}]);
  }

  /**
   * Simplified minecraft api.
   * @param username {string} Username of Minecraft player.
   * @returns {object} Returned data from API.
   */
  public async minecraft(username: string) {
    return await RequestHandler("mc", [{name: 'username', value: username}]);
  }

  /**
   * Very bad meme api.
   * @returns {object} Returned data from API.
   */
  public async meme() {
    return await RequestHandler("meme");
  }

  /**
   * A meme api which generates a fake
   * "real looking" Discord Bot Token.
   * @param id {number?} ID of the application.
   * @returns {object} Returned data from API.
   */
  public async discordBotToken(id?: number) {
    return await RequestHandler("bottoken", [{name: 'id', value: id}]);
  }

  /**
   * Lonely boi now has a friend.
   * This method requires token authorization!
   * @param message {string} Message from you.
   * @returns {object} Returned data from API.
   */
  public async chatBot(message: string) {
    return await RequestHandler("chatbot", [{name: 'message', value: message}, {name: 'key', value: this._t}]);
  }

  /**
   * Make an image more gay.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async gay(avatar: string) {
    return await RequestHandler("canvas/gay", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Make an image look more like a mosaic glass.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async glassOverlay(avatar: string) {
    return await RequestHandler("canvas/glass", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Wasted API.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async wasted(avatar: string) {
    return await RequestHandler("canvas/wasted", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Respect +100.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async passed(avatar: string) {
    return await RequestHandler("canvas/passed", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Put an image to jail.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async jail(avatar: string) {
    return await RequestHandler("canvas/jail", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Welcome back, comrade.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async comrade(avatar: string) {
    return await RequestHandler("canvas/comrade", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * No meaningful description *triggered*.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async triggered(avatar: string) {
    return await RequestHandler("canvas/triggered", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async greyscale(avatar: string) {
    return await RequestHandler("canvas/greyscale", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a invert filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async invert(avatar: string) {
    return await RequestHandler("canvas/invert", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a invert and greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async invertgreyscale(avatar: string) {
    return await RequestHandler("canvas/invertgreyscale", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a brightness filter.
   * @param avatar {string} Avatar to work with.
   * @param brightness {number?} Brightness to use.
   * @returns {object} Returned data from API.
   */
  public async brightness(avatar: string, brightness?: number) {
    return await RequestHandler("canvas/invertgreyscale", [{name: 'avatar', value: avatar}, {
      name: 'brightness',
      value: brightness
    }, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a threshold filter.
   * @param avatar {string} Avatar to work with.
   * @param threshold {number?} Threshold to use.
   * @returns {object} Returned data from API.
   */
  public async threshold(avatar: string, threshold?: number) {
    return await RequestHandler("canvas/threshold", [{name: 'avatar', value: avatar}, {
      name: 'threshold',
      value: threshold
    }, {name: 'key', value: this._t}]);
  }
}
