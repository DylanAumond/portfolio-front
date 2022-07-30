import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { register } from "../api";

export default function RegisterForm() {
  const { t } = useTranslation('RegisterForm');

  // default values of registerForm
  const initForm = {
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: "",
  };

  // get/set values registerForm
  const [formData, setFormData] = useState(initForm);

  // handle change event from registerForm
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    // prevent from refreshing
    e.preventDefault();
    // check if password and confirmPassword are equal
    if (formData.password === formData.confirmPassword) {
      register(formData);
      setFormData(initForm);
    }
  };
  return (
    <div className="mt-8">
      <h2 className="ml-24">{t('register')}</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center justify-around h-96"
      >
        <input
          type={"text"}
          name="firstName"
          placeholder={t('FirstName')}
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />

        <input
          type={"text"}
          name="lastName"
          placeholder={t('LastName')}
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />

        <input
          type={"email"}
          name="mail"
          placeholder="E-mail"
          value={formData.mail}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />

        <input
          type={"password"}
          name="password"
          placeholder={t('Password')}
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />

        <input
          type={"password"}
          name="confirmPassword"
          placeholder={t('ConfirmPassword')}
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96 border-b-2 border-black-light"
        />

        <button type="submit" className="bg-gray-900 text-white w-72 lg:w-96">
          {t('Register')}
        </button>

      </form>
    </div>
  );
}
