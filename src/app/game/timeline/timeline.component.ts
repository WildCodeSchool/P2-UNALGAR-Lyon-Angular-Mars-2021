import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ɵɵtrustConstantResourceUrl,
  ɵCodegenComponentFactoryResolver,
} from "@angular/core";
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
  public isDateRight: boolean;

  @Input() playingCard: Card;

  // INJECTION DES SERVICES

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.timelineDeck = this.gameService.getTimelineDeck();
  }

  @Output() rightClick: EventEmitter<any> = new EventEmitter();

  addToTimelineRightSide(card: Card) {
    // On va chercher l'indice de la carte à gauche de l'emplacement choisi
    let leftCardIndex: number = this.timelineDeck.indexOf(card);
    //On définit ce que sera l'indice de playingCard dans la timeline
    let playingCardIndex: number = leftCardIndex + 1;
    this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
    this.checkCardPosition(this.playingCard);
  }

  // ont veut validé la carte si elle est supérieur

  addToTimelineLeftSide(card: Card) {
    // On va chercher l'indice de la carte à droite de l'emplacement choisi
    let rightCardIndex: number = this.timelineDeck.indexOf(card);
    //On définit ce que sera l'indice de playingCard dans la timeline
    let playingCardIndex: number = rightCardIndex;
    this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
    this.checkCardPosition(this.playingCard);
  }

  checkCardPosition(playingCard: Card) {
    //capter l'index actuel de la carte
    let playingCardIndex: number = this.timelineDeck.indexOf(playingCard);
    //On va chercher la carte qui est avant (leftCard) et la carte qui est après (rightCard) notre playingCard dans la timeline
    let leftCard: Card = this.timelineDeck[playingCardIndex - 1];
    let rightCard: Card = this.timelineDeck[playingCardIndex + 1];

    if (
      (parseInt(playingCard.date) <= parseInt(rightCard.date) &&
        typeof leftCard == undefined) ||
      //la condition du milieu ne marche pas : pourquoi ??
      (parseInt(playingCard.date) >= parseInt(leftCard.date) &&
        typeof rightCard == undefined) ||
      (parseInt(playingCard.date) >= parseInt(leftCard.date) &&
        parseInt(playingCard.date) <= parseInt(rightCard.date))
    ) {
      this.isDateRight = true;
      alert("bravo !");
    } else {
      this.isDateRight = false;
      alert("Et non !");
      this.timelineDeck.splice(playingCardIndex, 1);
    }
  }
}

// Marche bien quand il y a 2 cartes mais pour une raison inconnue, il ne pose la carte qu'après la validation ??!!

/* VERSION BIEN TROP LONGUE QUI NE MARCHE PAS NON PLUS
  checkCardPosition(playingCard: Card) {
    //capter l'index actuel de la carte
    let playingCardIndex: number = this.timelineDeck.indexOf(playingCard);
    //On va chercher la carte qui est avant (leftCard) et la carte qui est après (rightCard) notre playingCard dans la timeline
    let leftCard: Card = this.timelineDeck[playingCardIndex - 1];
    let rightCard: Card = this.timelineDeck[playingCardIndex + 1];

    if (playingCardIndex === 0) {
      if (parseInt(playingCard.date) >= parseInt(leftCard.date)) {
        this.isDateRight = true;
        alert("bravo");
      } else {
        this.isDateRight = false;
        alert("vous avez faux !");
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    } else if (playingCardIndex === this.timelineDeck.length - 1) {
      if (parseInt(playingCard.date) >= parseInt(leftCard.date)) {
        this.isDateRight = true;
        alert("bravo");
      } else {
        this.isDateRight = false;
        alert("vous avez faux !");
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    } else {
      if (
        parseInt(playingCard.date) >= parseInt(leftCard.date) &&
        parseInt(playingCard.date) <= parseInt(rightCard.date)
      ) {
        this.isDateRight = true;
        alert("bravo");
      } else {
        this.isDateRight = false;
        alert("vous avez faux !");
        this.timelineDeck.splice(playingCardIndex, 1);
      }
    }
  } */
