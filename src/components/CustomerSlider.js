import React from "react";

export default function CustomerSlider({ customers }) {
  return (
    <div className="flex">
      {customers.map((customer) => {
        return (
          <div key={customer._id}>
            <p>{customer.libelle}</p>
          </div>
        );
      })}
    </div>
  );
}
