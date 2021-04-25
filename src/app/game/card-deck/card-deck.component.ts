import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DeckService } from "src/app/common/deck.service";
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
  @Output() lancementTimer: EventEmitter<string> = new EventEmitter();
  playingCard: Card;
  firstCard: Card;
  hasGameStarted: boolean = false;
  public cardDeck: Card[] = [];

  // DECLARATION DES SERVICES

  private deckService: DeckService;
  private gameService: GameService;

  constructor(param_service: DeckService, param_service2: GameService) {
    this.deckService = param_service;
    this.gameService = param_service2;
  }

  // INITIALISATION DES SERVICES

  ngOnInit(): void {
    this.deckService.getCardDeck().subscribe((param_cardDeck: Card[]) => {
      this.cardDeck = param_cardDeck;
    });
  }

  //Envoie la 1ère carte du jeu
  @Output() firstCardEmitter: EventEmitter<Card> = new EventEmitter();

  sendingfirstCard() {
    this.firstCardEmitter.emit(this.firstCard);
  }

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
  }

  pickPlayingCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.playingCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.sendingplayingCard();
  }

  startTimer() {
    this.lancementTimer.emit(this.timer);
  }
}
