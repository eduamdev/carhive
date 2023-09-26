'use client';

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
  const mapRef = useRef();

  const searchParams = useSearchParams();
  const lat = searchParams.has('lat')
    ? Number(searchParams.get('lat'))
    : 51.505;
  const lng = searchParams.has('lng') ? Number(searchParams.get('lng')) : -0.09;
  const position: [number, number] = [lat, lng];
  const ZOOM_LEVEL = 13;

  return (
    <MapContainer
      className="h-[calc(100vh-var(--header-and-search-offset))]"
      center={position}
      zoom={ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
