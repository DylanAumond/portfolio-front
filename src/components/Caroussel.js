import React, { useEffect, useState } from "react";

export default function Caroussel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const displaySlide = (newCurrentSlide) => {
    if (newCurrentSlide > images.length - 1) {
      return setCurrentSlide(0);
    } else if (newCurrentSlide < 0) {
      return setCurrentSlide(images.length - 1);
    } else {
      return setCurrentSlide(newCurrentSlide);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      displaySlide(currentSlide + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full flex h-96">
      {images.map((image, i) => (
        <img
          key={i}
          src={`http://localhost:5000/public/images/${image}`}
          className={
            "w-full "+
            (i === currentSlide ? "" : "hidden")
          }
        />
      ))}
      {/*<button
        className="absolute left-0 w-2 bg-blue-500"
        onClick={() => displaySlide(currentSlide - 1)}
      >
        -
      </button>
      <button
        className="absolute right-0 h-full w-2 bg-red-500 h-full"
        onClick={() => displaySlide(currentSlide + 1)}
      >
        +
      </button>*/}
    </div>
  );
}
