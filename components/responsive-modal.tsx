import { ReactNode } from "react"

import { DESKTOP_MEDIA_QUERY } from "@/lib/constants"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface ResponsiveModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger: ReactNode
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
}

export function ResponsiveModal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
}: ResponsiveModalProps) {
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="max-w-[568px] gap-0 !rounded-xl p-0">
          <DialogHeader className="flex items-center justify-center border-b border-black/10 px-6 py-5">
            <DialogTitle className="text-center text-base tracking-normal">
              {title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="h-full max-h-[73dvh] overflow-y-auto">{children}</div>
          {footer && (
            <DialogFooter className="border-t border-black/10 py-[18px]">
              {footer}
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="py-3">
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="sr-only">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="h-full max-h-[80dvh] overflow-y-auto border-y">
          {children}
        </div>
        {footer && <DrawerFooter className="px-0">{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}
