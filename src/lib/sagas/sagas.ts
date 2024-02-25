import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import Api from "../classes/api";

function* fetchPersons(action: {
  type: "PERSONS_FETCH_REQUESTED";
  payload: { quantity: number };
}): SagaIterator {
  try {
    const persons = yield call(Api.fetchPersons, action.payload.quantity ?? 1);
    yield put({ type: "PERSONS_FETCH_SUCCEEDED", persons });
  } catch (e: unknown) {
    yield put({ type: "PERSONS_FETCH_FAILED", error: e });
  }
}

function* mySaga() {
  yield takeLatest("PERSONS_FETCH_REQUESTED", fetchPersons);
}

export default mySaga;
