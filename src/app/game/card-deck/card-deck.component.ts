import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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

  cardDeck: Card[] = [
    { title: "Début de la 2nde guerre mondiale", date: 1939, img: "" },
    { title: "Election de Nicolas Sarkozy", date: 2007, img: "" },
    { title: "Premiers pas sur la lune", date: 1969, img: "" },
    { title: "Révolution française", date: 1789, img: "" },
  ];

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

  constructor() {}

  ngOnInit(): void {}

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
