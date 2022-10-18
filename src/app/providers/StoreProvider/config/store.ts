import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReduser } from "entites/Counter";
import { userReduser } from "entites/User";
import { StateSchema } from "./stateSchema";

export function createReduxStore(initialState: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: counterReduser,
    user: userReduser,
  };

  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
