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
import tax_payment from "../assets/icons/tramite-vehiculos/tax_payment.svg";
import vehicle_registration from "../assets/icons/tramite-vehiculos/vehicle_registration.svg";
import vehicle_report from "../assets/icons/tramite-vehiculos/vehicle_report.svg";
import vehicle_status from "../assets/icons/tramite-vehiculos/vehicle_status.svg";
import circulation_permit from "../assets/icons/tramite-vehiculos/circulation_permit.svg";
import special_authorizations from "../assets/icons/tramite-vehiculos/special_authorizations.svg";

const iconMap = {
  accounting,
  visits,
  suppliers,
  meetings,
  advice,
  documents,
  mediation,
  budgets,
  property_promotion,
  booking_management,
  guest_reception,
  cleaning_maintenance,
  customer_support,
  payment_management,
  pricing_optimization,
  tax_management,
  ownership_transfer,
  sale_contract,
  tax_payment,
  vehicle_registration,
  vehicle_report,
  vehicle_status,
  circulation_permit,
  special_authorizations,
};

const ExpandableCard = ({ title, subtitle, text, buttomText, img, lang }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const logo = iconMap[img];

  const closeText =
    lang === "es" ? "Ocultar" : lang === "en" ? "Hide" : "Ausblenden";

  useEffect(() => {
    if (expanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [expanded]);

  return (
    <div className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-brand-blueFinca/20 h-full">
      {/* Icon container */}
      <div className="w-16 h-16 rounded-2xl bg-brand-blueFinca/10 flex items-center justify-center mb-4 group-hover:bg-brand-blueFinca/15 transition-colors duration-300 flex-shrink-0">
        {logo && (
          <img
            src={logo.src}
            alt={img}
            className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{subtitle}</p>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-brand-blueFinca font-semibold text-sm px-4 py-2 rounded-lg border border-brand-blueFinca/20 hover:border-brand-blueFinca/50 hover:bg-brand-blueFinca/5 transition-all duration-200 mt-auto"
        aria-expanded={expanded}
      >
        {expanded ? closeText : buttomText}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out w-full"
      >
        <div className="pt-4 pb-1 border-t border-gray-100 mt-4 text-gray-600 text-sm leading-relaxed text-left">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
