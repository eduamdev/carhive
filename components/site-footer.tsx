import { siteConfig } from "@/config/site"

import { LogoLink } from "./logoLink"
import { Button } from "./ui/button"

const footerLinks = [
  {
    title: "Services",
    links: [
      "Car Rentals",
      "Insurance Options",
      "Corporate Rentals",
      "Special Offers",
      "FAQs",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "Privacy Policy",
      "Terms of Service",
      "Accessibility",
      "Vehicle Guides",
      "Customer Testimonials",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Contact Us",
      "Blog",
      "Partners",
      "Customers",
      "Careers",
      "Press",
    ],
  },
  {
    title: "Social",
    links: ["Youtube", "Twitter", "Instagram", "Facebook"],
  },
]

export function SiteFooter() {
  const githubUrl = siteConfig.links.github

  return (
    <footer className="border-t border-black/[0.06] py-12">
      <div className="mx-auto w-full max-w-none px-5 text-sm sm:max-w-[90%] sm:px-0 xl:max-w-5xl">
        <div className="grid grid-cols-12 items-start justify-center gap-y-11">
          <div className="col-span-full md:col-span-3">
            <LogoLink />
          </div>
          <nav className="col-span-full grid grid-cols-12 gap-x-6 gap-y-11 md:col-span-9">
            {footerLinks.map((section) => (
              <ul
                key={section.title}
                className="col-span-6 flex flex-col gap-3 md:col-span-3 lg:gap-3"
              >
                <div className="pb-1.5">
                  <h2 className="whitespace-nowrap text-balance font-semibold leading-none text-neutral-950">
                    {section.title}
                  </h2>
                </div>
                {section.links.map((link) => (
                  <li key={link} className="text-neutral-600">
                    <Button
                      variant={"link"}
                      className="h-auto text-balance rounded-none p-0 text-[13px] font-normal leading-none sm:text-sm"
                      asChild
                    >
                      <a href={githubUrl} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <div className="col-span-full">
            <p className="text-[13px] leading-6 text-neutral-600 sm:text-sm">
              Built by{" "}
              <Button
                variant={"link"}
                className="h-auto rounded-none p-0 text-[13px] font-normal leading-none sm:text-sm"
                asChild
              >
                <a
                  href={siteConfig.author.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>eduamdev</strong>
                </a>
              </Button>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
