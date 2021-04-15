import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  @Input() firstCard: Card;

  ngOnInit(): void {}
}
