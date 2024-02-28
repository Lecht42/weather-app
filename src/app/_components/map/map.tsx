import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Coordinates } from "@/lib/intefaces";
import CircularProgressBar from "../progress-bars/circular-progress-bar";

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const position = {
    lat: parseFloat(coordinates.latitude.toString()),
    lng: parseFloat(coordinates.longitude.toString()),
  };

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  if (!isLoaded) return <CircularProgressBar />;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={ZOOM}
    >
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
