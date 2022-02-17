import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookInterface } from 'src/app/model/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {
  @Input() books: any = []
  //ReadonlyArray<BookInterface>
  @Output() remove = new EventEmitter<string>();
}
