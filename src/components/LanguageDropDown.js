import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropDown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");

  const handleLangChange = e => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select style={{backgroundColor: 'black'}} className="cursor-pointer"  onChange={handleLangChange} value={language}>
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageDropDown;