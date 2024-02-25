export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Person {
    name: string;
    gender: string;
    location: string;
    email: string;
    photoUrl: string;
    coordinates: Coordinates;
}