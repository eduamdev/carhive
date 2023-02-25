import { Icons } from "./Icons";

export function GetRewards() {
  return (
    <section className="h-[26rem]">
      <div className="px-6 absolute left-0 bg-neutral-900 w-full h-[26rem] flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl px-6 2xl:px-0">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
            Start earning rewards today
          </h2>
          <p className="text-lg leading-9 mt-6">
            Join our exclusive car rental rewards program! Registering is quick
            and easy, just download our app and create an account. As a member,
            you'll enjoy exclusive benefits and perks every time you rent a car
            with us.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              aria-label="Download on the App Store"
              className="rounded-lg transition-colors bg-white text-gray-900 hover:bg-gray-50"
              href="/#"
            >
              <Icons.AppStore />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
