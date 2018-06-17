import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Books } from '../../models/book';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BookListComponent implements OnInit {

  @Input() booksFromOutput: any;
  private booksFromService: Array<Books> = [];
  constructor(private dataService: DataCommunicationService) {
    dataService.bookaDataSent$.subscribe(
      book => {
        this.booksFromService.push(book);
      }
    );
  }

  ngOnInit() { }



}
