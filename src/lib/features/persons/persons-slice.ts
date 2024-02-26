import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../intefaces";

const usersSlice = createSlice({
  name: "persons",
  initialState: {
    persons: [] as Person[],
  },
  reducers: {
    setPersons: (state, action) => {
      state.persons = action.payload;
    },
    addPersons: (state, action) => {
      state.persons = state.persons.concat(action.payload);
    },
    clearPersons: (state, actions) => {
      state.persons = [];
    },
  },
});

export const { setPersons, addPersons, clearPersons } = usersSlice.actions;
export default usersSlice.reducer;
