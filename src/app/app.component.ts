import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiComponenteComponent, CommentsComponent],
  /*template:`<h1>hola mundo {{city.toUpperCase()}} {{1+1}}</h1>
  <app-mi-componente></app-mi-componente>`,*/
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Barcelona';
}
