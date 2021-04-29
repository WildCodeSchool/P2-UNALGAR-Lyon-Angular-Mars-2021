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
  }

  addToTimelineLeftSide(card: Card) {
    // On va chercher l'indice de la carte à droite de l'emplacement choisi
    let rightCardIndex: number = this.timelineDeck.indexOf(card);
    //On définit ce que sera l'indice de playingCard dans la timeline
    let playingCardIndex: number = rightCardIndex;
    this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
  }
}
