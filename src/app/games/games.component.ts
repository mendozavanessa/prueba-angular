import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>`,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Pokemon'
    },
    {
      id: 2,
      name: 'Goku'
    },
    {
      id: 3,
      name: 'Plantas VS Zombie'
    }
  ]

}
