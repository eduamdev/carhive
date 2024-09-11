"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { VariantProps } from "class-variance-authority"

import { Button, buttonVariants } from "@/components/ui/button"

interface BackButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string
  children?: React.ReactNode
}

export function BackButton({
  variant = "ghost",
  size = "icon",
  className,
  children,
}: BackButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleRedirect = () => {
    const updatedPath = pathname.replace("/reservation/cars", "/cars")
    const targetUrl = `${updatedPath}?${searchParams.toString()}`
    router.push(targetUrl)
  }

  return (
    <Button
      variant={variant}
      size={size}
      type="button"
      onClick={handleRedirect}
      className={className}
    >
      {children}
    </Button>
  )
}
