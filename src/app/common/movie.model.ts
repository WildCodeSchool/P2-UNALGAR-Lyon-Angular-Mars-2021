// Modélisation des movies tels que reçus par l'API
export class Movie {
  public poster_path: string;
  public adult: boolean;
  public overview: string;
  public release_date: string;
  public genre_ids: number[];
  public id: number;
  public original_title: string;
  public original_language: string;
  public title: string;
  public backdrop_path: string;
  public popularity: number;
  public vote_count: number;
  public video: boolean;
  public vote_average: number;

  constructor(
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
  ) {
    this.poster_path = poster_path;
    this.adult = adult;
    this.overview = overview;
    this.release_date = release_date;
    this.genre_ids = genre_ids;
    this.id = id;
    this.original_title = original_title;
    this.original_language = original_language;
    this.title = title;
    this.backdrop_path = backdrop_path;
    this.popularity = popularity;
    this.vote_count = vote_count;
    this.video = video;
    this.vote_average = vote_average;
  }
}
