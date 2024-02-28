import { Person } from "@/lib/intefaces";
import { createAction } from "@reduxjs/toolkit";

export const tryFetchPersons = createAction<number, "PERSONS_FETCH_REQUESTED">(
    "PERSONS_FETCH_REQUESTED"
  ),
  tryLoadPersons = createAction<any, "SAVED_PERSONS_LOAD_REQUESTED">(
    "SAVED_PERSONS_LOAD_REQUESTED"
  ),
  trySavePerson = createAction<Person, "SAVE_PERSON_REQUESTED">(
    "SAVE_PERSON_REQUESTED"
  ),
  tryReplaceSavedPersons = createAction<Person[], "REPLACE_SAVED_PERSONS_REQUESTED">(
    "REPLACE_SAVED_PERSONS_REQUESTED"
  ),
  tryUpdateWeather = createAction<Person[], "UPDATE_WEATHER_REQUESTED">(
    "UPDATE_WEATHER_REQUESTED"
  );
