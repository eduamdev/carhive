import { LogoLink } from "./logoLink"
import { UserMenuButton } from "./user-menu-button"

export function SiteHeader() {
  return (
    <header className="flex h-full items-center justify-between">
      <LogoLink />
      <div className="inline-flex">
        <UserMenuButton />
      </div>
    </header>
  )
}
