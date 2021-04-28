import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { RulesComponent } from "./rules/rules.component";
import { ContactComponent } from "./contact/contact.component";
import { TimerComponent } from "./game/timer/timer.component";
import { TimelineComponent } from "./game/timeline/timeline.component";
import { CardDeckComponent } from "./game/card-deck/card-deck.component";
import { HandComponent } from "./game/hand/hand.component";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';

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
    HandComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
