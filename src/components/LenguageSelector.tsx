import React, { useState } from "react";
import i18n from "i18next";
import espanaImg from "../../public/flags/espana.png";

const LanguageSelector = () => {
  const handleChange = (event: any): void => {
    const language = event.target.value;
    localStorage.setItem("language", language);
    window.location.search = `?lang=${language}`;
    console.log(language);
  };

  return (
    <select
      className="w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={handleChange}
    >
      <option value="es">🇪🇸</option>
      <option value="en">🇬🇧</option>
      <option value="de">🇩🇪</option>
    </select>
  );
};
export default LanguageSelector;
