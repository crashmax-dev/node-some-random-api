import fetch from "node-fetch";
import {AnimalResponse} from "./interfaces";

export class SRAClient {
  /**
   * Client's token to create requests.
   * @type {string | undefined}
   */
  private readonly api_token?: string;

  /**
   * `SRAClient` — client class of wrapper for `Some Random API`.
   * Main SRA website: https://some-random-api.ml.
   * @param token {string | undefined} Token, that you got from SRA.
   */
  public constructor(token?: string) {
    this.api_token = token;
  }

  /**
   * Get passed SRA token (if any was passed).
   * @returns {string | undefined} Passed token.
   */
  public get token(): string | undefined {
    return this.api_token;
  }

  private async api<T>(method: string, args?: Record<string, any>): Promise<T> {
    const params = new URLSearchParams(
      this.api_token ? Object.assign(args, { key: this.api_token }) : args
    ).toString();
    const request = await fetch(`https://some-random-api.ml/${method}?${params}`);
    const response = await request.json();
    if ('error' in response || response.status !== 200) {
      throw new Error(`During the request, something went wrong: ${response.error}.`);
    }
    return response;
  }

  /**
   * An endpoint that sends a random image and fact of a dog.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async dog(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/dog");
  }

  /**
   * An endpoint that sends a random image and fact of a cat.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async cat(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/cat");
  }

  /**
   * An endpoint that sends a random image and fact of a panda.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async panda(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/panda");
  }

  /**
   * An endpoint that sends a random image and fact of a red panda.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async redPanda(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/red_panda");
  }

  /**
   * An endpoint that sends a random image and fact of a koala.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async koala(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/koala");
  }

  /**
   * An endpoint that sends a random image and fact of a bird.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async bird(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/bird");
  }

  /**
   * An endpoint that sends a random image and fact of a raccoon.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async raccoon(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/raccoon");
  }

  /**
   * An endpoint that sends a random image and fact of a kangaroo.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async kangaroo(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/kangaroo");
  }

  /**
   * An endpoint that sends a random image and fact of a fox.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async fox(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/fox");
  }

  /**
   * An endpoint that sends a random image and fact of a birb.
   * @returns {Promise<AnimalResponse>} Returned data from API.
   */
  public async birb(): Promise<AnimalResponse> {
    return await this.api<AnimalResponse>("animal/birb");
  }

  /**
   * An endpoint that sends a random image and fact of a whale.
   * @returns {any} Returned data from API.
   */
  public async whale() {
    return await this.api<any>("animal/whale");
  }

  /**
   * An endpoint that returns a random winking gif.
   * @returns {any} Returned data from API.
   */
  public async wink() {
    return await this.api<any>("animu/wink");
  }

  /**
   * An endpoint that returns a random patting gif.
   * @returns {any} Returned data from API.
   */
  public async pat() {
    return await this.api<any>("animu/pat");
  }

  /**
   * An endpoint that returns a random hugging gif.
   * @returns {any} Returned data from API.
   */
  public async hug() {
    return await this.api<any>("animu/hug");
  }

  /**
   * An endpoint that returns a random quote from anime.
   * @returns {any} Returned data from API.
   */
  public async animeQuote() {
    return await this.api<any>("animu/quote");
  }

  /**
   * An endpoint which searches for lyrics.
   * @param title {string} Name of the song.
   * @returns {any} Returned data from API.
   */
  public async lyrics(title: string) {
    return await this.api<any>("lyrics", { title });
  }

  /**
   * An endpoint which returns jokes.
   * @returns {any} Returned data from API.
   */
  public async joke() {
    return await this.api<any>("joke");
  }

  /**
   * Search for information about pokemon'.
   * @param pokemon {string} Pokemon name.
   * @returns {any} Returned data from API.
   */
  public async pokedex(pokemon: string) {
    return await this.api<any>("pokedex", { pokemon });
  }

  /**
   * Simplified minecraft api.
   * @param username {string} Username of Minecraft player.
   * @returns {any} Returned data from API.
   */
  public async minecraft(username: string) {
    return await this.api<any>("mc", { username });
  }

  /**
   * Very bad meme api.
   * @returns {any} Returned data from API.
   */
  public async meme() {
    return await this.api<any>("meme");
  }

  /**
   * An api which generates a fake
   * "real looking" Discord Bot Token.
   * @param id {number | undefined} ID of the application.
   * @returns {any} Returned data from API.
   */
  public async discordBotToken(id?: number) {
    return await this.api<any>("bottoken", { id });
  }

