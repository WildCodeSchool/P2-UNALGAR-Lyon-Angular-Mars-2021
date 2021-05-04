import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { TimerObject } from "src/app/common/timerObject.model";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit {
 
  timerObject: TimerObject;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.timerObject = this.gameService.timerObject;
    if (this.timerObject.second < 10) {
      this.timerObject.displayZero = "0";
    } else {
      this.timerObject.displayZero = "";
    }
  }
}
