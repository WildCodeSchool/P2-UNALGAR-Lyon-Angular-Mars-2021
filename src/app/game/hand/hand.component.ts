import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BooleanObject } from "src/app/common/booleanObject.model";
import { GameService } from "src/app/common/game.service";
import { Card } from "../../common/card.model";
import { CardDeckComponent } from "../card-deck/card-deck.component";
@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.css"],
})
export class HandComponent implements OnInit {
  @Input() playingCard: Card;
  @Output() hasGameStartedEmitter: EventEmitter<boolean> = new EventEmitter();

  public hasGameStarted : BooleanObject 

  public showHandCard: boolean = false;

  constructor(private gameService: GameService) {
    this.hasGameStarted = this.gameService.hasGameStarted;
  }

  ngOnInit(): void {}

  displayHandCard() {
    this.showHandCard = true;
  }

  hideHandCard() {
    this.showHandCard = false;
  }
}
