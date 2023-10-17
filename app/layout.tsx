import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'CarHive',
    template: `%s - CarHive`,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans', fontSans.variable)}>
        <div className="relative flex min-h-screen flex-col">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
