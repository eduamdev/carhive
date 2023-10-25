'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import type { LatLngExpression, Map } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getLocationByValue } from '@/lib/locations';
import { ESearchParams } from '@/types/filters';

export function MapView() {
  const searchParams = useSearchParams();
  const mapRef = useRef<Map | null>(null);

  const DEFAULT_LOCATION = {
    latitude: 52.3547,
    longitude: 4.904,
  };
  const DEFAULT_ZOOM_LEVEL = 12;

  const center: LatLngExpression = [
    DEFAULT_LOCATION.latitude,
    DEFAULT_LOCATION.longitude,
  ];

  function RecenterMap() {
    const map = useMap();

    useEffect(() => {
      if (searchParams.has(ESearchParams.LOCATION)) {
        const location = getLocationByValue(
          searchParams.get(ESearchParams.LOCATION) || '',
        );

        if (location) {
          const center: LatLngExpression = {
            lat: location.latitude,
            lng: location.longitude,
          };
          map.setView(center, DEFAULT_ZOOM_LEVEL);
        }
      }
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      className="h-[var(--map-container-height)]"
      center={center}
      zoom={DEFAULT_ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenterMap />
    </MapContainer>
  );
}
