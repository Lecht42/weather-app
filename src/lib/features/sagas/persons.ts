import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import Api from "@/lib/classes/api";
import {
  tryFetchPersons,
  tryLoadPersons,
  tryReplaceSavedPersons,
  trySavePerson,
  tryUpdateWeather,
} from "../actions/saga-actions";
import { addPersons, clearPersons, setPersons } from "../persons/persons-slice";
import { Person, PersonJsonResult } from "@/lib/intefaces";
import Storage from "@/lib/classes/storage";

function* fetchPersons(action: {
  type: typeof tryFetchPersons.type;
  payload: number;
}): SagaIterator {
  try {
    const personsJson: { info: string; results: [] } = yield call(
      Api.fetchPersons,
      action.payload
    );

    const payload: Person[] = personsJson.results.map((e: PersonJsonResult) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        gender: e.gender,
        email: e.email,
        location: `${e.location.country}, ${e.location.city}`,
        photoUrl: e.picture.large,
        coordinates: e.location.coordinates,
      };
    });

    yield put({ type: addPersons.type, payload });
    yield put({ type: tryUpdateWeather.type, payload });
  } catch (e: unknown) {
    yield put({ type: "PERSONS_FETCH_FAILED", error: e });
  }
}

function* loadPersons(action: {
  type: typeof tryLoadPersons.type;
  payload: null;
}): SagaIterator {
  try {
    const payload: Person[] = Storage.loadPersons();

    yield put({ type: setPersons.type, payload });
  } catch (e: unknown) {
    yield put({ type: "PERSONS_LOAD_FAILED", error: e });
  }
}

function* savePerson(action: {
  type: typeof tryFetchPersons.type;
  payload: Person;
}): SagaIterator {
  try {
    Storage.savePerson({ ...action.payload, saved: true });
  } catch (e: unknown) {
    yield put({ type: "PERSON_SAVE_FAILED", error: e });
  }
}

function* replaceSavedPersons(action: {
  type: typeof tryFetchPersons.type;
  payload: Person[];
}): SagaIterator {
  try {
    Storage.replacePersons(action.payload);
  } catch (e: unknown) {
    yield put({ type: "PERSONS_REPLACE_FAILED", error: e });
  }
}

export default function* personsSaga(): SagaIterator {
  yield takeLatest(tryFetchPersons.type, fetchPersons);
  yield takeLatest(tryLoadPersons.type, loadPersons);
  yield takeLatest(trySavePerson.type, savePerson);
  yield takeLatest(tryReplaceSavedPersons.type, replaceSavedPersons);
}
