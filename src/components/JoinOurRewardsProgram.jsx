import { Icons } from "./Icons";

export function JoinOurRewardsProgram() {
  return (
    <section className="h-[26rem]">
      <div className="absolute left-0 bg-neutral-900 w-full h-[26rem] flex flex-col items-center justify-center text-center">
        <div className="max-w-prose px-6 2xl:px-0">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
            Join our rewards program
          </h2>
          <p className="text-xl leading-9 mt-6">
            It takes 30 seconds to register. Download the app and create an
            account today.
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
