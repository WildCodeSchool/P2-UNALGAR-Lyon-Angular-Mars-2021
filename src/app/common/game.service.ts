import { Injectable } from "@angular/core";
import { Card } from "src/app/common/card.model";
import { Movie } from "./movie.model";
import { MoviesService } from "./movies.service";

@Injectable({
  providedIn: "root",
})
export class GameService {
  public hasGameStarted: boolean = false;
  public cardDeck: Card[] = [];
  public timelineDeck: Card[] = [];
  public slicedMovieDate: string;
  public movieConverted: Card;
  public completeMovieImgUrl: string;

  //On injecte le service gérant l'API
  constructor(private moviesService: MoviesService) {}

  public getTimelineDeck() {
    return this.timelineDeck;
  }

  public addCardToTimeline(card: Card) {
    this.timelineDeck.push(card);
  }

  public getMovies(): Card[] {
    this.moviesService.getMovies().subscribe((response) => {
      response.forEach((movie) => {
        this.cardDeck.push(this.movieIntoCard(movie));
      });
    });
    return this.cardDeck;
  }

  private movieIntoCard(movie: Movie): Card {
    this.slicedMovieDate = movie.release_date.slice(0, 4);
    this.completeMovieImgUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    this.movieConverted = new Card(
      movie.title,
      this.slicedMovieDate,
      this.completeMovieImgUrl
    );
    return this.movieConverted;
  }

  resetAllGame(): void {
    this.cardDeck.splice(0);
    this.timelineDeck.splice(0);
  }
}
