import personsSaga from "./persons";
import { fork } from "redux-saga/effects";
import weatherSaga from "./weather";

export default function* rootSaga() {
  yield fork(personsSaga);
  yield fork(weatherSaga);
}
