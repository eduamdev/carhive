import { Link } from "react-router-dom";
import { Icons } from "./Icons";

export function Hero() {
  return (
    <section>
      <div className="relative flex flex-row items-center pt-6 pb-8">
        <div className="absolute w-full h-full">
          <div
            style={{
              background:
                'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%), url("./assets/hero.jpg") center center / cover no-repeat',
            }}
            className="invisible lg:visible w-full h-full bg-cover bg-center bg-no-repeat"
          />
        </div>
        <div className="flex flex-col gap-y-8 z-10 w-full">
          <h1 className="text-4xl md:text-6xl font-bold lg:max-w-4xl !leading-tight">
            Your One-Stop Destination for Car Rentals
          </h1>
          <p className="text-xl leading-9 lg:max-w-2xl text-slate-300">
            Whether you're looking for a reliable vehicle for a business trip, a
            spacious SUV for a family vacation, or a luxury car for a special
            occasion, we have the perfect vehicle for you.
          </p>
          <Link
            to="/vehicles"
            className="group mt-3 font-semibold w-full flex items-center justify-center md:w-56 bg-white text-black px-2 py-3 rounded-md text-lg border hover:bg-transparent hover:text-white hover:border-white transition-all duration-150"
          >
            Find your ride{" "}
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <p className="font-semibold mb-8 text-center lg:text-left">
          As featured in
        </p>
        <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-between">
          <li className="flex">
            <Icons.Forbes />
          </li>
          <li className="flex">
            <Icons.TechCrunch />
          </li>
          <li className="flex">
            <Icons.Wired />
          </li>
          <li className="flex hidden xl:block">
            <Icons.CNN />
          </li>
          <li className="flex">
            <Icons.BBC />
          </li>
          <li className="flex">
            <Icons.CBS />
          </li>
          <li className="flex">
            <Icons.FastCompany />
          </li>
          <li className="flex hidden xl:block">
            <Icons.Huffpost />
          </li>
        </ul>
      </div>
    </section>
  );
}
