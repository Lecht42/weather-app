import { call, put, select, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { tryUpdateWeather } from "../actions/saga-actions";
import { Person } from "@/lib/intefaces";
import { getPersons } from "../selectors/selectors";
import WeatherData from "@/lib/classes/weather-data";
import Api from "@/lib/classes/api";
import { setPersons } from "../persons/persons-slice";

function* updateWeather(action: {
  type: typeof tryUpdateWeather.type;
  payload: Person[];
}): SagaIterator {
  try {
    const persons: Person[] = yield select(getPersons);

    const rawWeatherData: any[] = yield call(
      Api.fetchWeather as any,
      persons.map((e: Person) => e.coordinates)
    );

    const weatherData: WeatherData[] = rawWeatherData.map(
      (e) => new WeatherData(e)
    );

    const payload: Person[] = persons.map((e: Person, i: number) => {
      return {
        ...e,
        weather: weatherData[i].toPersonalWeather(),
      };
    });

    yield put({ type: setPersons.type, payload });
  } catch (e: unknown) {
    yield put({ type: "UPDATE_WEATHER_FAILED", error: e });
  }
}

export default function* weatherSaga(): SagaIterator {
  yield takeLatest(tryUpdateWeather.type, updateWeather);
}
