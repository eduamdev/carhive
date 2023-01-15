import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col px-6 2xl:px-0 gap-y-16">
      <Header />
      <main className="flex flex-col gap-y-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
