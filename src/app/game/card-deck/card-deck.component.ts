import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Card } from "../../common/card.model";
import { GameService } from "src/app/common/game.service";
import { Status } from "src/app/common/status.model";
@Component({
  selector: "app-card-deck",
  templateUrl: "./card-deck.component.html",
  styleUrls: ["./card-deck.component.css"],
})
export class CardDeckComponent implements OnInit {
  //Initialisation des variables
  timer: string;
  hand: string;
  playingCard: Card;
  firstCard: Card;
  public hasGameStarted: Status;
  public cardDeck: Card[] = [];

  // INJECTION DES SERVICES

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    // on charge les films
    this.gameService.getMovies();
    // on recup la liste
    this.cardDeck = this.gameService.getCardDeck()
    this.hasGameStarted = this.gameService.hasGameStarted;
  }

  pickFirstCard() {
    this.gameService.pickFirstCard(); 
    this.pickPlayingCard();
  }

  //AU DEUXIEME CLIC et ensuite
  // > on affiche le titre de playingCard
  @Output() showHandCardEmitter: EventEmitter<boolean> = new EventEmitter();
  // > on envoie les cartes tirées de la pioche vers la main du joueur
  @Output() playingCardEmitter: EventEmitter<Card> = new EventEmitter();
  sendingplayingCard() {
    this.playingCardEmitter.emit(this.playingCard);
  }
  
  pickPlayingCard() {
    let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
    this.playingCard = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);
    this.sendingplayingCard();
    this.showHandCardEmitter.emit(true);
    if (this.cardDeck.length === 0) {
      this.gameService.getMovies();
    }

  }
}