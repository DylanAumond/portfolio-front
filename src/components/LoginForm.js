import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../api/user";
import { REGISTER } from "../constant/Modal";

export default function LoginForm() {
  const dispatch = useDispatch();

  // import translation from LoginForm
  const { t } = useTranslation('LoginForm');

  // initial values of the login form
  const initForm = { mail: "", password: "" };

  // values of the login form
  const [formData, setFormData] = useState(initForm);

  // handle change of the login form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    // reset the form data after the login
    setFormData(initForm);
  };
  
  return (
    <div className="mt-8">
      <h2 className="ml-24">{t('SignIn')}</h2>
      <p>Fonctionnalité pas encore accessible</p>
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
          placeholder={t('Password')}
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-72 lg:w-96  border-b-2 border-black-light"
        />
        {/*<p
          onClick={() => dispatch({ type: REGISTER })}
          className="cursor-pointer"
        >
          Pas encore de compte ? Créer un compte
        </p>*/}
        <button type="submit" className="bg-gray-900 text-white w-72 lg:w-96">
          {t('Login')}
        </button>
      </form>
    </div>
  );
}
