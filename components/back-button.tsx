"use client"

import { useRouter } from "next/navigation"
import { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "./ui/button"

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

  return (
    <Button
      variant={variant}
      size={size}
      type="button"
      onClick={() => router.back()}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}
