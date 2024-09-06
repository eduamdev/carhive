export function LoadingDots() {
  return (
    <div className="flex gap-x-2">
      <div className="size-2 animate-dot-pulse rounded-full bg-black"></div>
      <div className="size-2 animate-dot-pulse rounded-full bg-black [animation-delay:0.15s]"></div>
      <div className="size-2 animate-dot-pulse rounded-full bg-black [animation-delay:0.3s]"></div>
    </div>
  )
}
