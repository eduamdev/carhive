import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { Features } from "../components/Features";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { Faqs } from "../components/Faqs";
import { GetRewards } from "../components/GetRewards";
import { ScrollRestoration } from "react-router-dom";

export function Home() {
  return (
    <>
      <ScrollRestoration />
      <Hero />
      <Quote />
      <Features />
      <GetRewards />
      <FeaturedVehicles />
      <Faqs></Faqs>
    </>
  );
}
