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
    <div>
      <Slider {...settings}>
        {customers.map((customer, i) => {
          return (
            <div className="w-32 h-32" data-index={i} key={i}>
              <div
                className="w-1/4 h-5/6 m-auto"
                style={{
                  backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
                }}
              ></div>
              <p>{customer.libelle}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
