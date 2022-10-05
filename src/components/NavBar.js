import React from "react";
import { useDispatch } from "react-redux";
import { CONTACT } from "../constant/Modal";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "./LanguageDropDown.js";

import { MdOutlineContactSupport } from "react-icons/md";

export default function NavBar() {
  const { t } = useTranslation("NavBar");

  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-black bg-white  flex items-center justify-between fixed z-10 top-0 px-8">
      <h1>
        DA<span className="text-red">DEV</span>
      </h1>
      <nav className="flex justify-between items-center">
        <button
          className="mr-8 flex items-center"
          onClick={() => dispatch({ type: CONTACT })}
        >
          {t("Contact")} <MdOutlineContactSupport className="ml-1" />
        </button>

        <LanguageDropDown />
      </nav>
    </div>
  );
}
