import React from "react";
import Slider from "react-slick";

export default function CustomerSlider({ customers }) {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyload: true,
    autoplay: true,
    autoplaySpeed: 0,
  };
  return (
    <div className=" overflow-hidden">
      <Slider {...settings}>
        {customers.map((customer, i) => {
          return (
            <div className="w-1/4" data-index={i} key={i}>
              <div
                className="w-16 h-16 md:w-32 md:h-32 m-auto bg-center bg-cover"
                style={{
                  backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
                }}
              ></div>
              <p className=" text-xs">{customer.libelle}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
