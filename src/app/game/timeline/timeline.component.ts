import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  public timelineDeck: Card[] = [
    { title: "Début de la 2nde guerre mondiale", date: 1939, img: "" },
    { title: "Election de Nicolas Sarkozy", date: 2007, img: "" },
    { title: "Premiers pas sur la lune", date: 1969, img: "" },
    { title: "Révolution française", date: 1789, img: "" },
  ];

  public lastItem: boolean = false;

  constructor() {}

  @Input() firstCard: Card;

  ngOnInit(): void {}
}