  /**
   * Lonely boi now has a friend.
   * This method requires token authorization!
   * @param message {string} Message from you.
   * @returns {any} Returned data from API.
   */
  public async chatBot(message: string) {
    return await this.api<any>("chatbot", { message });
  }

  /**
   * Make an image more gay.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async gay(avatar: string) {
    return await this.api<any>("canvas/gay", { avatar });
  }

  /**
   * Make an image look more like a mosaic glass.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async glass(avatar: string) {
    return await this.api<any>("canvas/glass", { avatar });
  }

  /**
   * Wasted API.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async wasted(avatar: string) {
    return await this.api<any>("canvas/wasted", { avatar });
  }

  /**
   * Respect +100.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async passed(avatar: string) {
    return await this.api<any>("canvas/passed", { avatar });
  }

  /**
   * Put an image to jail.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async jail(avatar: string) {
    return await this.api<any>("canvas/jail", { avatar });
  }

  /**
   * Welcome back, comrade.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async comrade(avatar: string) {
    return await this.api<any>("canvas/comrade", { avatar });
  }

  /**
   * No meaningful description *triggered*.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async triggered(avatar: string) {
    return await this.api<any>("canvas/triggered", { avatar });
  }

  /**
   * Applies a greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async greyscale(avatar: string) {
    return await this.api<any>("canvas/greyscale", { avatar });
  }

  /**
   * Applies a invert filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async invert(avatar: string) {
    return await this.api<any>("canvas/invert", { avatar });
  }

  /**
   * Applies a invert and greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async invertgreyscale(avatar: string) {
    return await this.api<any>("canvas/invertgreyscale", { avatar });
  }

  /**
   * Applies a brightness filter.
   * @param avatar {string} Avatar to work with.
   * @param brightness {number | undefined} Brightness to use.
   * @returns {any} Returned data from API.
   */
  public async brightness(avatar: string, brightness?: number) {
    return await this.api<any>("canvas/invertgreyscale", {
      avatar,
      brightness,
    });
  }

  /**
   * Applies a threshold filter.
   * @param avatar {string} Avatar to work with.
   * @param threshold {number | undefined} Threshold to use.
   * @returns {any} Returned data from API.
   */
  public async threshold(avatar: string, threshold?: number) {
    return await this.api<any>("canvas/threshold", { avatar, threshold });
  }

  /**
   * Search for word definition in dictionary.
   * @param word {string} Search word.
   * @returns {any} Returned data from API.
   */
  public async dictionary(word: string) {
    return await this.api<any>("dictionary", { word });
  }

  /**
   * Check for strings similarity.
   * @param start {string} First string.
   * @param end {string} Last string.
   * @returns {any} Returned data from API.
   */
  public async stringSimilarity(start: string, end: string) {
    return await this.api<any>("stringsimilarity", { start, end });
  }

  /**
   * Applies a sepia filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async sepia(avatar: string) {
    return await this.api<any>("canvas/sepia", { avatar });
  }

  /**
   * Applies a red filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async red(avatar: string) {
    return await this.api<any>("canvas/red", { avatar });
  }

  /**
   * Applies a green filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async green(avatar: string) {
    return await this.api<any>("canvas/green", { avatar });
  }

  /**
   * Applies a blue filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async blue(avatar: string) {
    return await this.api<any>("canvas/blue", { avatar });
  }

  /**
   * Applies a "blurple" filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async blurple(avatar: string) {
    return await this.api<any>("canvas/blurple", { avatar });
  }

  /**
   * Applies a new Discord color filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async blurple2(avatar: string) {
    return await this.api<any>("canvas/blurple2", { avatar });
  }

  /**
   * Applies a filter with color.
   * @param avatar {string} Avatar to work with.
   * @param color {string} HEX-color (without "#").
   * @returns {any} Returned data from API.
   */
  public async color(avatar: string, color: string) {
    return await this.api<any>("canvas/color", { avatar, color });
  }

  /**
   * Applies a pixelate filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async pixelate(avatar: string) {
    return await this.api<any>("canvas/pixelate", { avatar });
  }

  /**
   * Applies a blur filter.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async blur(avatar: string) {
    return await this.api<any>("canvas/blur", { avatar });
  }

  /**
   * Generates an fake YouTube comment.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param comment {string} Content of the comment.
   * @returns {any} Returned data from API.
   */
  public async youtubeComment(
    avatar: string,
    username: string,
    comment: string
  ) {
    return await this.api<any>("canvas/youtube-comment", {
      avatar,
      username,
      comment,
    });
  }

