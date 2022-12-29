import Service from "./Service";

export default function Services() {
  return (
    <section id="services">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Services</h2>
        <p className="big">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-20">
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
      </div>
    </section>
  );
}
