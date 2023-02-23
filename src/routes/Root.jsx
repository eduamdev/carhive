import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col px-6 2xl:px-0 gap-y-14 lg:gap-y-20">
      <SiteHeader />
      <main className="flex flex-col gap-y-28">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
