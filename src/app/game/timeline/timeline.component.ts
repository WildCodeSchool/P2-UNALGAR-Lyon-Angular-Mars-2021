import { Component, OnInit, Input } from "@angular/core";
import { DeckService } from "src/app/common/deck.service";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  public timelineDeck: Card[] = [];

  // DECLARATION DU SERVICE

  private service: DeckService;

  constructor(param_service: DeckService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getTimelineDeck().subscribe((param_timelineDeck: Card[]) => {
      this.timelineDeck = param_timelineDeck;
    });
  }

  //

  public cardSetted: boolean = false;

  @Input() firstCard: Card;

  alert(card: Card) {
    alert(`hello ${card.title}`);
  }
}
