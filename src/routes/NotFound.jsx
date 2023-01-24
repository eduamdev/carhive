import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <ScrollRestoration />
      <section>
        <div className="relative h-[30rem]">
          <div
            style={{
              backgroundImage: "url(./assets/red-lights.jpg)",
            }}
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          />

          <div className="absolute top-10 left-0 right-0 ">
            <div className="flex flex-col items-center mx-auto max-w-3xl text-center gap-y-6">
              <span className="font-mono tracking-widest text-2xl text-red-400">
                404
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Uh oh! Looks like you are lost.
              </h1>
              <p className="big">
                It looks like the page you are looking for doesnt exist.
              </p>
              <Link
                to="/"
                className="mt-5 font-semibold w-full flex items-center justify-center md:w-56 bg-white text-slate-900 px-2 py-3 rounded-md text-xl border hover:bg-transparent hover:text-slate-100 hover:border-slate-100 transition-colors duration-150"
              >
                Go back home →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
