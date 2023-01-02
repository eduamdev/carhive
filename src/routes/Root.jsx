import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Features from "../components/Features";
import FeaturedVehicles from "../components/FeaturedVehicles";
import Faqs from "../components/Faqs";
import Layout from "../components/Layout";
import GetFirstGiftToday from "../components/GetFirstGiftToday";
import { ScrollRestoration } from "react-router-dom";

function Root() {
  return (
    <Layout>
      <ScrollRestoration />
      <Hero></Hero>
      <Quote></Quote>
      <Features></Features>
      <GetFirstGiftToday />
      <FeaturedVehicles />
      <Faqs></Faqs>
    </Layout>
  );
}

export default Root;
