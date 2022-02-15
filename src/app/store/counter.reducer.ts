import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.action";

export const initialState = 0;

const _counerReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state > 0 ? state - 1 : 0),
  on(reset, (state) => 0),
);

export let counterReducer = ((state: any, action: any): any => {
  return _counerReducer(state, action)
})