import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GameService } from "src/app/common/game.service";
import { Message } from "src/app/common/message.model";
import { MessageService } from "src/app/common/message.service";
import { Status } from "src/app/common/status.model";
import { Timer } from "src/app/common/timer.model";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  //Initialisation des valeurs

  public timelineDeck: Card[] = [];
  public displayMessage: boolean = false;
  public cardDeck: Card[] = [];
  public timerObject: Timer;
  public isDateRight: Status;

  @Input() playingCard: Card;

  stopTimer: boolean = false;

  scoreTotal: number;

  displayScoreTotal: boolean = false;

  // INJECTION DES SERVICES

  constructor(
    private gameService: GameService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.timelineDeck = this.gameService.getTimelineDeck();
    this.cardDeck = this.gameService.getCardDeck();
    this.timerObject = this.gameService.timerObject;
    this.isDateRight = this.gameService.isDateRight;
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
      setTimeout(() => {
        this.pickPlayingCard();
      }, 800);
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
      setTimeout(() => {
        this.pickPlayingCard();
      }, 800);
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
        this.isDateRight.value = true;
      } else {
        this.isDateRight.value = false;
        this.timelineDeck.splice(playingCardIndex, 1);
        //on rajoute 2 secondes de pénalité
        this.gameService.addPenalty();
      }
    } else if (playingCardIndex === this.timelineDeck.length - 1) {
      if (parseInt(playingCard.date) >= parseInt(leftCard.date)) {
        this.isDateRight.value = true;
      } else {
        this.isDateRight.value = false;
        this.timelineDeck.splice(playingCardIndex, 1);
        //on rajoute 2 secondes de pénalité
        this.gameService.addPenalty();
      }
    } else {
      if (
        parseInt(playingCard.date) >= parseInt(leftCard.date) &&
        parseInt(playingCard.date) <= parseInt(rightCard.date)
      ) {
        this.isDateRight.value = true;
      } else {
        this.isDateRight.value = false;
        this.timelineDeck.splice(playingCardIndex, 1);
        //on rajoute 2 secondes de pénalité
        this.gameService.addPenalty();
      }
    }

    this.messageService.addMessage(
      new Message(this.isDateRight.value, playingCard.date)
    );
  }

  recievedStopTimer() {
    this.stopTimer = true;
  }

  // > on envoie les cartes tirées de la pioche vers la main du joueur
  @Output() playingCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingplayingCard() {
    this.playingCardEmitter.emit(this.playingCard);
  }

  pickPlayingCard() {
    if (!this.stopTimer) {
      let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
      this.playingCard = this.cardDeck[randomIndex];
      this.cardDeck.splice(randomIndex, 1);
      this.sendingplayingCard();
      if (this.cardDeck.length === 0) {
        this.gameService.getMovies();
      }
    }
  }
}
