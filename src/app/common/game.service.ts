import { Injectable } from "@angular/core";
import { Card } from "src/app/common/card.model";
import { BooleanObject } from "./booleanObject.model";
import { Movie } from "./movie.model";
import { MoviesService } from "./movies.service";
import { TimerObject } from "./timerObject.model";

@Injectable({
  providedIn: "root",
})
export class GameService {
  public cardDeck: Card[] = [];
  public timelineDeck: Card[] = [];
  public slicedMovieDate: string;
  public movieConverted: Card;
  public completeMovieImgUrl: string;
  public hasGameStarted: BooleanObject = { value: false };
  public stopTimer: boolean = false;
  public scoreTotal: number;

  //On injecte le service gérant l'API
  constructor(private moviesService: MoviesService) {}

  public getTimelineDeck() {
    return this.timelineDeck;
  }
  public getCardDeck() {
    return this.cardDeck;
  }

  public getMovies(): Card[] {
    this.moviesService.getMovies().subscribe((response) => {
      response.forEach((movie) => {
        this.cardDeck.push(this.movieIntoCard(movie));
      });
    });
    return this.cardDeck;
  }

  public firstCard: Card;

  // permet de tirer une 1ère carte aléatoire et de la mettre dans la timeline
  public pickFirstCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.firstCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.addCardToTimeline(this.firstCard);
    this.hasGameStarted.value = true;
    this.startTimer();
  }

  public addCardToTimeline(card: Card) {
    this.timelineDeck.push(card);
  }

  //TIMER DEBUT
  public lancement: BooleanObject = { value: false };
  public temps: number = 3;
  public interval: any;

  public timerObject = new TimerObject(
    Math.floor(this.temps / 60),
    this.temps % 60,
    ""
  );

  startTimer() {
    if (!this.lancement.value) {
      this.interval = setInterval(() => {
        this.timerObject.displayZero = "";
        if (this.timerObject.second > 0) {
          if (this.timerObject.second <= 10) {
            this.timerObject.displayZero = "0";
          }
          this.timerObject.second--;
        } else if (
          this.timerObject.second === 0 &&
          this.timerObject.minute != 0
        ) {
          this.timerObject.minute--;
          this.timerObject.second = 59;
        } else if (
          this.timerObject.minute === 0 &&
          this.timerObject.second === 0
        ) {
          clearInterval(this.interval);
          this.timerObject.displayZero = "0";
          this.stopTimer = true;
          this.showScoreTotal();
        }
      }, 1000);
      this.lancement.value = true;
    }
  }

  //TIMER FIN

// DEBUT SCORE 

showScoreTotal(){
  if(this.stopTimer) {
    this.scoreTotal = this.timelineDeck.length - 1;
    alert(`Ton score est : ${this.scoreTotal}`)
  }
}

//FIN SCORE

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
