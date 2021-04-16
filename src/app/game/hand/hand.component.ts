import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../common/card.model";
@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.css"],
})
export class HandComponent implements OnInit {
  @Input() firstCard: Card;

  constructor() {}

  ngOnInit(): void {}
}
