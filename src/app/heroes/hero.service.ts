import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero.model';
import { Heroes } from './mock-heroes';

import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.addMessage('HeroService: fetched heroes');

    return heroes;
  }
}
