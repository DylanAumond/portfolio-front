import React, { useEffect, useState } from "react";

export default function Caroussel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // get the value of the next slide
  const displaySlide = newCurrentSlide => {
    if (newCurrentSlide > images.length - 1) {
      return setCurrentSlide(0);
    } else if (newCurrentSlide < 0) {
      return setCurrentSlide(images.length - 1);
    } else {
      return setCurrentSlide(newCurrentSlide);
    }
  };
  useEffect(() => {
    // every interval change the current slide
    const interval = setInterval(() => {
      // change the current slide
      displaySlide(currentSlide + 1);
    }, 2500);
    // clear the interval
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full h-48 sm:h-480 flex overflow-hidden">
      {/* for each image create a new slide */}
      {images.map((image, i) => (
        <div
          key={i}
          className={
            "h-full  min-w-full bg-no-repeat bg-contain bg-center " +
            (i === currentSlide ? " order-0 " : " order-1")
          }
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_API_URL + "/public/images/" + image
            })`,
          }}
        ></div>
      ))}
      {/*
      *<img
          key={i}
          src={`http://localhost:5000/public/images/${image}`}
          className={
            "h-full w-auto"+
            (i === currentSlide ? "" : "")
          }
        />*
      <button
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
