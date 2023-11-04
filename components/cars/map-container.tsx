import dynamic from 'next/dynamic';
import { MapSkeleton } from '@/components/skeletons';
import { fetchLocations } from '@/lib/data';

const DynamicMap = dynamic(
  async () => {
    const { Map } = await import('@/components/cars/map');
    return { default: Map };
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  },
);

export async function MapContainer() {
  const locations = await fetchLocations();

  return (
    <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
      <DynamicMap locations={locations} />
    </div>
  );
}
