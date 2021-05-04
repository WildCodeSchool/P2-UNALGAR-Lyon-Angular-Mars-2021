import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  //Initialisation des valeurs

  public timelineDeck: Card[] = [];
  public isDateRight: boolean = false;
  public displayMessage: boolean = false;

  @Input() playingCard: Card;

  stopTimer: boolean = false;

  scoreTotal: number;

  displayScoreTotal: boolean = false;

  // INJECTION DES SERVICES

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.timelineDeck = this.gameService.getTimelineDeck();
  }

  @Output() rightClick: EventEmitter<any> = new EventEmitter();

  addToTimelineRightSide(card: Card) {
    if (!this.stopTimer) {
      // On va chercher l'indice de la carte à gauche de l'emplacement choisi
      let leftCardIndex: number = this.timelineDeck.indexOf(card);
      //On définit ce que sera l'indice de playingCard dans la timeline
      let playingCardIndex: number = leftCardIndex + 1;
      this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
      this.checkCardPosition(this.playingCard);
    }
  }
  // ont veut validé la carte si elle est supérieur

  addToTimelineLeftSide(card: Card) {
    if (!this.stopTimer) {
      // On va chercher l'indice de la carte à droite de l'emplacement choisi
      let rightCardIndex: number = this.timelineDeck.indexOf(card);
      //On définit ce que sera l'indice de playingCard dans la timeline
      let playingCardIndex: number = rightCardIndex;
      this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
      this.checkCardPosition(this.playingCard);
    }
  }

  checkCardPosition(playingCard: Card) {
    //capter l'index actuel de la carte
    let playingCardIndex: number = this.timelineDeck.indexOf(playingCard);
    //On va chercher la carte qui est avant (leftCard) et la carte qui est après (rightCard) notre playingCard dans la timeline
    let leftCard: Card = this.timelineDeck[playingCardIndex - 1];
    let rightCard: Card = this.timelineDeck[playingCardIndex + 1];

    if (playingCardIndex === 0) {
      if (parseInt(playingCard.date) <= parseInt(rightCard.date)) {
        this.isDateRight = true;
      } else {
        this.isDateRight = false;
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    } else if (playingCardIndex === this.timelineDeck.length - 1) {
      if (parseInt(playingCard.date) >= parseInt(leftCard.date)) {
        this.isDateRight = true;
      } else {
        this.isDateRight = false;
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    } else {
      if (
        parseInt(playingCard.date) >= parseInt(leftCard.date) &&
        parseInt(playingCard.date) <= parseInt(rightCard.date)
      ) {
        this.isDateRight = true;
      } else {
        this.isDateRight = false;
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    }

    this.displayMessage = true;
    setTimeout(() => {
      this.displayMessage = false;
    }, 1500);
  }

  recievedStopTimer() {
    this.stopTimer = true;
  }
}