  /**
   * Generates an fake Tweet.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param displayName {string} Author display name.
   * @param comment {string} Content of the comment.
   * @returns {any} Returned data from API.
   */
  public async tweet(
    avatar: string,
    username: string,
    displayName: string,
    comment: string
  ) {
    return await this.api<any>("canvas/tweet", {
      avatar,
      username,
      displayName,
      comment,
    });
  }

  /**
   * Generate image from meme "its so stupid".
   * @param avatar {string} Avatar to work with.
   * @param dog {string} Dog to work with.
   * @returns {any} Returned data from API.
   */
  public async itsSoStupid(avatar: string, dog: string) {
    return await this.api<any>("canvas/its-so-stupid", { avatar, dog });
  }

  /**
   * Generate image from meme "SIMP".
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async simpCard(avatar: string) {
    return await this.api<any>("canvas/simpcard", { avatar });
  }

  /**
   * Generate image from meme "horny".
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async hornyCard(avatar: string) {
    return await this.api<any>("canvas/hornycard", { avatar });
  }

  /**
   * Generate loli police meme.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async lolice(avatar: string) {
    return await this.api<any>("canvas/lolice", { avatar });
  }

  /**
   * View color!
   * @param hex {string} HEX to view (without "#").
   * @returns {any} Returned data from API.
   */
  public async colorViewer(hex: string) {
    return await this.api<any>("canvas/color", { hex });
  }

  /**
   * Convert HEX into RGB.
   * @param rgb {string} RGB to convert.
   * @returns {any} Returned data from API.
   */
  public async hex(rgb: string) {
    return await this.api<any>("canvas/hex", { rgb });
  }

  /**
   * Convert RGB into HEX.
   * @param hex {string} HEX to convert.
   * @returns {any} Returned data from API.
   */
  public async rgb(hex: string) {
    return await this.api<any>("canvas/rgb", { hex });
  }

  /**
   * Generate image from "petpet" meme.
   * @param avatar {string} Avatar to work with.
   * @returns {any} Returned data from API.
   */
  public async petpet(avatar: string) {
    return await this.api<any>("premium/petpet", { avatar });
  }

  /**
   * Fully customizable welcome images.
   * @param background {string} Name of the image, that will append into background.
   * @param type {string} Is user joined or left?
   * @param template {number} Number of the template to use.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Username of the user, that joined/left.
   * @param discriminator {number} Discriminator of the user, that joined/left.
   * @param guildName {string} Name of the guild, that user joined/left.
   * @param textcolor {string} Color of the text, that will be used at final image.
   * @param memberCount {number} Count of the members in guild.
   * @returns {any} Returned data from API.
   */
  public async greetingImage(
    background:
      | "stars"
      | "stars2"
      | "rainbowgradient"
      | "rainbow"
      | "sunset"
      | "night"
      | "blobday"
      | "blobnight"
      | "space"
      | "gaming1"
      | "gaming2"
      | "gaming3"
      | "gaming4",
    type: "join" | "leave",
    template: 1 | 2 | 3 | 4 | 5 | 6 | 7,
    avatar: string,
    username: string,
    discriminator: number,
    guildName: string,
    textcolor:
      | "red"
      | "orange"
      | "yellow"
      | "green"
      | "blue"
      | "indigo"
      | "purple"
      | "pink"
      | "black"
      | "white",
    memberCount: number
  ) {
    return await this.api<any>(`welcome/img/${template}/${background}`, {
      type,
      avatar,
      username,
      discriminator,
      guildName,
      textcolor,
      memberCount,
    });
  }

  /**
   * Fully customizable rank cards.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Username of the user.
   * @param discriminator {number} Discriminator of the user.
   * @param level {number} Current user's level.
   * @param cxp {number} Current XP.
   * @param nxp {number} Needed XP.
   * @param template {number} Template for the rank card.
   * @param bg {string} Background of the card. Required a tier 2 key.
   * @param cbg {string} HEX string of the background (without "#").
   * @param ctext {string} Text color (HEX string without "#").
   * @param ccxp {string} Current XP color (HEX string without "#").
   * @param cbar {string} XP bar color (HEX string without "#").
   * @returns {any} Returned data from API.
   */
  public async rankCard(
    avatar: string,
    username: string,
    discriminator: number,
    level: number,
    cxp: number,
    nxp: number,
    template: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    bg?: string,
    cbg?: string,
    ctext?: string,
    ccxp?: string,
    cbar?: string
  ) {
    return await this.api<any>(`rankcard/${template}`, {
      avatar,
      discriminator,
      level,
      username,
      cxp,
      nxp,
      bg,
      cbg,
      ctext,
      ccxp,
      cbar,
    });
  }
}
