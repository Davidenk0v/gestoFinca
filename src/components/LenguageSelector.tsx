import React, { useState } from "react";
import i18n from "i18next";
import espanaImg from "../../public/flags/espana.png";

const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>("en");

  const handleChange = (event: any): void => {
    console.log(event.target.value);
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className="w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={language}
      onChange={handleChange}
    >
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
      <option value="de">🇩🇪</option>
    </select>
  );
};
export default LanguageSelector;
