import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Coordinates } from "@/lib/intefaces";

export interface SimpleMapProps {
  coordinates: Coordinates;
  photoUrl: string;
}

const containerStyle = {
  width: "100%",
  height: "16rem",
};

const ZOOM = 12;
const PHOTO_SIZE = 32;

const Map: React.FC<SimpleMapProps> = ({ coordinates, photoUrl }) => {
  const position = {
    lat: parseFloat(coordinates.latitude.toString()),
    lng: parseFloat(coordinates.longitude.toString()),
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={ZOOM}>
      <Marker
        position={position}
        icon={{
          url: photoUrl,
          scaledSize: new window.google.maps.Size(PHOTO_SIZE, PHOTO_SIZE),
        }}
      />
    </GoogleMap>
  );
};

export default Map;
