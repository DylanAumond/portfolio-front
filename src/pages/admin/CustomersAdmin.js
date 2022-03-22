import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getCustomers } from "../../api";
import FormCustomer from "../../components/admin/FormCustomer";

export default function CustomersAdmin() {
  const customers = useSelector((state) => state.customersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div>
      <FormCustomer />
      <div className=" grid grid-cols-4">
        {customers.map((customer, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className=" h-20 w-20 bg-center bg-cover"
                style={{
                  backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
                }}
              ></div>
              <div>
                <p>{customer.libelle}</p>
                <button
                  onClick={() => dispatch(deleteCustomer(customer._id))}
                  className="bg-red-600 p-1 text-white text-sm"
                >
                  Delete
                </button>
                <button className="bg-orange-600 p-1 text-white text-sm">
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
