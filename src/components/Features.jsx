import { features } from "../data/features";

export function Features() {
  return (
    <section id="features" className="scroll-mt-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6 px-6 2xl:px-0">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide">
          Features
        </h2>
        <p className="text-xl leading-9">
          Book your car rental today and experience the ultimate in convenience
          and comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-20 px-6 2xl:px-0">
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start gap-y-7 border border-slate-900 p-10 rounded-2xl">
      <span className="text-neutral-400 stroke-current h-8 w-8">{icon}</span>
      <div>
        <h3 className="font-semibold mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
