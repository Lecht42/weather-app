import { Coordinates } from "../intefaces";

export default class Api {
  static fetchPersons(quantity: number = 1) {
    const url = fetch(`https://randomuser.me/api/?results=${quantity}`);

    return url;
  }

  static fetchWeather(coordinates: Coordinates) {
    const url = fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true&hourly=temperature_1h`
    );

    return url;
  }
}
