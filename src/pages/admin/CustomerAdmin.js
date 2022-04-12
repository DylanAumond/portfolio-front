import React from "react";
import { useLocation } from "react-router-dom";
import FormCustomer from "../../components/admin/FormCustomer";

export default function CustomerAdmin() {
  const location = useLocation();
  const customer = location.state;
  return (
    <div className="flex h-96">
      <FormCustomer editCustomer={customer} />
      <div className="mt-28">
        <h2>{customer.libelle}</h2>
        <div
          className="h-32 w-32 bg-cover bg-center"
          style={{
            backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
          }}
        ></div>
      </div>
    </div>
  );
}
