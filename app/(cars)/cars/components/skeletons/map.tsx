import { LoadingDots } from "@/components/loading-dots"

export function MapSkeleton() {
  return (
    <div className="flex h-[calc(100dvh_-_var(--site-header-height))] items-center justify-center bg-[#ddd]">
      <LoadingDots />
    </div>
  )
}
