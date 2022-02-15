import { createReducer, on } from "@ngrx/store";

import { retrievedBookList } from "./books.action";
import { BookInterface } from "src/app/model/books.model";

export const initialState: ReadonlyArray<BookInterface> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);