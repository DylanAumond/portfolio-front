import React, { useState } from "react";
import { register } from "../api";

export default function RegisterForm() {
  const initForm = {
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initForm);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      register(formData);
      setFormData(initForm);
    }
  };
  return (
    <div className="mt-8">
      <h2 className="ml-24">Créer un compte</h2>
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
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />
        <input
          type={"text"}
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />
        <input
          type={"email"}
          name="mail"
          placeholder="Adresse e-mail"
          value={formData.mail}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />
        <input
          type={"password"}
          name="password"
          placeholder="mot de passe"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />
        <input
          type={"password"}
          name="confirmPassword"
          placeholder="confirmez mot de passe"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />
        <button type="submit" className="bg-gray-900 text-white w-72 lg:w-96">
          Enregistrement
        </button>
      </form>
    </div>
  );
}
