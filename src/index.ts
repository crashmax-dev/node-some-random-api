import RequestHandler from "./rest/RequestHandler";

export default class SRAClient {
  /**
   * `SRAClient` — wrapper for `Some Random API`.
   */
  public constructor() {}

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
   * @param cancer {boolean?} Do we need to use cancer?
   * @returns {object} Returned data from API.
   */
  public async lyrics(title: string, cancer?: boolean) {
    return await RequestHandler("lyrics", [{ name: 'title', value: title }, { name: 'cancer', value: cancer }]);
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
   * @param dym {string?} Dym.
   * @param key {string?} Key.
   * @returns {object} Returned data from API.
   */
  public async pokedex(pokemon: string, dym?: string, key?: string) {
    return await RequestHandler("pokedex", [{ name: 'pokemon', value: pokemon }, { 'dym': dym }, { 'key': key }]);
  }

  /**
   * Simplified minecraft api.
   * @param username {string} Username of Minecraft player.
   * @returns {object} Returned data from API.
   */
  public async minecraft(username: string) {
    return await RequestHandler("mc", [{ name: 'username', value: username }]);
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
   * @param id {number?} ID of the bot.
   * @returns {object} Returned data from API.
   */
  public async discordBotToken(id?: number) {
    return await RequestHandler("bottoken", [{ name: 'id', value: id }]);
  }

  /**
   * Lonely boi now has a friend.
   * @param message {string} Message from you.
   * @param key {string} API Key.
   * @returns {object} Returned data from API.
   */
  public async chatBot(message: string, key: string) {
    return await RequestHandler("chatbot", [{ name: 'message', value: message }, { name: 'key', value: key }]);
  }

  /**
   * Make an image more gay.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async gay(avatar: string, key?: string) {
    return await RequestHandler("canvas/gay", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Make an image look more like a mosaic glass.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async glassOverlay(avatar: string, key?: string) {
    return await RequestHandler("canvas/glass", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Wasted API.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async wasted(avatar: string, key?: string) {
    return await RequestHandler("canvas/wasted", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Respect +100.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async passed(avatar: string, key?: string) {
    return await RequestHandler("canvas/passed", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Put an image to jail.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async jail(avatar: string, key?: string) {
    return await RequestHandler("canvas/jail", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Welcome back, comrade.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async comrade(avatar: string, key?: string) {
    return await RequestHandler("canvas/comrade", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * No meaningful description *triggered*.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async triggered(avatar: string, key?: string) {
    return await RequestHandler("canvas/triggered", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Applies a greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async greyscale(avatar: string, key?: string) {
    return await RequestHandler("canvas/greyscale", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Applies a invert filter.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async invert(avatar: string, key?: string) {
    return await RequestHandler("canvas/invert", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Applies a invert and greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async invertgreyscale(avatar: string, key?: string) {
    return await RequestHandler("canvas/invertgreyscale", [{ name: 'avatar', value: avatar }, { name: 'key', value: key }]);
  }

  /**
   * Applies a brightness filter.
   * @param avatar {string} Avatar to work with.
   * @param brightness {number?} Brightness to use.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async brightness(avatar: string, brightness?: number, key?: string) {
    return await RequestHandler("canvas/invertgreyscale", [{ name: 'avatar', value: avatar }, { name: 'brightness', value: brightness }, { name: 'key', value: key }]);
  }

  /**
   * Applies a threshold filter.
   * @param avatar {string} Avatar to work with.
   * @param threshold {number?} Threshold to use.
   * @param key {string?} API Key.
   * @returns {object} Returned data from API.
   */
  public async threshold(avatar: string, threshold?: number, key?: string) {
    return await RequestHandler("canvas/threshold", [{ name: 'avatar', value: avatar }, { name: 'threshold', value: threshold }, { name: 'key', value: key }]);
  }
}
