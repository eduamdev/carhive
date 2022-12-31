import Service from "./Service";
import { ReactComponent as RibbonSVG } from "./../assets/icons/ribbon.svg";
import { ReactComponent as LeafSVG } from "./../assets/icons/leaf.svg";
import { ReactComponent as PhoneSVG } from "./../assets/icons/phone.svg";
import { ReactComponent as GlobeSVG } from "./../assets/icons/globe.svg";
import { ReactComponent as ShieldSVG } from "./../assets/icons/shield.svg";
import { ReactComponent as HelpSVG } from "./../assets/icons/help.svg";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-10">
      <div className="flex flex-col items-center text-center mx-auto max-w-prose gap-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Services</h2>
        <p className="big">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-20">
        <Service icon={<ShieldSVG />} />
        <Service icon={<LeafSVG />} />
        <Service icon={<RibbonSVG />} />
        <Service icon={<GlobeSVG />} />
        <Service icon={<PhoneSVG />} />
        <Service icon={<HelpSVG />} />
      </div>
    </section>
  );
}
