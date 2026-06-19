"use client";
import { useState } from "react";
import CoffeeLoader from "@/components/loading/CoffeeLoader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <CoffeeLoader onDone={() => setLoaded(true)} duration={3200} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
