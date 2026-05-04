import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./study-ngRx-state";

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCounterValue = createSelector(
  selectCounterState,
  (state) => state.counter
);