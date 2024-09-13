"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import type { Map as LeafletMap } from "leaflet"
import { MapContainer, TileLayer, useMap } from "react-leaflet"

import "leaflet/dist/leaflet.css"

import {
  MAP_INITIAL_ZOOM_LEVEL,
  MAP_LOCATION_ZOOM_LEVEL,
} from "@/lib/constants"
import { SearchParams } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export default function Map() {
  const searchParams = useSearchParams()
  const mapRef = useRef<LeafletMap | null>(null)

  function Recenter() {
    const map = useMap()
    const { toast } = useToast()

    useEffect(() => {
      if (
        searchParams.has(SearchParams.LAT) &&
        searchParams.has(SearchParams.LNG)
      ) {
        const lat = Number(searchParams.get(SearchParams.LAT))
        const lng = Number(searchParams.get(SearchParams.LNG))

        if (!isNaN(lat) && !isNaN(lng)) {
          map.setView({ lat, lng }, MAP_LOCATION_ZOOM_LEVEL)
        } else {
          console.error("Invalid latitude or longitude values:", { lat, lng })
          toast({
            variant: "destructive",
            title: "Invalid Location Data",
            description:
              "Either the latitude or longitude search parameters in the URL are not valid numbers. Please check the URL and try again.",
          })
        }
      }
    }, [map, toast])

    return null
  }

  return (
    <MapContainer
      className="h-[calc(100dvh_-_var(--site-header-height))]"
      center={[0, 0]}
      zoom={MAP_INITIAL_ZOOM_LEVEL}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter />
    </MapContainer>
  )
}
