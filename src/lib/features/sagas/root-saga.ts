import personsSaga from "./persons";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(personsSaga);
}
