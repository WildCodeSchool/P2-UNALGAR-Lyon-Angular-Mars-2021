import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DeckService } from "src/app/common/deck.service";
import { Card } from "../../common/card.model";
@Component({
  selector: "app-card-deck",
  templateUrl: "./card-deck.component.html",
  styleUrls: ["./card-deck.component.css"],
})
export class CardDeckComponent implements OnInit {
  playingCard: Card;
  firstCard: Card;
  hasGameStarted: boolean = false;

  // DECLARATION DU SERVICE

  public cardDeck: Card[] = [];
  private service: DeckService;

  constructor(param_service: DeckService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getCardDeck().subscribe((param_cardDeck: Card[]) => {
      this.cardDeck = param_cardDeck;
    });
  }

  //

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
    /*     this.cardDeck=this.cardDeck.splice(randomIndex, 1); NE MARCHE PAS*/
    this.sendingfirstCard();
    this.hasGameStarted = true;
  }

  pickPlayingCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.playingCard = this.cardDeck[randomIndex];
    console.log(this.playingCard);
    /*     this.cardDeck=this.cardDeck.splice(randomIndex, 1); NE MARCHE PAS*/
    this.sendingplayingCard();
  }
}
