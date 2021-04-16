import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Card } from "../../common/card.model";
@Component({
  selector: "app-card-deck",
  templateUrl: "./card-deck.component.html",
  styleUrls: ["./card-deck.component.css"],
})
export class CardDeckComponent implements OnInit {
  firstCard: Card;
  cardDeck: Card[] = [
    { title: "Début de la 2nde guerre mondiale", date: 1939, img: "" },
    { title: "Election de Nicolas Sarkozy", date: 2007, img: "" },
    { title: "Premiers pas sur la lune", date: 1969, img: "" },
    { title: "Révolution française", date: 1789, img: "" },
  ];

  @Output() firstcardEmitter: EventEmitter<Card> = new EventEmitter();

  sendingfirstcard() {
    this.firstcardEmitter.emit(this.firstCard);
  }

  constructor() {}

  ngOnInit(): void {}

  pickRandomCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.firstCard = this.cardDeck[randomIndex];
    /* NE MARCHE PAS this.cardDeck = this.cardDeck.splice(randomIndex, 1); */
    this.sendingfirstcard();
  }
}
