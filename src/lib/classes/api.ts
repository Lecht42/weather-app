import { Coordinates } from "../intefaces";

export default class Api {
  static async fetchPersons(quantity: number = 1) {
    const res = await fetch(`https://randomuser.me/api/?results=${quantity}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  }

  static async fetchWeather(coordinates: Coordinates) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true&hourly=temperature_1h`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  }
}
