import RequestHandler from "./rest/RequestHandler";

export class SRAClient {
  /**
   * Client's token to create requests.
   * @type {string | undefined}
   * @private
   * @readonly
   */
  private readonly _t: string | undefined;

  /**
   * `SRAClient` — client class of wrapper for `Some Random API`.
   * Main SRA website: https://some-random-api.ml.
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
    return await RequestHandler("animal/raccoon");
  }

  /**
   * An endpoint that sends a random image and fact of a kangaroo.
   * @returns {object} Returned data from API.
   */
  public async kangaroo() {
    return await RequestHandler("animal/kangaroo");
  }

  /**
   * An endpoint that sends a random image and fact of a fox.
   * @returns {object} Returned data from API.
   */
  public async fox() {
    return await RequestHandler("animal/fox");
  }

  /**
   * An endpoint that sends a random image and fact of a birb.
   * @returns {object} Returned data from API.
   */
  public async birb() {
    return await RequestHandler("animal/birb");
  }

  /**
   * An endpoint that sends a random image and fact of a whale.
   * @returns {object} Returned data from API.
   */
  public async whale() {
    return await RequestHandler("animal/whale");
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
   * An endpoint that returns a random quote from anime.
   * @returns {object} Returned data from API.
   */
  public async animeQuote() {
    return await RequestHandler("animu/quote");
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
  public async glass(avatar: string) {
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
    return await RequestHandler("canvas/invertgreyscale", [{name: 'avatar', value: avatar}, {
      name: 'key',
      value: this._t
    }]);
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

  /**
   * Search for word definition in dictionary.
   * @param word {string} Search word.
   * @returns {object} Returned data from API.
   */
  public async dictionary(word: string) {
    return await RequestHandler("dictionary", [{name: "word", value: word}]);
  }

  /**
   * Check for strings similarity.
   * @param start {string} First string.
   * @param end {string} Last string.
   * @returns {object} Returned data from API.
   */
  public async stringSimilarity(start: string, end: string) {
    return await RequestHandler("stringsimilarity", [{name: "string1", value: start}, {name: "string2", value: end}]);
  }

  /**
   * Applies a sepia filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async sepia(avatar: string) {
    return await RequestHandler("canvas/sepia", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a red filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async red(avatar: string) {
    return await RequestHandler("canvas/red", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a green filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async green(avatar: string) {
    return await RequestHandler("canvas/green", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a blue filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blue(avatar: string) {
    return await RequestHandler("canvas/blue", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a "blurple" filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blurple(avatar: string) {
    return await RequestHandler("canvas/blurple", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a new Discord color filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blurple2(avatar: string) {
    return await RequestHandler("canvas/blurple2", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a filter with color.
   * @param avatar {string} Avatar to work with.
   * @param color {string} HEX-color (without "#").
   * @returns {object} Returned data from API.
   */
  public async color(avatar: string, color: string) {
    return await RequestHandler("canvas/color", [{name: 'avatar', value: avatar}, {name: 'color', value: color}]);
  }

  /**
   * Applies a pixelate filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async pixelate(avatar: string) {
    return await RequestHandler("canvas/pixelate", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Applies a blur filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blur(avatar: string) {
    return await RequestHandler("canvas/blur", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Generates an fake YouTube comment.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param comment {string} Content of the comment.
   * @returns {object} Returned data from API.
   */
  public async youtubeComment(avatar: string, username: string, comment: string) {
    return await RequestHandler("canvas/youtube-comment", [{name: 'avatar', value: avatar}, {
      name: 'username',
      value: username
    }, {name: 'comment', value: comment}, {name: 'key', value: this._t}]);
  }

  /**
   * Generates an fake Tweet.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param displayName {string} Author display name.
   * @param comment {string} Content of the comment.
   * @returns {object} Returned data from API.
   */
  public async tweet(avatar: string, username: string, displayName: string, comment: string) {
    return await RequestHandler("canvas/tweet", [{name: 'avatar', value: avatar}, {
      name: 'username',
      value: username
    }, {name: 'displayname', value: displayName}, {name: 'comment', value: comment}, {name: 'key', value: this._t}]);
  }

  /**
   * Generate image from meme "its so stupid".
   * @param avatar {string} Avatar to work with.
   * @param dog {string} Dog to work with.
   * @returns {object} Returned data from API.
   */
  public async itsSoStupid(avatar: string, dog: string) {
    return await RequestHandler("canvas/its-so-stupid", [{name: 'avatar', value: avatar}, {
      name: 'dog',
      value: dog
    }, {name: 'key', value: this._t}]);
  }

  /**
   * Generate image from meme "SIMP".
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async simpCard(avatar: string) {
    return await RequestHandler("canvas/simpcard", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Generate image from meme "horny".
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async hornyCard(avatar: string) {
    return await RequestHandler("canvas/hornycard", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * Generate loli police meme.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async lolice(avatar: string) {
    return await RequestHandler("canvas/lolice", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }

  /**
   * View color!
   * @param hex {string} HEX to view (without "#").
   * @returns {object} Returned data from API.
   */
  public async colorViewer(hex: string) {
    return await RequestHandler("canvas/color", [{name: 'hex', value: hex}, {name: 'key', value: this._t}]);
  }

  /**
   * Convert HEX into RGB.
   * @param rgb {string} RGB to convert.
   * @returns {object} Returned data from API.
   */
  public async hex(rgb: string) {
    return await RequestHandler("canvas/hex", [{name: 'rgb', value: rgb}, {name: 'key', value: this._t}]);
  }

  /**
   * Convert RGB into HEX.
   * @param hex {string} HEX to convert.
   * @returns {object} Returned data from API.
   */
  public async rgb(hex: string) {
    return await RequestHandler("canvas/rgb", [{name: 'hex', value: hex}, {name: 'key', value: this._t}]);
  }

  /**
   * Generate image from "petpet" meme.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async petpet(avatar: string) {
    return await RequestHandler("premium/petpet", [{name: 'avatar', value: avatar}, {name: 'key', value: this._t}]);
  }
}
