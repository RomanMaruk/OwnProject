import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Action] Increment');
export const decrement = createAction('[Counter Action] Decrement');
export const reset = createAction('[Counter Action] Reset');

