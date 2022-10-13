import { configureStore } from "@reduxjs/toolkit";
import { counterReduser } from "entites/Counter";
import { StateSchema } from "./stateSchema";

export function createReduxStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReduser },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
