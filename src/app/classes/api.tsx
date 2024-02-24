import { ICoordinates } from "../intefaces";

export default class Api {
  static fetchUsers(quantity : Number = 1) {
    const url = fetch(`https://randomuser.me/api/?results=${quantity}`);

    return url;
  }

  static fetchWeather(coordinates : ICoordinates) {
    const url = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true&hourly=temperature_1h`);

    return url;
  }
}
