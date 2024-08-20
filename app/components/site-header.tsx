import { UserMenuButton } from './user-menu-button';
import { LogoLink } from './logoLink';

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <LogoLink />
      <div className="inline-flex">
        <UserMenuButton />
      </div>
    </header>
  );
}
