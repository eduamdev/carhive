import { Icons } from "./Icons";

export function Quote() {
  return (
    <div className="relative py-7 flex flex-col justify-center">
      <figure className="sm:self-end max-w-xl bg-neutral-900/80 p-9 rounded-md z-10 mx-4 sm:mr-7">
        <Icons.Quote className="mr-3 text-white fill-current h-10 w-10 inline-block align-text-bottom" />
        <blockquote
          cite="https://www.brainyquote.com/quotes/dale_evans_192172"
          className="inline-block"
        >
          <p className="text-xl leading-9 text-slate-300 !leading-7">
            It's the way you ride the trail that counts.
          </p>
        </blockquote>
        <figcaption className="mt-4 text-right font-mono italic tracking-widest">
          <p>— Dale Evans</p>
        </figcaption>
      </figure>
      <div className="absolute w-full h-full">
        <div
          className="w-full h-full opacity-90 rounded-xl"
          style={{
            background:
              'linear-gradient(rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.05) 5%, rgba(0, 0, 0, 0.85) 100%), url("./assets/timelapse-city-night.jpg") center center / cover no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}
