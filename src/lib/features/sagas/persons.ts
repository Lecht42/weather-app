import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import Api from "@/lib/classes/api";
import {
  tryFetchPersons,
  tryLoadPersons,
  trySavePerson,
} from "../actions/saga-actions";
import { addPersons, setPersons } from "../persons/persons-slice";
import { Person, PersonJsonResult } from "@/lib/intefaces";
import Storage from "@/lib/classes/storage";
import WeatherData from "@/lib/classes/weather-data";
import weatherCodes from "@/lib/json/weather-codes.json" assert { type: "json" };

function* fetchPersons(action: {
  type: typeof tryFetchPersons.type;
  payload: number;
}): SagaIterator {
  try {
    const personsJson: { info: string; results: [] } = yield call(
      Api.fetchPersons,
      action.payload
    );
    const persons: Person[] = personsJson.results.map((e: PersonJsonResult) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        gender: e.gender,
        email: e.email,
        location: `${e.location.country}, ${e.location.city}`,
        photoUrl: e.picture.large,
        coordinates: e.location.coordinates,
      };
    });

    const rawWeatherData: any[] = yield call(
      Api.fetchWeather as any,
      persons.map((e) => e.coordinates)
    );

    const weatherData: WeatherData[] = rawWeatherData.map(
      (e) => new WeatherData(e)
    );

    const payload: Person[] = persons.map((e, i) => {
      const personWeather = weatherData[i].data;

      return {
        ...e,
        weather: {
          temp: Math.round(personWeather.current.temperature2m),
          minTemp: Math.round(personWeather.daily.temperature2mMin[0]),
          maxTemp: Math.round(personWeather.daily.temperature2mMax[0]),
          weatherIconUrl:
            weatherCodes[
              personWeather.current.weatherCode.toString() as keyof typeof weatherCodes
            ].day.image,
          hourlyTemp: Array.from(
            personWeather.hourly.temperature2m.map((e) => Math.round(e))
          ),
        },
      };
    });

    yield put({ type: addPersons.type, payload });
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
    Storage.savePerson(action.payload);
  } catch (e: unknown) {
    yield put({ type: "PERSON_SAVE_FAILED", error: e });
  }
}

export default function* personsSaga(): SagaIterator {
  yield takeLatest(tryFetchPersons.type, fetchPersons);
  yield takeLatest(tryLoadPersons.type, loadPersons);
  yield takeLatest(trySavePerson.type, savePerson);
}
