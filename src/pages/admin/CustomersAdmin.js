import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCustomer, getCustomers } from "../../api/customers";
import NavBar from "../../components/admin/NavBar";

export default function CustomersAdmin() {
  const { customers } = useSelector(state => state.customersReducer);
  const dispatch = useDispatch();

  // hydrate customers reducer on dispatch action
  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div className="flex">
      <NavBar />
      <div>
        <div className=" mt-8  grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {customers.map((customer, i) => {
            return (
              <div key={i} className="flex items-center ml-8 gap-4 mt-4">
                <div
                  className=" h-20 w-20 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${customer.logo})`,
                  }}
                ></div>
                <div>
                  <p>{customer.libelle}</p>
                  <button
                    onClick={() => dispatch(deleteCustomer(customer._id))}
                    className="bg-red p-1 text-white text-sm"
                  >
                    Delete
                  </button>
                  <Link
                    className="bg-orange-600 p-1 text-white text-sm"
                    to={`/admin/customers/${customer._id}`}
                  >
                    Update
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
