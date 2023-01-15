export function Quote() {
  return (
    <div className="relative py-7 flex flex-col justify-center">
      <figure className="self-end max-w-xl bg-neutral-900/80 p-9 rounded-md z-10 mr-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          className="text-neutral-100 fill-current"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote cite="https://www.brainyquote.com/quotes/dale_evans_192172">
          <p className="big">It's the way you ride the trail that counts.</p>
        </blockquote>
        <figcaption className="mt-4 text-right">— Dale Evans</figcaption>
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
