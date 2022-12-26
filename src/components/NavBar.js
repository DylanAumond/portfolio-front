import React from "react";
import { useDispatch } from "react-redux";
import { CONTACT } from "../constant/Modal";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "./LanguageDropDown.js";

export default function NavBar() {
  const { t } = useTranslation("NavBar");

  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-black bg-white  flex items-center justify-around sm:justify-between fixed z-10 top-0 xl:px-16 md:px-8 px-0">
      <img src={process.env.PUBLIC_URL + "/imgs/dadev_text.svg"} alt="logo" className="h-32 w-32"/>

      <nav className="flex items-center gap-4">
        <button
          className="flex items-center bg-red text-white py-2 px-8 rounded"
          onClick={() => dispatch({ type: CONTACT })}
        >
          {t("Contact")}
        </button>

        <LanguageDropDown />
      </nav>
    </div>
  );
}
