import React, { use, useEffect, useRef, useState } from "react";
import i18n from "i18next";
import espanaImg from "../../public/flags/espana.png";
import type { PropertyManagementData } from "../utils/types";

const LanguageSelector = () => {
  const es = useRef(null);
  const en = useRef(null);
  const de = useRef(null);

  const handleChange = (event: any): void => {
    const language = event.target.value;
    localStorage.setItem("lang", language);
    window.location.search = `?lang=${language}`;
    console.log(language);
  };

  const handleSelectedLanguage = () => {
    const language = localStorage.getItem("lang") || "es";
    if (language === "en") {
      en.current.selected = true;
      de.current.selected = false;
      es.current.selected = false;
    } else if (language === "de") {
      de.current.selected = true;
      en.current.selected = false;
      es.current.selected = false;
    } else {
      es.current.selected = true;
      en.current.selected = false;
      de.current.selected = false;
    }
  };

  useEffect(() => {
    handleSelectedLanguage();
  }, []);

  return (
    <select
      className="w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={handleChange}
    >
      <option ref={es} value="es">
        🇪🇸
      </option>
      <option ref={en} value="en">
        🇬🇧
      </option>
      <option ref={de} value="de">
        🇩🇪
      </option>
    </select>
  );
};
export default LanguageSelector;
