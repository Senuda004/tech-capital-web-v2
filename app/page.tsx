import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ClientCompanies from "@/components/sections/ClientCompanies";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      {/* <Projects /> */}
      <Testimonials />
      {/* <ClientCompanies /> */}
      <CTA />
      <Contact />
    </>
  );
}
