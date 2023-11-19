import AboutUs from "@/components/AboutUs";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Industries />
      <Footer />
    </>
  );
}
