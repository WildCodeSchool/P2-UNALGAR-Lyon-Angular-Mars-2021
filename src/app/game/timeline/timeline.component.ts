import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DeckService } from "src/app/common/deck.service";
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
  public cardSetted: boolean = false;

  @Input() playingCard: Card;

  // INJECTION DES SERVICES

  constructor(
    private deckService: DeckService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.timelineDeck = this.gameService.getTimelineDeck();
    /*    this.hasGameStarted = this.gameService.hasGameStarted;
    comment faire pour que ça ne soit pas que OnInit, pour que quand hasGameStarted change dans game.service.ts, il change aussi dans timeline.ts ??*/
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
    // On va chercher l'indice de la carte à gauche de l'emplacement choisi
    let rightCardIndex: number = this.timelineDeck.indexOf(card);
    //On définit ce que sera l'indice de playingCard dans la timeline
    let playingCardIndex: number = rightCardIndex;
    this.timelineDeck.splice(playingCardIndex, 0, this.playingCard);
    this.cardSetted = true;
  }
}
