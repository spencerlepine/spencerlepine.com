import SEOHeader from "@/components/SEOHeader";
import LandingHero from "@/components/LandingHero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <SEOHeader />
      <LandingHero />
      <About />
      <Portfolio />
      <ContactForm />
    </>
  );
}
