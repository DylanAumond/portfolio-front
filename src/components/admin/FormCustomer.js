import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCustomer, updateCustomer } from "../../api";

export default function FormCustomer({ editCustomer }) {
  const dispatch = useDispatch();
  const onEdit = () => {
    if (editCustomer != null) {
      return editCustomer;
    } else {
      return {
        libelle: "",
        logo: "",
      };
    }
  };
  const [initForm, setInitForm] = useState(onEdit);

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
        if (value[0] instanceof Blob) {
          formData.append(key, value[0], value[0].name);
        }
      } else {
        formData.append(key, value);
      }
    }
    if (editCustomer != null) {
      dispatch(updateCustomer(formData, customer._id));
    } else {
      dispatch(postCustomer(formData));
    }
  };
  return (
    <div className="ml-8 mt-28 w-1/2">
      <p>FormCustomer</p>
      <form
        className="flex flex-col w-full h-72 mt-4"
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
        {/*customer.logo ? (
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={{
              backgroundImage: `url(${URL.createObjectURL(customer.logo[0])})`,
            }}
          ></div>
        ) : (
          <p>No image upload yet</p>
        )*/}

        <button type="submit" className=" bg-green-400 w-48 m-8 rounded-lg">
          {editCustomer ? "update customer" : "add customer"}
        </button>
      </form>
    </div>
  );
}
