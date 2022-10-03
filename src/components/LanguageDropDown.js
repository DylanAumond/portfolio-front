import { useState } from "react";
import { useTranslation } from "react-i18next";

import { IoLanguage, IoCheckmarkDoneOutline } from "react-icons/io5";

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
    <select
      className="cursor-pointer w-12"
      onChange={handleLangChange}
      value={language}
    >
      <option value="fr">
        <span
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/DADev.svg)`,
          }}
        ></span>
        FR
      </option>
      <option value="en">
        <span></span>
        EN
      </option>
    </select>
  );
};

export default LanguageDropDown;
