import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCustomer, updateCustomer } from "../../api/customers";

export default function FormCustomer({ data }) {
  const dispatch = useDispatch();

  // default customer value
  const initForm = {
    libelle: "",
    logo: "",
    url: "",
  };
  // create a form data object
  const formData = new FormData();

  // set the customer data
  const [customer, setCustomer] = useState(
    data !== undefined ? data : initForm
  );

  // handle the change
  const handleChange = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // handle files upload
  const handleFiles = e => {
    setCustomer({ ...customer, logo: e.target.files });
  };

  const handleSubmit = e => {
    // prevent from refresh
    e.preventDefault();
    // for each key in customer
    for (const [key, value] of Object.entries(customer)) {
      // if key name is logo
      if (key === "logo") {
        // append picture name to the customer logo field
        if (value[0] instanceof Blob) {
          formData.append(key, value[0], value[0].name);
        }
      } else {
        // append value to the customer
        formData.append(key, value);
      }
    }
    // if data edit the current customer
    if (data !== undefined) {
      dispatch(updateCustomer(formData, customer._id));
    }
    // else create a new customer
    else {
      dispatch(postCustomer(formData));
    }
  };

  return (
    <div className="ml-8  w-1/2">
      <h1>{data !== undefined ? "Edit" : "Add"} a customer</h1>
      <form
        className="flex flex-col w-full gap-6 "
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor="libelle">Libelle</label>
        <input
          type={"text"}
          placeholder="libelle"
          className="w-72 border-y-2"
          name="libelle"
          value={customer.libelle}
          onChange={e => handleChange(e)}
          required={true}
        />

        <label htmlFor="url">web site url</label>
        <input
          type={"text"}
          placeholder="url"
          className="w-72 border-y-2 "
          name="url"
          value={customer.url}
          onChange={e => handleChange(e)}
        />

        <input
          className="my-4"
          type={"file"}
          name="logo"
          onInput={e => handleFiles(e)}
          accept={"image/*"}
          required={data !== undefined ? false : true}
        />
        {customer.logo !== "" ? (
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={
              customer.logo[0] instanceof Blob
                ? {
                    backgroundImage: `url(${URL.createObjectURL(
                      customer.logo[0]
                    )})`,
                  }
                : {
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${customer.logo})`,
                  }
            }
          ></div>
        ) : (
          <p>No image upload yet</p>
        )}

        <button type="submit" className=" bg-green-400 w-48 m-8 rounded-lg">
          {data !== undefined ? "update customer" : "add customer"}
        </button>
      </form>
    </div>
  );
}
