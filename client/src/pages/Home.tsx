import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Smooth scroll function
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Handle anchor links for initial load
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => scrollToElement(hash), 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="font-sans text-primary">
      <Navbar scrollToElement={scrollToElement} />
      <main>
        <Hero scrollToElement={scrollToElement} />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer scrollToElement={scrollToElement} />
    </div>
  );
}
