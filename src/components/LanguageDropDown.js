import { useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";


const LanguageDropDown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");

  const handleLangChange = e => {
    // set the dropdown language
    setLanguage(e);
    // change the i18n language variable
    i18n.changeLanguage(e);
  };

  return language === "fr" ? (
    <div className=" cursor-pointer " onClick={() => handleLangChange("en")}>
      {" "}
      <img
        className="w-7 h-7"
        src={process.env.PUBLIC_URL + "/imgs/france.png"}
        alt="img"
      />{" "}
    </div>
  ) : (
    <div className=" cursor-pointer " onClick={() => handleLangChange("fr")}>
      {" "}
      <img
        className="w-7 h-7"
        src={process.env.PUBLIC_URL + "/imgs/united-kingdom.png"}
        alt="img"
      />{" "}
    </div>
  );
};

export default LanguageDropDown;
