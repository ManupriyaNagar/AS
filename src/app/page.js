import Head from 'next/head'
import WhyChooseUs from "@/components/Home/WhyToChoose";
import PowerQualitySolutions from "@/components/Home/InPhase";
import HeroSection from "@/components/Home/Hero";
import FeatureSection from "@/components/Home/FeatureSection";
import ContactSection from "@/components/Home/Card";
import Banner from "@/components/Home/Banner";

export default function Page() {
  return (
    <>
      <Head>
        {Array.from({ length: 100 }, (_, i) => (
          <meta
            key={i}
            name={`active-sine-${i + 1}`}
            content="Active Sign"
          />
        ))}
      </Head>
      <div >
        <Banner />
        <HeroSection />
        <FeatureSection />
        <WhyChooseUs />
        <PowerQualitySolutions />
        <ContactSection />
        {/* <Footer/> */}
      </div>
    </>
  )
}
