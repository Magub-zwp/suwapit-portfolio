"use client";
import { useState } from "react";
import CoffeeLoader from "@/components/loading/CoffeeLoader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <CoffeeLoader onDone={() => setLoaded(true)} duration={3200} />}

      <main
        className="flex-1 flex items-center justify-center"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
      >
        <div className="text-center px-6">
          <h1 className="text-title font-serif text-dark mb-4">
            Suwapit Ponkul
          </h1>
          <p className="text-muted font-sans tracking-widest uppercase text-sm">
            Fullstack Developer — Portfolio coming soon
          </p>
        </div>
      </main>
    </>
  );
}
