import React, { useState } from "react";
import { postCustomer } from "../../api";

export default function FormCustomer() {
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
        console.log(value[0]);
        formData.append(key, value[0], value[0].name);
      } else {
        formData.append(key, value);
      }
    }
    postCustomer(formData);
  };
  return (
    <div>
      <p>FormCustomer</p>
      <form className="flex flex-col w-96" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="libelle">Libelle</label>
        <input
          type={"text"}
          placeholder="libelle"
          name="libelle"
          value={customer.libelle}
          onChange={(e) => handleChange(e)}
        />
        <input
          type={"file"}
          name="logo"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
}
