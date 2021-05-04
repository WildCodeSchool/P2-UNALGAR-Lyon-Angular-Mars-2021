import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  imageGame1 = "../../assets/img/jeux1.jpg";
  imageGame3 = "../../assets/img/jeux3.jpg";
  imageGame4 = "../../assets/img/jeux4.jpg";
  imageGame5 = "../../assets/img/jeux5.jpg";
  imageGame7 = "../../assets/img/jeux7.jpg";
  imageGame8 = "../../assets/img/jeux8.jpg";

  imageButton = "../../assets/img/rightArrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
