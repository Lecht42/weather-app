import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import Api from "../../classes/api";
import { tryFetchPersons } from "../actions/saga-actions";
import { addPersons } from "../persons/persons-slice";
import { Person, PersonJsonResult } from "@/lib/intefaces";

function* fetchPersons(action: {
  type: typeof tryFetchPersons.type;
  payload: number;
}): SagaIterator {
  try {
    const json: { info: string; results: [] } = yield call(
      Api.fetchPersons,
      action.payload
    );
    const payload: Person[] = json.results.map((e: PersonJsonResult) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        gender: e.gender,
        email: e.email,
        location: `${e.location.country}, ${e.location.city}`,
        photoUrl: e.picture.large,
        coordinates: e.coordinates,
      };
    });
    yield put({ type: addPersons.type, payload });
  } catch (e: unknown) {
    yield put({ type: "PERSONS_FETCH_FAILED", error: e });
  }
}

export default function* personsSaga(): SagaIterator {
  yield takeLatest(tryFetchPersons.type, fetchPersons);
}
