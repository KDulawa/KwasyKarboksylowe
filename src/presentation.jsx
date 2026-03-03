import {useEffect, useRef, useState } from "react";

import Slide1 from "./slide1.jsx";
import Slide2 from "./slide2.jsx";

export default function Presentation() {
  const slides = [Slide1, Slide2];
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  }, [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault();
        nextSlide();
      }
      if (e.code === "ArrowUp" || e.key === "Shift" || e.key === "w" || e.key === "W") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);


  return (
    <div ref={containerRef} className="presentation">
      {slides.map((Slide, i) => (
        <section
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
        >
            <Slide />
        </section>
    ))}
    </div>
  );
}