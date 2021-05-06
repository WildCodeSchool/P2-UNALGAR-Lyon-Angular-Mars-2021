import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { Status } from "src/app/common/status.model";
import { Card } from "../../common/card.model";
import { CardDeckComponent } from "../card-deck/card-deck.component";
@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.css"],
})
export class HandComponent implements OnInit {
  @Input() playingCard: Card;
  public showHandCard: Status;

  constructor(private gameservice: GameService) {}

  
  ngOnInit(): void {
    this.showHandCard = this.gameservice.hasGameStarted
  }
}
