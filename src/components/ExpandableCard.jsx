import React, { useState, useRef, useEffect } from "react";
import accounting from "../assets/icons/accounting.svg";
import visits from "../assets/icons/visits.svg";
import suppliers from "../assets/icons/suppliers.svg";
import meetings from "../assets/icons/meetings.svg";
import advice from "../assets/icons/advice.svg";
import documents from "../assets/icons/documents.svg";
import mediation from "../assets/icons/mediation.svg";
import budgets from "../assets/icons/budgets.svg";
import property_promotion from "../assets/icons/property_promotion.svg";
import booking_management from "../assets/icons/booking_management.svg";
import guest_reception from "../assets/icons/guest_reception.svg";
import cleaning_maintenance from "../assets/icons/cleaning_maintenance.svg";
import customer_support from "../assets/icons/customer_support.svg";
import payment_management from "../assets/icons/payment_management.svg";
import pricing_optimization from "../assets/icons/pricing_optimization.svg";
import tax_management from "../assets/icons/tax_management.svg";
import ownership_transfer from "../assets/icons/tramite-vehiculos/ownership_transfer.svg";
import sale_contract from "../assets/icons/tramite-vehiculos/sale_contract.svg";

const iconMap = {
  accounting: accounting,
  visits: visits,
  suppliers: suppliers,
  meetings: meetings,
  advice: advice,
  documents: documents,
  mediation: mediation,
  budgets: budgets,
  property_promotion: property_promotion,
  booking_management: booking_management,
  guest_reception: guest_reception,
  cleaning_maintenance: cleaning_maintenance,
  customer_support: customer_support,
  payment_management: payment_management,
  pricing_optimization: pricing_optimization,
  tax_management: tax_management,
  ownership_transfer: ownership_transfer,
  sale_contract: sale_contract,
};

const ExpandableCard = ({ title, subtitle, text, buttomText, img, lang }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const [closeText, setCloseText] = useState("Ocultar");
  const contentRef = useRef(null);
  const logo = iconMap[img];

  useEffect(() => {
    if (lang === "es") {
      setCloseText("Ocultar");
    } else if (lang === "en") {
      setCloseText("Hide");
    } else {
      setCloseText("Cacher");
    }
  }, [lang]);

  useEffect(() => {
    if (expanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [expanded]);

  return (
    <div className="max-w-sm mx-auto rounded-lg p-6 text-center">
      {/* Icon */}
      <div className="text-cyan-500 mb-4 flex justify-center">
        {logo && <img src={logo.src} alt={img} className="w-16 h-16" />}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>

      {/* Description */}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      {/* Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-slate-100 hover:bg-slate-200 text-gray-500 font-semibold px-4 py-2 rounded-md flex items-center mx-auto transition-colors duration-300"
      >
        {expanded ? closeText : buttomText}
      </button>

      {/* Expanded content with animation */}
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="py-4 text-gray-700 text-center">
          <p className="mb-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
