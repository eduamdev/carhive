import dynamic from "next/dynamic"
import { getLocations } from "@/db/queries"

import { MapSkeleton } from "./skeletons/map"

const DynamicMap = dynamic(
  async () => {
    const { Map } = await import("./map")
    return { default: Map }
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  }
)

export async function MapContainer() {
  const locations = await getLocations()

  return (
    <div className="sticky top-[var(--cars-header-height)] z-10 basis-auto">
      <DynamicMap locations={locations} />
    </div>
  )
}
