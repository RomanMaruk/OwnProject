import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInterface } from 'src/app/model/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: any = [];
  // ReadonlyArray<BookInterface>
  @Output() add = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
