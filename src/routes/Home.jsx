import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Features from "../components/Features";
import FeaturedVehicles from "../components/FeaturedVehicles";
import Faqs from "../components/Faqs";
import GetFirstGiftToday from "../components/GetFirstGiftToday";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <>
      <ScrollRestoration />
      <Hero></Hero>
      <Quote></Quote>
      <Features></Features>
      <GetFirstGiftToday />
      <FeaturedVehicles />
      <Faqs></Faqs>
    </>
  );
}

export default Home;
