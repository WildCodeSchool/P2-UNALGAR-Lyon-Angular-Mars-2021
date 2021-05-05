// MoviesService sert à aller récupérer les données de l'API Movie DATABASE

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "./movie.model";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private baseUrl: string = "https://api.themoviedb.org/3/movie";

  constructor(private service: HttpClient) {}
  // On commence les requêtes à la page 1 pour éviter certains films
  private pageCounter: number = 1;

  //On requête l'API pour obtenir les films
  public getMovies(): Observable<Movie[]> {
    this.pageCounter++;
    const movies: Observable<any> = this.service.get(
      `${this.baseUrl}/top_rated?api_key=1c1ad6da4a25190317ffd7a9860d839f&language=fr-FR&page=${this.pageCounter}`
    );
    const treatment = (param_data: any) => {
      return param_data.results as Movie[];
    };

    return movies.pipe(map(treatment));
  }
}