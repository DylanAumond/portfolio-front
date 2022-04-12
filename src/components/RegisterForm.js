import React, { useState } from "react";
import { register } from "../api";

export default function RegisterForm() {
  const initForm = {
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
    town: "",
    postalCode: "",
    street: "",
    country: "",
  };
  const [formData, setFormData] = useState(initForm);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password == formData.confirmPassword) {
      register(formData);
      setFormData(initForm);
    }
  };
  return (
    <div>
      <h2>RegisterForm</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center justify-around h-96"
      >
        <input
          type={"text"}
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"email"}
          name="mail"
          placeholder="Adresse e-mail"
          value={formData.mail}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"password"}
          name="password"
          placeholder="mot de passe"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"password"}
          name="confirmPassword"
          placeholder="confirmez mot de passe"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="postalCode"
          placeholder="code postal"
          value={formData.postalCode}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="town"
          placeholder="Ville"
          value={formData.town}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="street"
          placeholder="rue"
          value={formData.street}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="country"
          placeholder="pays"
          value={formData.country}
          onChange={(e) => handleChange(e)}
          className="w-96 border-b-2 border-black-light"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
