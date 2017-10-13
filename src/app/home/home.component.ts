import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quotes = [
    {
      quote: `In an era of specialists you're either a clay court, a grass court or a hard court specialist...or you're Roger Federer.`,
      author: `Jimmy Connors, winner of 8 Grand Slams`
    },
    {
      quote: `I'd like to be in his shoes for one day to know what it feels like to play that way.`,
      author: `Mats Wilander, winner of 7 Grand Slams`
    },
    {
      quote: `Federer is the best player in history, no other player has ever had such quality.`,
      author: `Rafael Nadal, winner of 14 Grand Slams`
    }
  ];

}
