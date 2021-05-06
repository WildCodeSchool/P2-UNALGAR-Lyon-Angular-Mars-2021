import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  name: string = "image d'accueil timeline";
  imagesrc: string = "../../assets/img/unalgarMovies1.jpg";

  constructor() {}

  ngOnInit(): void {}
}
