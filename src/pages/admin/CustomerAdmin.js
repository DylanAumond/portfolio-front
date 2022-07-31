import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { getCustomer } from "../../api/customers";
import FormCustomer from "../../components/admin/FormCustomer";

export default function CustomerAdmin() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const {customer} = useSelector((state) => state.customersReducer);
  useEffect(() => {
    dispatch(getCustomer(id));
  }, [dispatch,id]);

  if (customer === undefined) {
    return (<p>loading ...</p>)
  }
  return (
    <div className="flex h-96">
      <FormCustomer data={customer} />
      {customer ? (
        <div className="mt-28">
          <h2>{customer.libelle}</h2>
          <div
            className="h-32 w-32 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${customer.logo})`,
            }}
          ></div>
        </div>
      ) : (
        <p>le client n'existe pas</p>
      )}
    </div>
  );
}
