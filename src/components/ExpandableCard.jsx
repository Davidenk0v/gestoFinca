import React, { useEffect, useState } from "react";
import accounting from "../assets/icons/accounting.svg";
import visits from "../assets/icons/visits.svg";
import suppliers from "../assets/icons/suppliers.svg";
import meetings from "../assets/icons/meetings.svg";
import advice from "../assets/icons/advice.svg";
import documents from "../assets/icons/documents.svg";
import mediation from "../assets/icons/mediation.svg";
import budgets from "../assets/icons/budgets.svg";

const iconMap = {
  accounting: accounting,
  visits: visits,
  suppliers: suppliers,
  meetings: meetings,
  advice: advice,
  documents: documents,
  mediation: mediation,
  budgets: budgets,
};

const ExpandableCard = ({ title, subtitle, text, buttomText, img }) => {
  const [expanded, setExpanded] = useState(false);
  const logo = iconMap[img];

  return (
    <div className="max-w-sm mx-auto rounded-lg p-6 text-center">
      {/* Icon */}
      <div className="text-cyan-500 mb-4 flex justify-center">
        {logo && <img src={logo.src} alt={logo} className="w-16 h-16" />}
      </div>
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      {/* Description */}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      {/* Button */}
      {!expanded && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-slate-100 hover:bg-slate-200 text-gray-500 font-semibold px-4 py-2 rounded-md flex items-center mx-auto transition-colors duration-300"
        >
          {buttomText}
        </button>
      )}
      {/* Expanded content */}
      {expanded && (
        <div
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-gray-700  transition-all duration-300 ease-in-out text-center cursor-pointer"
        >
          <p className="mb-4">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
