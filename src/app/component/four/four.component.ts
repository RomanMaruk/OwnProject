import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleBooksServices } from 'src/app/services/book-list.service';
import { addBook, removeBook, retrievedBookList } from 'src/app/store/books/books.action';
import { selectBook, selectBookColection } from 'src/app/store/books/books.selector';
import { decrement, increment, reset } from 'src/app/store/counter.action';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
  count$: Observable<number>
  books$ = this.store.select(selectBook)
  booksColection$ = this.store.select(selectBookColection)

  constructor(private store: Store<{count: number}>, private bookService: GoogleBooksServices) {
    this.count$ = store.select('count')
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }))
  }
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }))
  }
  // *** code for count ****
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  // **** End code for count method*** 

  ngOnInit(): void {
    this.bookService
    .getBooks()
    .subscribe((books) => this.store.dispatch(retrievedBookList({books})))
  }

}
