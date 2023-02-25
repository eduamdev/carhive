import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="flex flex-col gap-y-12 lg:gap-y-20">
      <SiteHeader />
      <main className="flex flex-col gap-y-28">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
