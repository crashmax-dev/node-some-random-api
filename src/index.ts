import RequestHandler from "./rest/RequestHandler";
import {Response} from "node-fetch";

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
  public async dog(): Promise<Response> {
    return await RequestHandler("animal/dog");
  }

  /**
   * An endpoint that sends a random image and fact of a cat.
   * @returns {object} Returned data from API.
   */
  public async cat(): Promise<Response> {
    return await RequestHandler("animal/cat");
  }

  /**
   * An endpoint that sends a random image and fact of a panda.
   * @returns {object} Returned data from API.
   */
  public async panda(): Promise<Response> {
    return await RequestHandler("animal/panda");
  }

  /**
   * An endpoint that sends a random image and fact of a red panda.
   * @returns {object} Returned data from API.
   */
  public async redPanda(): Promise<Response> {
    return await RequestHandler("animal/red_panda");
  }

  /**
   * An endpoint that sends a random image and fact of a koala.
   * @returns {object} Returned data from API.
   */
  public async koala(): Promise<Response> {
    return await RequestHandler("animal/koala");
  }

  /**
   * An endpoint that sends a random image and fact of a bird.
   * @returns {object} Returned data from API.
   */
  public async bird(): Promise<Response> {
    return await RequestHandler("animal/bird");
  }

  /**
   * An endpoint that sends a random image and fact of a raccoon.
   * @returns {object} Returned data from API.
   */
  public async raccoon(): Promise<Response> {
    return await RequestHandler("animal/raccoon");
  }

  /**
   * An endpoint that sends a random image and fact of a kangaroo.
   * @returns {object} Returned data from API.
   */
  public async kangaroo(): Promise<Response> {
    return await RequestHandler("animal/kangaroo");
  }

  /**
   * An endpoint that sends a random image and fact of a fox.
   * @returns {object} Returned data from API.
   */
  public async fox(): Promise<Response> {
    return await RequestHandler("animal/fox");
  }

  /**
   * An endpoint that sends a random image and fact of a birb.
   * @returns {object} Returned data from API.
   */
  public async birb(): Promise<Response> {
    return await RequestHandler("animal/birb");
  }

  /**
   * An endpoint that sends a random image and fact of a whale.
   * @returns {object} Returned data from API.
   */
  public async whale(): Promise<Response> {
    return await RequestHandler("animal/whale");
  }

  /**
   * An endpoint that returns a random winking gif.
   * @returns {object} Returned data from API.
   */
  public async wink(): Promise<Response> {
    return await RequestHandler("animu/wink");
  }

  /**
   * An endpoint that returns a random patting gif.
   * @returns {object} Returned data from API.
   */
  public async pat(): Promise<Response> {
    return await RequestHandler("animu/pat");
  }

  /**
   * An endpoint that returns a random hugging gif.
   * @returns {object} Returned data from API.
   */
  public async hug(): Promise<Response> {
    return await RequestHandler("animu/hug");
  }

  /**
   * An endpoint that returns a random quote from anime.
   * @returns {object} Returned data from API.
   */
  public async animeQuote(): Promise<Response> {
    return await RequestHandler("animu/quote");
  }

  /**
   * An endpoint which searches for lyrics.
   * @param title {string} Name of the song.
   * @returns {object} Returned data from API.
   */
  public async lyrics(title: string): Promise<Response> {
    return await RequestHandler("lyrics", {title: title});
  }

  /**
   * An endpoint which returns jokes.
   * @returns {object} Returned data from API.
   */
  public async joke(): Promise<Response> {
    return await RequestHandler("joke");
  }

  /**
   * Search for information about pokemon'.
   * @param pokemon {string} Pokemon name.
   * @returns {object} Returned data from API.
   */
  public async pokedex(pokemon: string): Promise<Response> {
    return await RequestHandler("pokedex", {pokemon: pokemon});
  }

  /**
   * Simplified minecraft api.
   * @param username {string} Username of Minecraft player.
   * @returns {object} Returned data from API.
   */
  public async minecraft(username: string): Promise<Response> {
    return await RequestHandler("mc", {username: username});
  }

  /**
   * Very bad meme api.
   * @returns {object} Returned data from API.
   */
  public async meme(): Promise<Response> {
    return await RequestHandler("meme");
  }

  /**
   * A meme api which generates a fake
   * "real looking" Discord Bot Token.
   * @param id {number?} ID of the application.
   * @returns {object} Returned data from API.
   */
  public async discordBotToken(id?: number): Promise<Response> {
    return await RequestHandler("bottoken", {id: id});
  }

  /**
   * Lonely boi now has a friend.
   * This method requires token authorization!
   * @param message {string} Message from you.
   * @returns {object} Returned data from API.
   */
  public async chatBot(message: string): Promise<Response> {
    return await RequestHandler("chatbot", {message: message});
  }

  /**
   * Make an image more gay.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async gay(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/gay", {avatar: avatar});
  }

  /**
   * Make an image look more like a mosaic glass.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async glass(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/glass", {avatar: avatar});
  }

  /**
   * Wasted API.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async wasted(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/wasted", {avatar: avatar});
  }

  /**
   * Respect +100.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async passed(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/passed", {avatar: avatar});
  }

  /**
   * Put an image to jail.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async jail(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/jail", {avatar: avatar});
  }

  /**
   * Welcome back, comrade.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async comrade(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/comrade", {avatar: avatar});
  }

  /**
   * No meaningful description *triggered*.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async triggered(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/triggered", {avatar: avatar});
  }

  /**
   * Applies a greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async greyscale(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/greyscale", {avatar: avatar});
  }

  /**
   * Applies a invert filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async invert(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/invert", {avatar: avatar});
  }

  /**
   * Applies a invert and greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async invertgreyscale(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/invertgreyscale", {avatar: avatar});
  }

  /**
   * Applies a brightness filter.
   * @param avatar {string} Avatar to work with.
   * @param brightness {number?} Brightness to use.
   * @returns {object} Returned data from API.
   */
  public async brightness(avatar: string, brightness?: number): Promise<Response> {
    return await RequestHandler("canvas/invertgreyscale", {avatar: avatar, brightness: brightness});
  }

  /**
   * Applies a threshold filter.
   * @param avatar {string} Avatar to work with.
   * @param threshold {number?} Threshold to use.
   * @returns {object} Returned data from API.
   */
  public async threshold(avatar: string, threshold?: number): Promise<Response> {
    return await RequestHandler("canvas/threshold", {avatar: avatar, threshold: threshold});
  }

  /**
   * Search for word definition in dictionary.
   * @param word {string} Search word.
   * @returns {object} Returned data from API.
   */
  public async dictionary(word: string): Promise<Response> {
    return await RequestHandler("dictionary", {word: word});
  }

  /**
   * Check for strings similarity.
   * @param start {string} First string.
   * @param end {string} Last string.
   * @returns {object} Returned data from API.
   */
  public async stringSimilarity(start: string, end: string): Promise<Response> {
    return await RequestHandler("stringsimilarity", {string1: start, string2: end});
  }

  /**
   * Applies a sepia filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async sepia(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/sepia", {avatar: avatar});
  }

  /**
   * Applies a red filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async red(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/red", {avatar: avatar});
  }

  /**
   * Applies a green filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async green(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/green", {avatar: avatar});
  }

  /**
   * Applies a blue filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blue(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/blue", {avatar: avatar});
  }

  /**
   * Applies a "blurple" filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blurple(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/blurple", {avatar: avatar});
  }

  /**
   * Applies a new Discord color filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blurple2(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/blurple2", {avatar: avatar});
  }

  /**
   * Applies a filter with color.
   * @param avatar {string} Avatar to work with.
   * @param color {string} HEX-color (without "#").
   * @returns {object} Returned data from API.
   */
  public async color(avatar: string, color: string): Promise<Response> {
    return await RequestHandler("canvas/color", {avatar: avatar, color: color});
  }

  /**
   * Applies a pixelate filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async pixelate(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/pixelate", {avatar: avatar});
  }

  /**
   * Applies a blur filter.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async blur(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/blur", {avatar: avatar});
  }

  /**
   * Generates an fake YouTube comment.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param comment {string} Content of the comment.
   * @returns {object} Returned data from API.
   */
  public async youtubeComment(avatar: string, username: string, comment: string): Promise<Response> {
    return await RequestHandler("canvas/youtube-comment", {avatar: avatar, username: username, comment: comment});
  }

  /**
   * Generates an fake Tweet.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param displayName {string} Author display name.
   * @param comment {string} Content of the comment.
   * @returns {object} Returned data from API.
   */
  public async tweet(avatar: string, username: string, displayName: string, comment: string): Promise<Response> {
    return await RequestHandler("canvas/tweet", {avatar: avatar, username: username, displayname: displayName, comment: comment});
  }

  /**
   * Generate image from meme "its so stupid".
   * @param avatar {string} Avatar to work with.
   * @param dog {string} Dog to work with.
   * @returns {object} Returned data from API.
   */
  public async itsSoStupid(avatar: string, dog: string): Promise<Response> {
    return await RequestHandler("canvas/its-so-stupid", {avatar: avatar, dog: dog});
  }

  /**
   * Generate image from meme "SIMP".
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async simpCard(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/simpcard", {avatar: avatar});
  }

  /**
   * Generate image from meme "horny".
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async hornyCard(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/hornycard", {avatar: avatar});
  }

  /**
   * Generate loli police meme.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async lolice(avatar: string): Promise<Response> {
    return await RequestHandler("canvas/lolice", {avatar: avatar});
  }

  /**
   * View color!
   * @param hex {string} HEX to view (without "#").
   * @returns {object} Returned data from API.
   */
  public async colorViewer(hex: string): Promise<Response> {
    return await RequestHandler("canvas/color", {hex: hex});
  }

  /**
   * Convert HEX into RGB.
   * @param rgb {string} RGB to convert.
   * @returns {object} Returned data from API.
   */
  public async hex(rgb: string): Promise<Response> {
    return await RequestHandler("canvas/hex", {rgb: rgb});
  }

  /**
   * Convert RGB into HEX.
   * @param hex {string} HEX to convert.
   * @returns {object} Returned data from API.
   */
  public async rgb(hex: string): Promise<Response> {
    return await RequestHandler("canvas/rgb", {hex: hex});
  }

  /**
   * Generate image from "petpet" meme.
   * @param avatar {string} Avatar to work with.
   * @returns {object} Returned data from API.
   */
  public async petpet(avatar: string): Promise<Response> {
    return await RequestHandler("premium/petpet", {avatar: avatar, key: this._t});
  }
}
