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
    console.log(this.cardDeck);
  }

  //Envoie la 1ère carte du jeu
  @Output() firstCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingfirstCard() {
    this.firstCardEmitter.emit(this.firstCard);
  }

  //Lance le timer quand le joueur clique une 1ère fois sur la pioche
  @Output() startTimerEmitter: EventEmitter<any> = new EventEmitter();

  @Output() showHandCardEmitter: EventEmitter<boolean> = new EventEmitter();

  //Envoie la carte en cours
  @Output() playingCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingplayingCard() {
    this.playingCardEmitter.emit(this.playingCard);
  }

  pickFirstCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.firstCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.gameService.addCardToTimeline(this.firstCard);
    this.hasGameStarted = true;
    this.startTimerEmitter.emit(null);
  }

  pickPlayingCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.playingCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.sendingplayingCard();
    this.showHandCardEmitter.emit(true);
    if (this.cardDeck.length === 0) {
      this.gameService.getMovies();
    }
  }

  startTimer() {
    this.lancementTimer.emit(this.timer);
  }
}
