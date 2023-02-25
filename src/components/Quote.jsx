import { Icons } from "./Icons";

export function Quote() {
  return (
    <div className="relative w-full py-7 flex flex-col justify-center max-w-screen-xl mx-auto">
      <figure className="sm:self-end max-w-xl bg-neutral-900/80 p-9 rounded-md z-10 mx-4 sm:mr-7">
        <Icons.Quote className="mr-3 text-white fill-current h-10 w-10 inline-block align-text-bottom" />
        <blockquote
          cite="https://www.brainyquote.com/quotes/dale_evans_192172"
          className="inline-block"
        >
          <p className="text-xl leading-8 text-white">
            It's the way you ride the trail that counts.
          </p>
        </blockquote>
        <figcaption className="mt-4 text-right italic tracking-wider">
          <p>— Dale Evans</p>
        </figcaption>
      </figure>
      <img
        src="./assets/images/timelapse-city-night.jpg"
        alt="asas"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
        role="presentation"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-black/20"></div>
    </div>
  );
}
