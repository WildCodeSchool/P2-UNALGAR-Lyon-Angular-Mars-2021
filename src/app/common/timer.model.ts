export class Timer {
    public minute: number;
    public second: number;
    //displayZero est pour l'affichage ou non du zero.
    public displayZero: string;
  
    constructor(minute: number, second: number, displayZero: string) {
      this.minute = minute;
      this.second = second;
      this.displayZero = displayZero;
    }
  }
  