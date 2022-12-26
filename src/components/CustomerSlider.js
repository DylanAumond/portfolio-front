import React from "react";
import Slider from "react-slick";

export default function CustomerSlider({ customers }) {
  const settings = {
    infinite: true, // infinite loop
    speed: 2000, // speed between each slide
    slidesToShow: 4, // number of slides to show
    slidesToScroll: 1, // number of slides to scroll
    lazyload: true, // prevent from loading none display items
    autoplay: true,
    autoplaySpeed: 0,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {customers.map((customer, i) => {
          return (
            <div className="w-1/4" data-index={i} key={i}>
              <div
                className="w-16 h-16 md:w-20 md:h-20 m-auto bg-center bg-cover rounded-full mt-7"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${customer.logo})`,
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
