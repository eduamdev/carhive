import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}

export function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  children,
  footer,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[var(--modal-max-width)] gap-0 !rounded-xl p-0">
        {title && (
          <DialogHeader className="flex min-h-[var(--modal-header-height)] items-center justify-center px-6">
            <DialogTitle className="text-center text-base tracking-normal">
              {title}
            </DialogTitle>
          </DialogHeader>
        )}
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
