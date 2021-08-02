export interface AnimalResponse {
  image: string;
  fact: string;
}

export interface RgbResponse {
  r: number;
  g: number;
  b: number;
}

export interface HexResponse {
  hex: string;
}

export interface SimilarityResponse {
  similarity: number;
}

export interface DictionaryResponse {
  word: string;
  definition: string;
}

export interface TokenResponse {
  token: string;
}

export interface MemeResponse {
  id: number;
  image: string;
  caption: string;
  category: string;
}

export interface MinecraftResponse {
  username: string;
  uuid: string;
  name_history: {
    name: string;
    changedToAt: string;
  }[];
}

export interface PokemonResponse {
  name: string;
  id: string;
  type: string[];
  species: string[];
  abilities: string[];
  height: string;
  weight: string;
  base_experience: string;
  gender: string[];
  egg_groups: string[];
  stats: {
    hp: string;
    attack: string;
    defense: string;
    sp_atk: string;
    sp_def: string;
    speed: string;
    total: string;
  };
  family: {
    evolutionStage: number;
    evolutionLine: string[];
  };
  sprites: {
    normal: string;
    animated: string;
  };
  description: string;
  generation: string;
}

export interface JokeResponse {
  joke: string;
}

export interface LyricsResponse {
  title: string;
  author: string;
  lyrics: string;
  thumbnail: {
    genius: string;
  };
  links: {
    genius: string;
  };
}

export interface AnimeQuoteResponse {
  sentence: string;
  characther: string;
  anime: string;
}

export interface LinkResponse {
  link: string;
}

interface BaseImage {
  avatar: string;
  username: string;
  discriminator: number;
}

export interface GreetingImage extends BaseImage {
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
    | "gaming4";
  type: "join" | "leave";
  template: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  guildName: string;
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
    | "white";
  memberCount: number;
}

export interface RankCard extends BaseImage {
  level: number;
  cxp: number;
  nxp: number;
  template: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  bg?: string;
  cbg?: string;
  ctext?: string;
  ccxp?: string;
  cbar?: string;
}

export interface TweetImage extends Omit<BaseImage, "discriminator"> {
  displayname: string;
  comment: string;
}

export type YoutubeCommentImage = Omit<TweetImage, "displayname">;
