import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  
  imageLogoTeam = "../../assets/img/teamU.png";

  //Adresse
  nom: string = "Wild Code School";
  adress: any = {street: '17 rue Delandine', city: '69002 Lyon'};
  telephoneNumber: string = "06 40 95 24 24";

  //Nous retrouvez

  imageFb = "../../assets/img/fb.png";
  imageTwitter = "../../assets/img/twit.png";
  imageInstagram = "../../assets/img/inst.png";
  imageGithub = "../../assets/img/git.png";


  user: User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    window.alert("Votre message a bien été envoyé!");
  }
}
