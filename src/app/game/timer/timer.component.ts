import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { Status } from "src/app/common/status.model";
import { Timer } from "src/app/common/timer.model";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit {
  timerObject: Timer;
  hasGameStarted: Status;
  isDateRight: Status;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.timerObject = this.gameService.timerObject;
    if (this.timerObject.second < 10) {
      this.timerObject.displayZero = "0";
    } else {
      this.timerObject.displayZero = "";
    }
    this.hasGameStarted = this.gameService.hasGameStarted;
    this.isDateRight = this.gameService.isDateRight;
  }

  
}
