import WhyChooseUs from "@/components/Home/WhyToChoose";






import PowerQualitySolutions from "@/components/Home/InPhase";
import HeroSection from "@/components/Home/Hero";

import FeatureSection from "@/components/Home/FeatureSection";
import ContactSection from "@/components/Home/Card";
import Banner from "@/components/Home/Banner";





export default function Page() {
  return (
    <div>
     <Banner/>
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <PowerQualitySolutions/>
      <ContactSection/>
      {/* <Footer/> */}
    </div>
  )
}