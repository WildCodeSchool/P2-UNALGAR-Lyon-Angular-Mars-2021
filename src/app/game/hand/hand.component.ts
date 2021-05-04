import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BooleanObject } from "src/app/common/booleanObject.model";
import { GameService } from "src/app/common/game.service";
import { ShowHandCard } from "src/app/common/showhandcard.model";
import { Card } from "../../common/card.model";
import { CardDeckComponent } from "../card-deck/card-deck.component";
@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.css"],
})
export class HandComponent implements OnInit {
  @Input() playingCard: Card;

  public hasGameStarted : BooleanObject 

  public showHandCard: ShowHandCard 

  constructor(private gameService: GameService) {
    this.hasGameStarted = this.gameService.hasGameStarted;
  }

  ngOnInit(): void {
    this.showHandCard = this.gameService.showHandCard
  }

  displayHandCard() {
    this.showHandCard.showCard = true
  }

  hideHandCard() {
    this.showHandCard.showCard = false
  }
}
