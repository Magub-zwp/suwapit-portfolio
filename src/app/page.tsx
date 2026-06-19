"use client";
import { useState } from "react";
import CoffeeLoader from "@/components/loading/CoffeeLoader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <CoffeeLoader onDone={() => setLoaded(true)} duration={3200} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Hero />
        <About />
      </div>
    </>
  );
}
