import fetch from "node-fetch";
import {
  RankCard,
  TweetImage,
  RgbResponse,
  HexResponse,
  MemeResponse,
  JokeResponse,
  LinkResponse,
  TokenResponse,
  GreetingImage,
  AnimalResponse,
  LyricsResponse,
  PokemonResponse,
  MinecraftResponse,
  AnimeQuoteResponse,
  SimilarityResponse,
  DictionaryResponse,
  YoutubeCommentImage,
} from "./interfaces";

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
    const token = { key: this.api_token };
    const params = new URLSearchParams(
      this.api_token ? (args ? Object.assign(args, token) : token) : args
    ).toString();
    try {
      const request = await fetch(
        `https://some-random-api.ml/${method}?${params}`
      );
      const response = await request.arrayBuffer();
      const data = this.parseArrayBuffer(response);
      return data;
    } catch (error) {
      throw new Error(`During the request, something went wrong: ${error}.`);
    }
  }

  private parseArrayBuffer(data: ArrayBuffer) {
    let parsed;

    try {
      parsed = JSON.parse(
        String.fromCharCode.apply(null, new Uint8Array(data))
      );
    } catch (err) {
      return data;
    }

    return parsed;
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
   * An endpoint that returns a random winking gif.
   * @returns {Promise<LinkResponse>} Returned data from API.
   */
  public async wink(): Promise<LinkResponse> {
    return await this.api<LinkResponse>("animu/wink");
  }

  /**
   * An endpoint that returns a random patting gif.
   * @returns {Promise<LinkResponse>} Returned data from API.
   */
  public async pat(): Promise<LinkResponse> {
    return await this.api<LinkResponse>("animu/pat");
  }

  /**
   * An endpoint that returns a random hugging gif.
   * @returns {Promise<LinkResponse>} Returned data from API.
   */
  public async hug(): Promise<LinkResponse> {
    return await this.api<LinkResponse>("animu/hug");
  }

  /**
   * An endpoint that returns a random quote from anime.
   * @returns {Promise<AnimeQuoteResponse>} Returned data from API.
   */
  public async animeQuote(): Promise<AnimeQuoteResponse> {
    return await this.api<AnimeQuoteResponse>("animu/quote");
  }

  /**
   * An endpoint which searches for lyrics.
   * @param title {string} Name of the song.
   * @returns {Promise<LyricsResponse>} Returned data from API.
   */
  public async lyrics(title: string): Promise<LyricsResponse> {
    return await this.api<LyricsResponse>("lyrics", { title });
  }

  /**
   * An endpoint which returns jokes.
   * @returns {Promise<JokeResponse>} Returned data from API.
   */
  public async joke(): Promise<JokeResponse> {
    return await this.api<JokeResponse>("joke");
  }

  /**
   * Search for information about pokemon'.
   * @param pokemon {string} Pokemon name.
   * @returns {Promise<PokemonResponse>} Returned data from API.
   */
  public async pokedex(pokemon: string): Promise<any> {
    return await this.api<PokemonResponse>("pokedex", { pokemon });
  }

  /**
   * Simplified minecraft api.
   * @param username {string} Username of Minecraft player.
   * @returns {Promise<MinecraftResponse>} Returned data from API.
   */
  public async minecraft(username: string): Promise<MinecraftResponse> {
    return await this.api<MinecraftResponse>("mc", { username });
  }

  /**
   * Very bad meme api.
   * @returns {Promise<MemeResponse>} Returned data from API.
   */
  public async meme(): Promise<MemeResponse> {
    return await this.api<MemeResponse>("meme");
  }

  /**
   * An api which generates a fake
   * "real looking" Discord Bot Token.
   * @param id {number | undefined} ID of the application.
   * @returns {Promise<TokenResponse>} Returned data from API.
   */
  public async discordBotToken(id?: number): Promise<TokenResponse> {
    return await this.api<TokenResponse>("bottoken", { id });
  }

  /**
   * Lonely boi now has a friend.
   * This method requires token authorization!
   * @param message {string} Message from you.
   * @returns {any} Returned data from API.
   */
  public async chatBot(message: string) {
    // TODO: types
    return await this.api<any>("chatbot", { message });
  }

  /**
   * Make an image more gay.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async gay(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/gay", { avatar });
  }

  /**
   * Make an image look more like a mosaic glass.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async glass(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/glass", { avatar });
  }

  /**
   * Wasted API.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async wasted(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/wasted", { avatar });
  }

  /**
   * Respect +100.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async passed(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/passed", { avatar });
  }

  /**
   * Put an image to jail.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async jail(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/jail", { avatar });
  }

  /**
   * Welcome back, comrade.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async comrade(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/comrade", { avatar });
  }

  /**
   * No meaningful description *triggered*.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async triggered(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/triggered", { avatar });
  }

  /**
   * Applies a greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async greyscale(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/greyscale", { avatar });
  }

  /**
   * Applies a invert filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async invert(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/invert", { avatar });
  }

  /**
   * Applies a invert and greyscale filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async invertgreyscale(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/invertgreyscale", { avatar });
  }

  /**
   * Applies a brightness filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async brightness(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/invertgreyscale", { avatar });
  }

  /**
   * Applies a threshold filter.
   * @param avatar {string} Avatar to work with.
   * @param threshold {number | undefined} Threshold to use.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async threshold(
    avatar: string,
    threshold?: number
  ): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/threshold", {
      avatar,
      threshold,
    });
  }

  /**
   * Search for word definition in dictionary.
   * @param word {string} Search word.
   * @returns {DictionaryResponse} Returned data from API.
   */
  public async dictionary(word: string): Promise<DictionaryResponse> {
    return await this.api<DictionaryResponse>("dictionary", { word });
  }

  /**
   * Check for strings similarity.
   * @param start {string} First string.
   * @param end {string} Last string.
   * @returns {SimilarityResponse} Returned data from API.
   */
  public async stringSimilarity(
    string1: string,
    string2: string
  ): Promise<SimilarityResponse> {
    return await this.api<SimilarityResponse>("stringsimilarity", {
      string1,
      string2,
    });
  }

  /**
   * Applies a sepia filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async sepia(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/sepia", { avatar });
  }

  /**
   * Applies a red filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async red(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/red", { avatar });
  }

  /**
   * Applies a green filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async green(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/green", { avatar });
  }

  /**
   * Applies a blue filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async blue(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/blue", { avatar });
  }

  /**
   * Applies a "blurple" filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async blurple(avatar: string): Promise<any> {
    return await this.api<ArrayBuffer>("canvas/blurple", { avatar });
  }

  /**
   * Applies a new Discord color filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async blurple2(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/blurple2", { avatar });
  }

  /**
   * Applies a filter with color.
   * @param avatar {string} Avatar to work with.
   * @param color {string} HEX-color (without "#").
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async color(avatar: string, color: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/color", { avatar, color });
  }

  /**
   * Applies a pixelate filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async pixelate(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/pixelate", { avatar });
  }

  /**
   * Applies a blur filter.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async blur(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/blur", { avatar });
  }

  /**
   * Generates an fake YouTube comment.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param comment {string} Content of the comment.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async youtubeComment({
    avatar,
    username,
    comment,
  }: YoutubeCommentImage): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/youtube-comment", {
      avatar,
      username,
      comment,
    });
  }

  /**
   * Generates an fake Tweet.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Fake comment author.
   * @param displayname {string} Author display name.
   * @param comment {string} Content of the comment.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async tweet({
    avatar,
    username,
    displayname,
    comment,
  }: TweetImage): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/tweet", {
      avatar,
      username,
      displayname,
      comment,
    });
  }

  /**
   * Generate image from meme "its so stupid".
   * @param avatar {string} Avatar to work with.
   * @param dog {string} Dog to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async itsSoStupid(avatar: string, dog: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/its-so-stupid", { avatar, dog });
  }

  /**
   * Generate image from meme "SIMP".
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async simpCard(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/simpcard", { avatar });
  }

  /**
   * Generate image from meme "horny".
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async hornyCard(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/horny", { avatar });
  }

  /**
   * Generate loli police meme.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async lolice(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/lolice", { avatar });
  }

  /**
   * View color!
   * @param hex {string} HEX to view (without "#").
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async colorViewer(hex: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("canvas/colorviewer", { hex });
  }

  /**
   * Convert HEX into RGB.
   * @param rgb {string} RGB to convert.
   * @returns {Promise<HexResponse>} Returned data from API.
   */
  public async hex(rgb: string): Promise<HexResponse> {
    return await this.api<HexResponse>("canvas/hex", { rgb });
  }

  /**
   * Convert RGB into HEX.
   * @param hex {string} HEX to convert (without "#").
   * @returns {Promise<RgbResponse>} Returned data from API.
   */
  public async rgb(hex: string): Promise<RgbResponse> {
    return await this.api<RgbResponse>("canvas/rgb", { hex });
  }

  /**
   * Generate image from "petpet" meme.
   * @param avatar {string} Avatar to work with.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async petpet(avatar: string): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>("premium/petpet", { avatar });
  }

  /**
   * Fully customizable welcome images.
   * @param avatar {string} Avatar to work with.
   * @param username {string} Username of the user, that joined/left.
   * @param discriminator {number} Discriminator of the user, that joined/left.
   * @param background {string} Name of the image, that will append into background.
   * @param type {string} Is user joined or left?
   * @param template {number} Number of the template to use.
   * @param guildName {string} Name of the guild, that user joined/left.
   * @param textcolor {string} Color of the text, that will be used at final image.
   * @param memberCount {number} Count of the members in guild.
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async greetingImage({
    avatar,
    username,
    discriminator,
    background,
    type,
    template,
    guildName,
    textcolor,
    memberCount,
  }: GreetingImage): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>(
      `welcome/img/${template}/${background}`,
      {
        type,
        avatar,
        username,
        discriminator,
        guildName,
        textcolor,
        memberCount,
      }
    );
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
   * @returns {Promise<ArrayBuffer>} Returned data from API.
   */
  public async rankCard({
    avatar,
    username,
    discriminator,
    level,
    cxp,
    nxp,
    template,
    bg,
    cbg,
    ctext,
    ccxp,
    cbar,
  }: RankCard): Promise<ArrayBuffer> {
    return await this.api<ArrayBuffer>(`rankcard/${template}`, {
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
