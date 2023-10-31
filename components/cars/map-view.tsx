'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import type { LatLngExpression, Map } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Location, SearchParams } from '@/lib/definitions';

export function MapView({ locations }: { locations: Location[] }) {
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
      if (searchParams.has(SearchParams.LOCATION)) {
        const newLocation = locations.find(
          (location) =>
            location.value === searchParams.get(SearchParams.LOCATION),
        );

        if (!newLocation)
          throw new Error('Could not find the requested location');

        const newCenter: LatLngExpression = {
          lat: Number(newLocation?.latitude),
          lng: Number(newLocation?.longitude),
        };

        map.setView(newCenter, DEFAULT_ZOOM_LEVEL);
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
