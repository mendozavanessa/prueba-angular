import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de angular</h3>
    <img src="https://www.softplan.com.br/wp-content/uploads/2024/01/image-10-1024x320.png" alt="angular">
    <p>
    Gracias a su arquitectura de componentes y a las características avanzadas que proporciona, Angular te permite desarrollar aplicaciones de manera más rápida y eficiente. La reutilización de componentes y la modularidad del código facilitan la colaboración en equipos de desarrollo y aceleran el proceso de desarrollo.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;

  }`,
})
export class CommentsComponent {

}
