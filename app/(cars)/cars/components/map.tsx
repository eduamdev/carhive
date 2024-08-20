'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import type { LatLngExpression, Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchParams } from '@/app/lib/types';
import { Location } from '@/db/definitions';

export function Map({ locations }: { locations: Location[] }) {
  const searchParams = useSearchParams();
  const mapRef = useRef<LeafletMap | null>(null);

  const DEFAULT_ZOOM_LEVEL = 2;

  function Recenter() {
    const map = useMap();

    useEffect(() => {
      if (searchParams.has(SearchParams.LOCATION)) {
        const newLocation = locations.find(
          (location) =>
            location.slug === searchParams.get(SearchParams.LOCATION),
        );

        if (!newLocation)
          throw new Error('Could not find the requested location');

        const center: LatLngExpression = {
          lat: Number(newLocation?.latitude),
          lng: Number(newLocation?.longitude),
        };

        const zoom = 12;

        map.setView(center, zoom);
      }
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      className="h-[var(--cars-main-content-height)]"
      center={[0, 0]}
      zoom={DEFAULT_ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter />
    </MapContainer>
  );
}
