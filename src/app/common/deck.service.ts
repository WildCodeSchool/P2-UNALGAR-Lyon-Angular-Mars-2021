import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Card } from "./card.model";

@Injectable({
  providedIn: "root",
})
export class DeckService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  //Getter des cartes de la timeline

  public getTimelineDeck(): Observable<Card[]> {
    const timelineDeck: Observable<any> = this.service.get("assets/data.json");
    const treatment = (param_data: any) => {
      return param_data.timelineDeck as Card[];
    };

    return timelineDeck.pipe(map(treatment));
  }

  //Getter des cartes de la pioche

  public getCardDeck(): Observable<Card[]> {
    const cardDeck: Observable<any> = this.service.get("assets/data.json");
    const treatment = (param_data: any) => {
      return param_data.cardDeck as Card[];
    };

    return cardDeck.pipe(map(treatment));
  }
}
