import { createAction } from "@reduxjs/toolkit";

export const tryFetchPersons = createAction<number, "PERSONS_FETCH_REQUESTED">(
  "PERSONS_FETCH_REQUESTED"
);
