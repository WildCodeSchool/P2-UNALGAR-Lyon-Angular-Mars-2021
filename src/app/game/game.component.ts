import { Component, OnInit, Input, Output } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { ButtonComponent } from "../common/button/button.component";
import { HandComponent } from "./hand/hand.component";
import { Card } from "../common/card.model";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  constructor() {}

  playingCard: Card;
  firstCard: Card;

  ngOnInit(): void {}

  onReceiveplayingCard($event: Card) {
    console.log($event);
    this.playingCard = $event;
    console.log(this.playingCard);
  }

  onReceivefirstCard($event: Card) {
    this.firstCard = $event;
  }
}
