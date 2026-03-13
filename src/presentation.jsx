import {useEffect, useRef, useState } from "react";

import Slide1 from "./slide1.jsx";
import Slide2 from "./slide2.jsx";
import Slide3 from "./slide3.jsx";
import Slide4 from "./slide4.jsx";
import Slide5 from "./slide5.jsx";
import Slide6 from "./slide6.jsx";
import LastSlide from "./lastslide.jsx";

export default function Presentation() {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, LastSlide];
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };


  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault();
        nextSlide();
      }
      if (e.code === "ArrowUp" || e.key === "w" || e.key === "W") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const touchStartY = useRef(0);


  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;

      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="presentation"
      style={{
        transform: `translateY(-${index * 100}vh)`,
        transition: "transform 0.6s ease"
      }}
    >
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