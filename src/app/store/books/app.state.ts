import { BookInterface } from "src/app/model/books.model";

export interface AppState {
  books: ReadonlyArray<BookInterface>,
  colection: ReadonlyArray<string>
}