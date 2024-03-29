import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./features/persons/persons-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./features/sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      persons: personsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];