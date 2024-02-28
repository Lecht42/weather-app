import { Person } from "@/lib/intefaces";
import { RootState } from "@/lib/store";

export const getPersons = (state: RootState): Person[] => state.persons.persons;
