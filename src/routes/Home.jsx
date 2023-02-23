import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { Features } from "../components/Features";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { Faqs } from "../components/Faqs";
import { JoinOurRewardsProgram } from "../components/JoinOurRewardsProgram";
import { ScrollRestoration } from "react-router-dom";

export function Home() {
  return (
    <>
      <ScrollRestoration />
      <Hero />
      <Quote />
      <Features />
      <JoinOurRewardsProgram />
      <FeaturedVehicles />
      <Faqs></Faqs>
    </>
  );
}
