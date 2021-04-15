import { Component, OnInit, Input } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { ButtonComponent } from "../common/button/button.component";
import { HandComponent } from "./hand/hand.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  constructor() {}

  firstCard: object;

  ngOnInit(): void {}

  onReceiveFirstcard($event: object) {
    this.firstCard = $event;
  }
}
