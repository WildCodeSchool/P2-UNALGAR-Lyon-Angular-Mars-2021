import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  imageGame1 = "../../assets/img/unalGame1.jpg";
  imageGame3 = "../../assets/img/unalGame2.jpg";
  imageGame4 = "../../assets/img/unalGame4.jpg";
  imageGame5 = "../../assets/img/unalGame3.jpg";
  imageGame7 = "../../assets/img/unalGame6.jpg";
  imageGame8 = "../../assets/img/unalGame5.jpg";

  imageButton = "../../assets/img/rightArrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
