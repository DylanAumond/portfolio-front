import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../api";
import { REGISTER } from "../constant/Modal";

export default function LoginForm() {
  const dispatch = useDispatch();
  const initForm = { mail: "", password: "" };
  const [formData, setFormData] = useState(initForm);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    setFormData(initForm);
  };
  return (
    <div>
      <h2 className="ml-24">Se connecter</h2>
      <form
        className="flex flex-col items-center h-96 justify-around"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type={"email"}
          name="mail"
          placeholder="e-mail"
          value={formData.mail}
          onChange={(e) => handleChange(e)}
          className=" w-72 lg:w-96 border-b-2 border-black-light"
        />
        <input
          type={"password"}
          name="password"
          placeholder="mot de passe"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96  border-b-2 border-black-light"
        />
        <p
          onClick={() => dispatch({ type: REGISTER })}
          className="cursor-pointer"
        >
          Pas encore de compte ? Créer un compte
        </p>
        <button type="submit" className="bg-gray-900 text-white w-72 lg:w-96">
          connexion
        </button>
      </form>
    </div>
  );
}
