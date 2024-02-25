export interface Coordinates {
    latitude: number;
    longitude: number;
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
  };
  picture: {
    large: string;
  };
  coordinates: Coordinates; 
}

export interface Person {
    name: string;
    gender: string;
    location: string;
    email: string;
    photoUrl: string;
    coordinates?: Coordinates;
}