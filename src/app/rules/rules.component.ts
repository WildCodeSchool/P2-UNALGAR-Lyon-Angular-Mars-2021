import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  imageGame1 = "../../assets/img/unalgarGame1.jpg";
  imageGame2 = "../../assets/img/unalgarGame2.jpg";
  imageGame3 = "../../assets/img/unalgarGame4.jpg";
  imageGame4 = "../../assets/img/unalgarGame3.jpg";
  imageGame5 = "../../assets/img/unalgarGame5.jpg";
  imageGame6 = "../../assets/img/unalgarGame6.jpg";

  imageButton = "../../assets/img/rightArrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
