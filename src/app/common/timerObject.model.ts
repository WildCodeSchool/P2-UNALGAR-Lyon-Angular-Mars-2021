export class TimerObject {
  public minute: number;
  public second: number;
  public displayZero: string;

  constructor(minute: number, second: number, displayZero: string) {
    this.minute = minute;
    this.second = second;
    this.displayZero = displayZero;
  }
}
