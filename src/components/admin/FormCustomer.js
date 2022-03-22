import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCustomer } from "../../api";

export default function FormCustomer() {
  const dispatch = useDispatch();
  const initForm = {
    libelle: "",
    logo: "",
  };

  const formData = new FormData();

  const [customer, setCustomer] = useState(initForm);
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setCustomer({ ...customer, logo: e.target.files });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(customer)) {
      if (key === "logo") {
        formData.append(key, value[0], value[0].name);
      } else {
        formData.append(key, value);
      }
    }
    dispatch(postCustomer(formData));
  };
  return (
    <div className="ml-8 mt-28 w-1/2">
      <p>FormCustomer</p>
      <form
        className="flex flex-col w-full h-48 mt-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="libelle">Libelle</label>
        <input
          type={"text"}
          placeholder="libelle"
          className="w-72 "
          name="libelle"
          value={customer.libelle}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="mt-4"
          type={"file"}
          name="logo"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        <button type="submit" className=" bg-green-400 w-48 m-8 rounded-lg">
          add customer
        </button>
      </form>
    </div>
  );
}
