import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Books } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }

  private books = new Subject<Books>();

  bookaDataSent$ = this.books.asObservable();

  sendBookData(books: Books) {
    console.log('sendBookData', books);
    const newObj = new Books(books.name);
    this.books.next(newObj);
  }
}
