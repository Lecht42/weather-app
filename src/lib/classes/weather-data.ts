import { Weather, WeatherResult } from "../intefaces";
import weatherCodes from "@/lib/json/weather-codes.json" assert { type: "json" };

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

  toPersonalWeather(): Weather {
    return {
      temp: Math.round(this.data.current.temperature2m),
      minTemp: Math.round(this.data.daily.temperature2mMin[0]),
      maxTemp: Math.round(this.data.daily.temperature2mMax[0]),
      weatherIconUrl:
        weatherCodes[
          this.data.current.weatherCode.toString() as keyof typeof weatherCodes
        ].day.image,
      hourlyTemp: Array.from(
        this.data.hourly.temperature2m.map((e) => Math.round(e))
      ),
    };
  }
}
