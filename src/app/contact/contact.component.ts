import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}
}
