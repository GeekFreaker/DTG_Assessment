import { Component } from '@angular/core';
import { faCoffee, faFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'DTG-UI';
  location = 'assets/Dream-Casino/Assessment Assets/ICONS/CATEGORY ICONS/';
  items = [
    {name: "new",icon: `${this.location}NEW.svg`},
    {name: "popular",icon: `${this.location}POPULAR.svg`},
    {name: "jackpots",icon: `${this.location}JACKPOTS.svg`},
    {name: "slots",icon:`${this.location}SLOTS.svg`},
    {name: "live casino",icon:`${this.location}LIVE CASINO.svg`},
    {name: "table games",icon:`${this.location}TABLE GAMES.svg`},
    {name: "red tiger",icon:`${this.location}RED TIGER.svg`},
    {name: "scratch cards",icon:`${this.location}SCRATCH CARDS.svg`},
    {name: "megaways",icon:`${this.location}MEGAWAYS.svg`},
    {name: "free play",icon:`${this.location}FREE PLAY.svg`},
    {name: "game provider", icon: `${this.location}GAME PROVIDER.svg`}
  ];

}
