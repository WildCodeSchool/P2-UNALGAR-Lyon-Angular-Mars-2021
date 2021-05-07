import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { HandComponent } from "./hand/hand.component";
import { Card } from "../common/card.model";
import { MoviesService } from "../common/movies.service";
import { GameService } from "../common/game.service";
import { Router } from "@angular/router";
import { MessageService } from "../common/message.service";
import { Message } from "../common/message.model";

import Swal from "sweetalert2";
@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  // initialisation des variables
  public timelineDeck: Card[] = [];
  public listeMessage: Message[];
  playingCard: Card;
  firstCard: Card;

  // INJECTION DU SERVICE
  constructor(
    private gameService: GameService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {

    this.listeMessage = this.messageService.listeMessage;
  }

  //la fonction doit reset la timeline mais elle renvoie aussi a l'accueil
  resetGoBackHome(): void {
    //je reset les cartes de la timeline
    this.gameService.resetAllGame();
    // je redirige vers l'accueil
    this.router.navigate([""]);
  }

  //Réception de la carte de jeu avant envoi dans la main du joueur
  onReceiveplayingCard($event: Card): void {
    this.playingCard = $event;
  }

  confirmeRetour(): void {
    Swal.fire({
      title: "Voulez-vous vraiment quitter la partie ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je veux quitter la partie",
      cancelButtonText: "Non, je veux rester",
    }).then((result) => {
      if (result.isConfirmed) {
        this.resetGoBackHome();
      }
    });
  }
}
