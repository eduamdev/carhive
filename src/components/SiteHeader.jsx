import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { navItems } from "../data/navItems";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { useState, useEffect } from "react";

function NavMobile() {
  const [open, setOpen] = useState(false);

  const MOBILE_BREAKPOINT = 768;
  const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? getIsMobile() : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open && isMobile) {
      document.body.classList.add("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [open, isMobile]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          {open ? (
            <Icons.ChevronUp className="h-6 w-6 text-white" />
          ) : (
            <Icons.Menu className="h-6 w-6 text-white" />
          )}
        </Button>
      </PopoverTrigger>
      {isMobile && (
        <PopoverContent
          sideOffset={30}
          className="w-screen h-[calc(100vh_-_96px)] p-6 rounded-none border-none"
        >
          <nav className="grid grid-cols-1">
            <ul>
              {navItems.map((navItem) => (
                <li
                  key={navItem.title}
                  className="text-lg text-neutral-300 hover:text-white transition-colors font-medium py-[10px]"
                >
                  {navItem.isHashLink ? (
                    <HashLink smooth to={navItem.href} className="w-full block">
                      {navItem.title}
                    </HashLink>
                  ) : (
                    <Link
                      to={navItem.href}
                      className="w-full block"
                      onClick={() => setOpen(false)}
                    >
                      {navItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-5">
              <button className="font-semibold w-full flex items-center justify-center bg-transparent px-2 py-2 rounded-md border border-neutral-300 hover:border-white transition-all duration-150">
                Login
              </button>
              <button className="font-semibold w-full flex items-center justify-center bg-white text-black px-2 py-2 rounded-md border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150">
                Download the app
              </button>
            </div>
          </nav>
        </PopoverContent>
      )}
    </Popover>
  );
}

export function SiteHeader() {
  return (
    <header className="h-24 w-full flex flex-row items-center justify-between px-6 2xl:px-0 max-w-screen-xl mx-auto">
      <div className="flex flex-row items-center justify-start">
        <Link
          to="/"
          className="font-semibold text-[26px] tracking-wide leading-none"
        >
          Rides
        </Link>
        <nav className="hidden md:block ml-20">
          <ul className="flex flex-row gap-x-12">
            {navItems.map((navItem) => (
              <li
                key={navItem.title}
                className="text-neutral-300 hover:text-white transition-colors font-medium"
              >
                {navItem.isHashLink ? (
                  <HashLink smooth to={navItem.href}>
                    {navItem.title}
                  </HashLink>
                ) : (
                  <Link to={navItem.href}>{navItem.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="hidden md:flex flex-row gap-x-10">
        <li>
          <button className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium py-2 leading-none">
            Log In
          </button>
        </li>
        <li>
          <button className="font-semibold flex items-center justify-center px-3 bg-white text-black py-2 leading-none rounded-md border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150">
            Sign Up
          </button>
        </li>
      </ul>
      <div className="md:hidden">
        <NavMobile />
      </div>
    </header>
  );
}
