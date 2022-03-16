import React from "react";

export default function CustomerSlider({ customers }) {
  return (
    <div className="flex justify-around">
      {customers.map((customer) => {
        return (
          <div
            className="overflow-hidden w-32 h-32 bg-cover"
            key={customer._id}
            style={{
              backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
            }}
          >
            <p>{customer.libelle}</p>
          </div>
        );
      })}
    </div>
  );
}
