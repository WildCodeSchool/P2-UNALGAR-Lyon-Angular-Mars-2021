import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"],
})
export class RulesComponent implements OnInit {

  imageGame1 = "../../assets/img/unalGames1.png";
  imageGame2 = "../../assets/img/unalGames2.png";
  imageGame3 = "../../assets/img/unalGames4.png";
  imageGame4 = "../../assets/img/unalGames3.png";
  imageGame5 = "../../assets/img/unalGames5.png";
  imageGame6 = "../../assets/img/unalGames6.png";

  imageButton = "../../assets/img/rightArrow.png";

  constructor() {}

  ngOnInit(): void {}
}
