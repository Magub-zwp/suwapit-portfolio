"use client";
import { useEffect, useState } from "react";
import styles from "./CoffeeLoader.module.css";

interface Props {
  onDone?: () => void;
  /** How long (ms) before the loader fades out. Default: 3000 */
  duration?: number;
}

export default function CoffeeLoader({ onDone, duration = 3000 }: Props) {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden]  = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true),  duration - 500);
    const t2 = setTimeout(() => { setHidden(true); onDone?.(); }, duration);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [duration, onDone]);

  if (hidden) return null;

  return (
    <div className={`${styles.overlay} ${fading ? styles.fading : ""}`}>
      <div className={styles.machine}>

        {/* Steam wisps */}
        <div className={styles.steams}>
          <span className={`${styles.steam} ${styles.s1}`} />
          <span className={`${styles.steam} ${styles.s2}`} />
          <span className={`${styles.steam} ${styles.s3}`} />
        </div>

        {/* Machine body */}
        <div className={styles.body}>
          <div className={styles.controls}>
            <div className={styles.btnLight} />
            <div className={styles.btnDark}  />
          </div>
          <div className={styles.display}>
            <div className={styles.displayBar} />
          </div>
        </div>

        {/* Group head + portafilter */}
        <div className={styles.groupHead}>
          <div className={styles.portafilter} />
        </div>

        {/* Coffee streams */}
        <div className={styles.streams}>
          <div className={styles.stream} />
          <div className={styles.stream} />
        </div>

        {/* Cup */}
        <div className={styles.cupWrap}>
          <div className={styles.cup}>
            <div className={styles.liquid} />
          </div>
          <div className={styles.saucer} />
        </div>

      </div>

      <p className={styles.name}>Suwapit Ponkul</p>
      <p className={styles.tagline}>Brewing your experience&hellip;</p>
    </div>
  );
}
