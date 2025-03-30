import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [firstExpanded, setFirstExpanded] = useState(false);
  const items = [
    {
      title: "Servicio 1",
      content:
        "Esta es la introducción del contenido. Aquí se presentan los conceptos básicos que se desarrollarán en las siguientes secciones. Es importante entender estos fundamentos antes de proceder con el resto del material.",
    },
    {
      title: "Servicio 2",
      content:
        "En esta sección se desarrollan los conceptos principales. Se analizan en detalle los diferentes aspectos del tema y se proporcionan ejemplos prácticos para facilitar la comprensión.",
    },
    {
      title: "Servicio 3",
      content:
        "Aquí se presentan las aplicaciones prácticas de los conceptos estudiados. Se muestran casos de uso reales y se explica cómo implementar los conocimientos adquiridos en diferentes contextos.",
    },
    {
      title: "Servicio 4",
      content:
        "En esta última sección se resumen los puntos clave tratados y se ofrecen conclusiones sobre el tema. También se mencionan posibles líneas de investigación o aplicación futura.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandFirst = () => {
    setOpenIndex(0);
    setFirstExpanded(true);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-100 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-brand-blueFinca xl:text-2xl lg:text-2xl mb-4">
          Nuestros servicios
        </h2>
      </div>
      <div className="divide-y divide-gray-200 text-xl font-semibold text-gray-500 xl:text-xl lg:text-xl mb-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
