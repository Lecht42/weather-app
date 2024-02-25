import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import Api from "../../classes/api";
import { tryFetchPersons } from "../actions/saga-actions";

function* fetchPersons(action: {
  type: typeof tryFetchPersons.type, 
  payload: number;
}): SagaIterator {
  try {
    const persons = yield call(Api.fetchPersons, action.payload);
    yield put({ type: "PERSONS_FETCH_SUCCEEDED", persons });
  } catch (e: unknown) {
    yield put({ type: "PERSONS_FETCH_FAILED", error: e });
  }
}

export default function* personsSaga() : SagaIterator {
  yield takeLatest(tryFetchPersons.type, fetchPersons);
}

