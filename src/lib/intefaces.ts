export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface WeatherResult {
  latitude: number;
  longitude: number;
  current: {
    temperature2m: number;
    weatherCode: number;
  };
  hourly: {
    temperature2m: number[];
  };
  daily: {
    temperature2mMax: number[];
    temperature2mMin: number[];
  };
}

export interface Weather {
  temp: number;
  minTemp: number;
  maxTemp: number;
  weatherIconUrl: string;
  hourlyTemp: number[];
}

export interface PersonJsonResult {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  location: {
    country: string;
    city: string;
    coordinates: Coordinates;
  };
  picture: {
    large: string;
  };
}

export interface Person {
  name: string;
  gender: string;
  location: string;
  email: string;
  photoUrl: string;
  coordinates: Coordinates;
  weather?: Weather;
  saved?: boolean;
}