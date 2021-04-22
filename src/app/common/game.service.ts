import { Injectable } from "@angular/core";
import { Card } from "src/app/common/card.model";

@Injectable({
  providedIn: "root",
})
export class GameService {
  public hasGameStarted: boolean = false;

  public timelineDeck: Card[] = [];

  constructor() {}

  public getTimelineDeck() {
    return this.timelineDeck;
  }

  public addCardToTimeline(card: Card) {
    this.timelineDeck.push(card);
  }
}
