import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropDown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");

  const handleLangChange = e => {
    // get the value of the dropdown language
    const lang = e.target.value;
    // set the dropdown language
    setLanguage(lang);
    // change the i18n language variable
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