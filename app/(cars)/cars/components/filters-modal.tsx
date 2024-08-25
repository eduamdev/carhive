import { ReactNode } from 'react';
import { useMediaQuery } from '@/app/hooks/use-media-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/app/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerFooter,
} from '@/app/components/ui/drawer';
import { DESKTOP_MEDIA_QUERY } from '@/app/lib/constants';

interface ResponsiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function FiltersModal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
}: ResponsiveModalProps) {
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger className="relative" asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="max-w-[var(--modal-max-width)] gap-0 !rounded-xl p-0">
          <DialogHeader className="flex min-h-[var(--modal-header-height)] items-center justify-center px-6">
            <DialogTitle className="text-center text-base tracking-normal">
              {title}
            </DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div className="h-full max-h-[var(--modal-content-max-height)] overflow-y-auto border-y">
            {children}
          </div>
          {footer && (
            <DialogFooter className="flex min-h-[var(--modal-footer-height)] items-center justify-center px-6">
              {footer}
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="px-4">{children}</div>
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
}
