import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  
  public showHandCard: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  displayHandCard() {
  this.showHandCard = true;
  }
hideHandCard(){
  this.showHandCard = false;
}
}
