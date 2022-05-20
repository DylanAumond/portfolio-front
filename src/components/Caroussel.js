import React, { useEffect, useState } from "react";

export default function Caroussel({ images }) {
  /*const images = [
    "https://picsum.photos/id/1/1920/1080",
    "https://picsum.photos/id/15/1920/1080",
    "https://picsum.photos/1920/1080",
  ];*/
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
    <div className="w-full relative h-full">
      {images.map((image, i) => (
        <img
          key={i}
          src={`http://localhost:5000/public/images/${image}`}
          className={
            "w-full h-full " + (i === currentSlide ? "absolute" : "hidden")
          }
        />
      ))}
      <button
        className="absolute left-0 h-full w-2 bg-blue-500"
        onClick={() => displaySlide(currentSlide - 1)}
      >
        -
      </button>
      <button
        className="absolute right-0 h-full w-2 bg-red-500"
        onClick={() => displaySlide(currentSlide + 1)}
      >
        +
      </button>
    </div>
  );
}
