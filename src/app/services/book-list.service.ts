import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookInterface } from '../model/books.model';

@Injectable({ providedIn: 'root'})
export class GoogleBooksServices {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<BookInterface>> {
    return this.http.get<{ items: BookInterface[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    ).pipe(map((book) => book.items || []))
  }
}