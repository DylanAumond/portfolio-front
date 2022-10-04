import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropDown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");

  const handleLangChange = e => {
    // set the dropdown language
    setLanguage(e);
    // change the i18n language variable
    i18n.changeLanguage(e);
  };

  return language === "fr" ?
    <div onClick={() => handleLangChange('en')}> fr </div>
    :
    <div onClick={() => handleLangChange('fr')}> en </div> 

};

export default LanguageDropDown;
