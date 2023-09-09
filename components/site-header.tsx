import Link from 'next/link';

export const navItems = [{ _key: 'nav-i-01', name: 'Vehicles', url: '#' }];

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto h-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
        <div className="flex h-full items-center justify-between">
          <p className="font-semibold">Car Dealer</p>
          <nav>
            <div>Account</div>
          </nav>
        </div>
      </div>
    </header>
  );
}
