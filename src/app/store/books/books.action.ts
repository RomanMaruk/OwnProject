import { createAction, props } from "@ngrx/store";
import { BookInterface } from "src/app/model/books.model";

export const addBook = createAction(
  '[Add List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book Collection/API] Retrived Book Succuss',
  props<{ books: ReadonlyArray<BookInterface>}>()
);