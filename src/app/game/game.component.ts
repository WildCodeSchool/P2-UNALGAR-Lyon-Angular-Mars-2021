import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { HandComponent } from "./hand/hand.component";
import { Card } from "../common/card.model";
import { MoviesService } from "../common/movies.service";
import { GameService } from "../common/game.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  public timelineDeck: Card[] = [];

  // INJECTION DU SERVICE

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {}

  playingCard: Card;

  //la fonction doit reset la timeline mais elle renvoie aussi a l'accueil
  resetGoBackHome() {
    //je reset les cartes de la timeline

    
      this.gameService.resetAllGame();
      this.router.navigate([""]);
    
  }
  

  onReceiveplayingCard($event: Card) {
    this.playingCard = $event;
  }

  confirmeRetour() :boolean{
    
    return confirm("Vous désirez vraiment quitter?") 

  }
}
