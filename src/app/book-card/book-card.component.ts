import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Books } from '../../models/book';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BookCardComponent implements OnInit {

  @Input() header: string;
  @Output() cardEvent = new EventEmitter();

  private outputCard: Books = { name: '' };
  private serviceCard: Books = { name: '' };

  constructor(private dataService: DataCommunicationService) {
  }

  ngOnInit() {
  }

  sendDataByOutputProperty(card: Books) {
    this.cardEvent.emit(card);
  }

  sendDataByService(card?: Books) {
    this.dataService.sendBookData(this.serviceCard);
  }
}
