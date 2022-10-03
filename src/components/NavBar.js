import React from "react";
import { useDispatch } from "react-redux";
import { CONTACT } from "../constant/Modal";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "./LanguageDropDown.js";

export default function NavBar() {
  const { t } = useTranslation("NavBar");

  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-black bg-white  flex items-center justify-between fixed top-0 px-8">
      <h1>DADEV</h1>
      <nav>
        <button className="mr-4" onClick={() => dispatch({ type: CONTACT })}>
          {t("Contact")}
        </button>

        <LanguageDropDown />
      </nav>
    </div>
  );
}
