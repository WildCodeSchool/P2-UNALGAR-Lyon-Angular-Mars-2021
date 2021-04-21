import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  public timelineDeck: Card[] = [
    { title: "Révolution française", date: 1789, img: "" },
  ];

  public cardSetted: boolean = false;

  @Input() firstCard: Card;

  constructor() {}

  ngOnInit(): void {}

  alert(card: Card) {
    alert(`hello ${card.title}`);
  }
}
