import { WeatherResult } from "../intefaces";

export default class WeatherData {
  data: WeatherResult;

  constructor(unserialazedData: any) {
    const current = unserialazedData.current()!;
    const hourly = unserialazedData.hourly()!;
    const daily = unserialazedData.daily()!;

    const latitude = unserialazedData.latitude();
    const longitude = unserialazedData.longitude();

    this.data = {
      latitude,
      longitude,
      current: {
        temperature2m: current.variables(0)!.value(),
        weatherCode: current.variables(1)!.value(),
      },
      hourly: {
        temperature2m: hourly.variables(0)!.valuesArray()!,
      },
      daily: {
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        temperature2mMin: daily.variables(1)!.valuesArray()!,
      },
    };
  }
}
