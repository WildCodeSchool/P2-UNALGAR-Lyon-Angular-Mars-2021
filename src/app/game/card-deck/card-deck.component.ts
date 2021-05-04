import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Card } from "../../common/card.model";
import { GameService } from "src/app/common/game.service";
@Component({
  selector: "app-card-deck",
  templateUrl: "./card-deck.component.html",
  styleUrls: ["./card-deck.component.css"],
})
export class CardDeckComponent implements OnInit {
  //Initialisation des variables

  stopTimer: boolean = false;
  timer: string;
  hand: string;
  @Output() lancementTimer: EventEmitter<string> = new EventEmitter();
  playingCard: Card;
  firstCard: Card;
  @Output() hasGameStarted: boolean = false;
  public cardDeck: Card[] = [];

  // INJECTION DES SERVICES

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.cardDeck = this.gameService.getMovies();
  }

  // AU PREMIER CLIC
  // > on envoie la 1ère carte du jeu dans la timeline
  @Output() firstCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingfirstCard() {
    this.firstCardEmitter.emit(this.firstCard);
  }

  resetPioche() {
    this.hasGameStarted = false;
  }

  pickFirstCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.firstCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.gameService.addCardToTimeline(this.firstCard);
    this.hasGameStarted = true;
    this.startTimerEmitter.emit(null);
    this.pickPlayingCard();
  }
  // > on lance le timer
  @Output() startTimerEmitter: EventEmitter<any> = new EventEmitter();
  startTimer() {
    this.lancementTimer.emit(this.timer);
  }

  //AU DEUXIEME CLIC et ensuite
  // > on affiche le titre de playingCard
  @Output() showHandCardEmitter: EventEmitter<boolean> = new EventEmitter();
  // > on envoie les cartes tirées de la pioche vers la main du joueur
  @Output() playingCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingplayingCard() {
    this.playingCardEmitter.emit(this.playingCard);
  }
  
  pickPlayingCard() {
    if (!this.stopTimer) {
      let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
      this.playingCard = this.cardDeck[randomIndex];
      this.cardDeck.splice(randomIndex, 1);
      this.sendingplayingCard();
      this.showHandCardEmitter.emit(true);
      if (this.cardDeck.length === 0) {
        this.gameService.getMovies();
      }
    }
  }

  recievedStopTimer() {
    this.stopTimer = true;
  }
}
