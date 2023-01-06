// import FeatureCard from "./FeatureCard";
import { ReactComponent as RibbonSVG } from "./../assets/icons/ribbon.svg";
import { ReactComponent as LeafSVG } from "./../assets/icons/leaf.svg";
import { ReactComponent as PhoneSVG } from "./../assets/icons/phone.svg";
import { ReactComponent as GlobeSVG } from "./../assets/icons/globe.svg";
import { ReactComponent as ShieldSVG } from "./../assets/icons/shield.svg";
import { ReactComponent as HelpSVG } from "./../assets/icons/help.svg";

const features = [
  {
    key: 1,
    icon: <ShieldSVG />,
    title: "Security, from start to finish",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    key: 2,
    icon: <LeafSVG />,
    title: "Eco-Friendly Driving Options",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    key: 3,
    icon: <RibbonSVG />,
    title: "Awarded for America's Best Customer Service 2022",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    key: 4,
    icon: <GlobeSVG />,
    title: "20,000 Pickup Locations Worldwide",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    key: 5,
    icon: <PhoneSVG />,
    title: "iOS App",
    text: "Compare prices, make vehicle reservations and more wherever you are.",
  },
  {
    key: 6,
    icon: <HelpSVG />,
    title: "24/7 Road Assistence",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-10">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Features</h2>
        <p className="big">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-20">
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
    <div className="flex flex-col items-start gap-y-7 border border-slate-900 p-9 rounded-2xl">
      <span className="text-neutral-400 stroke-current h-8 w-8">{icon}</span>
      <div>
        <h3 className="font-bold mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
