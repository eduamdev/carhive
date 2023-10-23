import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: {
    name: 'eduamdev',
    url: 'https://eduardoambriz.com',
  },
  creator: 'eduamdev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 600,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@eduamdev',
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
