import { ThrowStmt } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit {
  @Output() startTimerEmitter = new EventEmitter();
  temps: number = 300;
  minute: number = Math.floor(this.temps / 60);
  second: number = this.temps % 60;
  interval: any;
  lancement: boolean = false;
  displayZero: string;

  startTimer() {
    if (!this.lancement) {
      this.interval = setInterval(() => {
        this.displayZero = "";
        if (this.second > 0) {
          if (this.second <= 10) {
            this.displayZero = "0";
          }
          this.second--;
        } else if (this.second === 0 && this.minute != 0) {
          this.minute--;
          this.second = 59;
        } else if (this.minute === 0 && this.second === 0) {
          clearInterval(this.interval);
        }
      }, 1000);
      this.lancement = true;
    }
  }

  ngOnInit(): void {
    if (this.second < 10) {
      this.displayZero = "0";
    } else {
      this.displayZero = "";
    }
  }
}
