import { LoadingDots } from "@/app/components/loading-dots"

export default function Loading() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-white">
      <LoadingDots />
    </div>
  )
}
