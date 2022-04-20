import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCustomer, getCustomers } from "../../api";
import FormCustomer from "../../components/admin/FormCustomer";

export default function CustomerAdmin() {
  const location = useLocation();
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customersReducer);
  const customer = customers.find(
    (customer) => customer._id === location.state._id
  );
  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  return (
    <div className="flex h-96">
      <FormCustomer editCustomer={customer} />
      {customer ? (
        <div className="mt-28">
          <h2>{customer.libelle}</h2>
          <div
            className="h-32 w-32 bg-cover bg-center"
            style={{
              backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
            }}
          ></div>
        </div>
      ) : (
        <p>le client n'existe pas</p>
      )}
    </div>
  );
}
