import { Component } from '@angular/core';
import { Books } from '../models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Independent Angular Component Interation';
  books: Books[] = [];

  onEvent(card: Books) {
    console.log(card);
    this.books.push({ name: card.name });
  }
}


