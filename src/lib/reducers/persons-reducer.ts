import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../intefaces";

const usersSlice = createSlice({
  name: 'persons',
  initialState: {
    persons: [] as Person[],
    savedPersons: [] as Person[]
  },
  reducers: {
    addPersons: (state, action) => {
        if(action.payload.isArray()){
            state.persons = state.persons.concat(action.payload);
        } else {
            state.persons.push(action.payload);
        }
    },
  },
});

export const { addPersons } = usersSlice.actions;
export default usersSlice.reducer;
