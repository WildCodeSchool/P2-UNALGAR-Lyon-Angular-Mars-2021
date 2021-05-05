import { Injectable, OnInit } from "@angular/core";
import { Card } from "src/app/common/card.model";
import { Status } from "./status.model";
import { Movie } from "./movie.model";
import { MoviesService } from "./movies.service";
import { Timer } from "./timer.model";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class GameService {
  // Propriété du jeu
  public cardDeck: Card[] = [];
  public timelineDeck: Card[] = [];
  public slicedMovieDate: string;
  public movieConverted: Card;
  public completeMovieImgUrl: string;
  public hasGameStarted: Status = new Status(false);
  public showHandCard: Status = new Status(false);
  public isDateRight: Status = new Status(false);
  public scoreTotal: number;
  public firstCard: Card;

  // Propriétés du timer
  public temps: number = 300;
  public interval: any;
  public timerObject: Timer = new Timer(
    Math.floor(this.temps / 60),
    this.temps % 60,
    ""
  );

  //Injection du service gérant l'API
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

  // Formatage des films en cards
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

  // ajouter une carte dans la timeline
  public addCardToTimeline(card: Card) {
    this.timelineDeck.push(card);
  }

  // permet de tirer une 1ère carte aléatoire et de l'ajouter à la timeline
  public pickFirstCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.firstCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.addCardToTimeline(this.firstCard);
    this.hasGameStarted.value = true;
    this.startTimer();
  }

  // lance le timer quand clic sur le bouton "commence à jouer"
  startTimer() {
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
        // Calcul du score
        this.scoreTotal = this.timelineDeck.length - 1;
        this.resetAllGame();
        this.showScoreTotal();
      }
    }, 1000);
  }

  // display le score total à la fin du jeu
  showScoreTotal() {
    Swal.fire({
      icon: "success",
      title: "Partie terminée",
      text:
        "Bravo ! Tu as placé " + this.scoreTotal + " cartes sur la timeline",
      confirmButtonText: "Ok",
    });
  }

  resetAllGame(): void {
    this.cardDeck.splice(0);
    this.timelineDeck.splice(0);
    this.hideHandCard();
    this.hasGameStarted.value = false;
    clearInterval(this.interval);
    this.getMovies();
    this.initTimer();
  }

  initTimer() {
    this.timerObject.minute = Math.floor(this.temps / 60);
    this.timerObject.second = this.temps % 60;
  }

  hideHandCard() {
    this.showHandCard.value = false;
  }

  addPenalty() {
    this.timerObject.second -= 2;
    if (this.timerObject.second < 0) {
      this.timerObject.displayZero = "";
      this.timerObject.second = 59;
      this.timerObject.minute--;
    }
  }
}
