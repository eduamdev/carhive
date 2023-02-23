import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <ScrollRestoration />
      <section>
        <div className="relative h-[30rem]">
          <img
            src="./assets/images/red-lights.jpg"
            alt="red lights"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
            role="presentation"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 to-black/20"></div>
          <div className="absolute top-10 left-0 right-0 ">
            <div className="flex flex-col items-center mx-auto max-w-3xl text-center gap-y-6">
              <span className="tracking-widest text-xl text-red-400">404</span>
              <h1 className="text-4xl lg:text-5xl font-semibold">
                Uh oh! Looks like you are lost.
              </h1>
              <p className="text-xl leading-9">
                It looks like the page you are looking for doesnt exist.
              </p>
              <Link
                to="/"
                className="mt-3 font-semibold w-full flex items-center justify-center md:w-56 bg-white text-black px-2 py-[10px] rounded-md text-lg border hover:bg-transparent hover:text-white hover:border-white transition-colors duration-150"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
