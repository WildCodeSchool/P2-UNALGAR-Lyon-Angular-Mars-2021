import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { RulesComponent } from "./rules/rules.component";
import { ContactComponent } from "./contact/contact.component";
import { TimerComponent } from "./game/timer/timer.component";
import { TimelineComponent } from "./game/timeline/timeline.component";
import { CardDeckComponent } from "./game/card-deck/card-deck.component";
import { ButtonComponent } from "./common/button/button.component";
import { HandComponent } from "./game/hand/hand.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    RulesComponent,
    ContactComponent,
    TimerComponent,
    TimelineComponent,
    CardDeckComponent,
    ButtonComponent,
    HandComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
