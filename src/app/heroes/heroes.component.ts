import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string): void {
    if (!name) return;

    name = name.trim();

    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero: Hero) => this.heroes.push(hero));
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
