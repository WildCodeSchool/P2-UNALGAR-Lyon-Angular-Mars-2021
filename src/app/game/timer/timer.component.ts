import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { TimerObject } from "src/app/common/timerObject.model";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit {
  minute: number;
  second: number;
  timerObject: TimerObject;
  displayZero: string;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.timerObject = this.gameService.timerObject;
    this.minute = this.timerObject.minute;
    this.second = this.timerObject.second;
    this.displayZero = this.gameService.displayZero;
    if (this.second < 10) {
      this.displayZero = "0";
    } else {
      this.displayZero = "";
    }
  }
}
