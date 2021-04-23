// DeckService sert à aller récupérer les données de l'API Movie DATABASE

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

  //Getter des cartes de la pioche

  public getCardDeck(): Observable<Card[]> {
    const cardDeck: Observable<any> = this.service.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=1c1ad6da4a25190317ffd7a9860d839f&language=en-US"
    );
    const treatment = (param_data: any) => {
      return param_data.results as Card[];
    };

    return cardDeck.pipe(map(treatment));
  }
}

/*

NOTES SUR L'API

on va utiliser
"title"
"poster_path"
"release_date" > attention, au format YYYY-MM-DD

Penser à citer l'API sur le site !

*/
