import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CONTACT } from "../constant/Modal";
import { useTranslation } from 'react-i18next';
import LanguageDropDown from "./LanguageDropDown.js"


export default function NavBar() {
  const { t } = useTranslation("NavBar");

  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-white bg-gray-900  flex items-center justify-between fixed top-0">
      <h1>DA</h1>
      <nav>

        <Link to={"/"} className="">
          {t('Home')}
        </Link>

        <Link to={"/projects"} className="mx-4">
          {t('Projects')}
        </Link>

        <button className="mr-4" onClick={() => dispatch({ type: CONTACT })}>
          {t('Contact')}
        </button>

        <LanguageDropDown />
        
      </nav>
    </div>
  );
}
