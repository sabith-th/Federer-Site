import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  navLinks = [
    { link: 'gs', label: 'Grand Slams'},
    { link: 'wtf', label: 'ATP World Tour Finals'},
    { link: 'masters', label: 'ATP Masters 100'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
