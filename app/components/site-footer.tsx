import Link from 'next/link';
import { CarhiveLogo } from './icons/carhive-logo';
import { NewsletterSubscriptionForm } from '@/app/components/newsletter-subscription-form';
import { siteConfig } from '@/config/site';
import { LogoLink } from './logoLink';

const footerLinks = [
  {
    title: 'Services',
    links: [
      'Car Rentals',
      'Insurance Options',
      'Corporate Rentals',
      'Special Offers',
      'FAQs',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
      'Accessibility',
      'Vehicle Guides',
      'Customer Testimonials',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us', 'Blog', 'Careers', 'Press'],
  },
  { title: 'Connect', links: ['Instagram', 'Youtube', 'Twitter'] },
];

export function SiteFooter() {
  const githubUrl = siteConfig.links.github;

  return (
    <footer className="border-t border-black/[0.06] bg-white py-10">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 2xl:max-w-7xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] items-stretch justify-between gap-x-2 gap-y-10 sm:gap-x-6 md:flex md:flex-wrap">
          <div className="col-span-full">
            <div className="-mt-2">
              <LogoLink />
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-2.5 lg:gap-3">
              <h3 className="mb-1 text-sm font-semibold lg:text-sm">
                {section.title}
              </h3>
              {section.links.map((link) => (
                <a
                  key={link}
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-neutral-600 hover:text-black lg:text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="col-span-full flex w-full flex-col gap-2 lg:max-w-[240px] lg:gap-2.5">
            <h3 className="mb-1.5 text-sm font-semibold lg:text-sm">
              Subscribe to our newsletter
            </h3>
            <NewsletterSubscriptionForm />
          </div>
        </div>
        <div className="mt-14 lg:mt-16">
          <p className="text-[13px] leading-6 text-neutral-600 lg:text-sm">
            Crafted with care by{' '}
            <a href={siteConfig.author.url} target="_blank" rel="noreferrer">
              <strong>eduamdev</strong>
            </a>
            . Check out the code on{' '}
            <a href={`${githubUrl}/carhive`} target="_blank" rel="noreferrer">
              <strong>GitHub</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
