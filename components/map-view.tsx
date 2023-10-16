'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getLocationByValue } from '@/lib/locations';
import { ESearchParams } from '@/types/filters';

export function MapView() {
  const searchParams = useSearchParams();
  const mapRef = useRef();

  const DEFAULT_LAT = 51.505;
  const DEFAULT_LNG = -0.09;
  const DEFAULT_ZOOM_LEVEL = 13;

  function UpdateMapPosition() {
    const map = useMap();

    useEffect(() => {
      if (searchParams.has(ESearchParams.LOCATION)) {
        const location = getLocationByValue(
          searchParams.get(ESearchParams.LOCATION),
        );
        const center: LatLngExpression = {
          lat: location.latitude,
          lng: location.longitude,
        };
        const zoom: number = map.getZoom() || DEFAULT_ZOOM_LEVEL;
        map.setView(center, zoom);
      }
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      className="h-[var(--map-container-height)]"
      center={[DEFAULT_LAT, DEFAULT_LNG]}
      zoom={DEFAULT_ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UpdateMapPosition />
    </MapContainer>
  );
}
