import { Coordinates } from "../intefaces";
import { fetchWeatherApi } from "openmeteo";

export default class Api {
  static async fetchPersons(quantity: number = 1) {
    const res = await fetch(`https://randomuser.me/api/?results=${quantity}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  }

  static async fetchWeather(coordinates: Coordinates[]) {
    const params = {
      latitude: coordinates.map((e) => e.latitude).join(","),
      longitude: coordinates.map((e) => e.longitude).join(","),
      current: ["temperature_2m", "weather_code"],
      hourly: "temperature_2m",
      daily: ["temperature_2m_max", "temperature_2m_min"],
      timezone: "auto",
      forecast_days: 1,
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const res = fetchWeatherApi(url, params);

    return res;
  }
}
