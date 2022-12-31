export default function Quote() {
  return (
    <div className="relative py-7 flex flex-col justify-center">
      <figure className="self-end max-w-xl bg-neutral-900/80 p-9 rounded-md z-10 mr-7">
        <blockquote cite="https://www.goodreads.com/quotes/7877161-vehicles-are-one-of-the-best-modes-of-transportation-relationships">
          <p className="big">
            Vehicles are one of the best modes of transportation. Relationships
            are one of the best vehicles of transformation.
          </p>
        </blockquote>
        <figcaption className="mt-4 text-right">— Kate McGahan</figcaption>
      </figure>
      <div className="absolute w-full h-full">
        <div
          className="w-full h-full opacity-90 rounded-xl"
          style={{
            background:
              'linear-gradient(rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.05) 5%, rgba(0, 0, 0, 0.85) 100%), url("https://images.unsplash.com/photo-1551253666-2ea5689ef00c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2077&q=80") center center / cover no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}