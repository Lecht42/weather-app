import personsSaga from "./persons";
import { fork } from "redux-saga/effects";

function* rootSaga() {
  yield fork(personsSaga);
}
