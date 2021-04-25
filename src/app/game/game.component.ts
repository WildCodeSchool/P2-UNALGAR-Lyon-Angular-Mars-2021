import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { ButtonComponent } from "../common/button/button.component";
import { HandComponent } from "./hand/hand.component";
import { Card } from "../common/card.model";
import { DeckService } from "../common/deck.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  public timelineDeck: Card[] = [];

  // DECLARATION DU SERVICE --- A VERIFIER AVEC PIERRE

  private service: DeckService;

  constructor(param_service: DeckService) {
    this.service = param_service;
  }

  ngOnInit(): void {}

  playingCard: Card;
  firstCard: Card;

  onReceiveplayingCard($event: Card) {
    this.playingCard = $event;
  }

  onReceivefirstCard($event: Card) {
    this.firstCard = $event;
    /*this.timelineDeck.push(this.firstCard);*/
  }

}
