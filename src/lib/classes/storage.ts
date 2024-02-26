import { Person } from "../intefaces";

const storageKeyName = "SAVED_PERSONS";

export default class Storage {
  static loadPersons() {
    const saved = localStorage.getItem(storageKeyName);
    const loaded: Person[] = saved ? JSON.parse(saved) : [];

    return loaded;
  }

  static savePerson(person: Person) {
    const loaded = this.loadPersons();
    loaded.push(person);

    localStorage.setItem(storageKeyName, JSON.stringify(loaded));
  }
}
