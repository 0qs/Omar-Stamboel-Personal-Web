import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#000000" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Volunteer />
      <Contact />
    </main>
  );
}
