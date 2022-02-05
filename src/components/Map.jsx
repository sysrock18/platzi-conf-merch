import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import '../styles/components/Map.css';


const Map = ({ data }) => {
  if (data.lat != null && data.lng != null) {
    const center = [data.lat, data.lng]
    return (
      <MapContainer center={center} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} />
      </MapContainer>
    );
  }

  return null;

}

export default Map;