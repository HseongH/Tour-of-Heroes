import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { Heroes } from './mock-heroes';

@Component({
  selector: 'hero-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = Heroes;

  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
