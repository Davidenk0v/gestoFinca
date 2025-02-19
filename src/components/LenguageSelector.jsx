import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang") || "es";
      setLanguage(storedLang);
    }
  }, []);

  const handleChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
      window.location.search = `?lang=${newLang}`;
    }
  };

  return (
    <select
      className="w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={handleChange}
      value={language}
    >
      <option value="es">🇪🇸</option>
      <option value="en">🇬🇧</option>
      <option value="de">🇩🇪</option>
    </select>
  );
};

export default LanguageSelector;
