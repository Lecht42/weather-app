import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./features/persons/persons-slice";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  return configureStore({
    reducer: {
      persons: personsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];