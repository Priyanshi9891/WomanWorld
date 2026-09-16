import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SalonShowcase from "../components/home/SalonShowcase";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/home/Services";
import Offers from "../components/home/Offers";
import Branches from "../components/home/Branches";
import ImpactMatrix from "../components/home/ImpactMatrix";
import BeforeAfter from "../components/home/BeforeAfter";
import Gallery from "../components/home/Gallery";

import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Academic from "../components/home/Academic";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <SalonShowcase />
        <About />
        <Offers />
        <BeforeAfter />
        <WhyChooseUs />
        <Academic />
        <Gallery />
        
        <Reviews />
        <ImpactMatrix />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}