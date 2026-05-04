import { createReducer, on } from "@ngrx/store";
import { increment, decrement, resetCounter } from "./study-ngRx-action";
import { initialCounterState } from "./study-ngRx-state";

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(resetCounter, () => initialCounterState)
);