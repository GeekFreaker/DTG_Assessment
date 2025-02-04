import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'DTG-UI';
  games =  Array(4).fill("");
  locate = 'assets/Dream-Casino/Assessment Assets/CHARACTERS/CHARACTER-';
  fives = [
    { text: "Get your latest offers",
      small:"whats the new update",
      src: `${this.locate}AlienLady.png`
    },
    { text: "New games for your enjoyment",
      small:"new games to play",
      src: `${this.locate}Chicken.png`
    },
  ];

  buttons = ["top","payments","bonus","registering","terms","crypto","games"];


  location = 'assets/Dream-Casino/Assessment Assets/ICONS/CATEGORY ICONS/';
  items = [
    {name: "new", icon: `${this.location}NEW.svg`},
    {name: "popular", icon: `${this.location}POPULAR.svg`},
    {name: "jackpots", icon: `${this.location}JACKPOTS.svg`},
    {name: "slots", icon:`${this.location}SLOTS.svg`},
    {name: "live casino", icon:`${this.location}LIVE CASINO.svg`},
    {name: "table games", icon:`${this.location}TABLE GAMES.svg`},
    {name: "red tiger", icon:`${this.location}RED TIGER.svg`},
    {name: "scratch cards", icon:`${this.location}SCRATCH CARDS.svg`},
    {name: "megaways", icon:`${this.location}MEGAWAYS.svg`},
    {name: "free play", icon:`${this.location}FREE PLAY.svg`},
    {name: "game provider", icon:`${this.location}GAME PROVIDER.svg`}
  ];
  miniCards= Array(2).fill("");

  swap () {
    let temp = this.items[0];
    let another = this.items;
    another[0] = another[1];
    another[1] = temp;
    return another;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.games.length;

  }



}
