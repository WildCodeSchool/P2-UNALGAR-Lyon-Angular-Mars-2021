export class Card {
  public title: string;
  public date: number;
  public img: string;

  constructor(title: string, date: number, img: string) {
    this.title = title;
    this.date = date;
    this.img = img;
  }
}
