import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  username = 'Vanessa';
  isLoggedIn = false; //esta funcionando como un state
  favGame = '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

  greet(){
    alert("Vanessa Mendoza Inoñan");
  }

}
