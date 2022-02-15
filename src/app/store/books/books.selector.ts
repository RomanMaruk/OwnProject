import { createSelector, createFeatureSelector } from "@ngrx/store";
import { BookInterface } from "src/app/model/books.model";

export const selectBook = createFeatureSelector<ReadonlyArray<BookInterface>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookColection = createSelector(
  selectBook,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
)