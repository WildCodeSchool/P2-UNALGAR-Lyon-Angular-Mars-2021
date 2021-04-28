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

  movieIntoCard(movie: Movie): Card {
    this.slicedMovieDate = movie.release_date.slice(0, 3);
    this.movieConverted = new Card(
      movie.title,
      this.slicedMovieDate,
      movie.poster_path
    );
    return this.movieConverted;
  }
}
