/* empty css                                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BpOPKp44.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'resend';
import { $ as $$Layout } from '../chunks/Layout_T-ophOXN.mjs';
export { renderers } from '../renderers.mjs';

const ContactFormReact = () => {
  const dataUser = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  };
  const [formData, setFormData] = useState(dataUser);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangeValue = (event, dataUser2) => {
    setFormData({ ...formData, [dataUser2]: event.target.value });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-sm mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "small-input",
          className: "block m-2 text-sm font-medium text-gray-900 :text-white",
          children: "Nombre*"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          onChange: (event) => handleChangeValue(event, "name"),
          value: formData.name,
          name: "name",
          type: "text",
          id: "small-input",
          className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-green-700 :focus:border-green-700"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "small-input",
          className: "block m-2 text-sm font-medium text-gray-900 :text-white",
          children: "Teléfono*"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          onChange: (event) => handleChangeValue(event, "phone"),
          value: formData.phone,
          name: "phone",
          type: "text",
          id: "small-input",
          className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-green-700 :focus:border-green-700"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "small-input",
          className: "block m-2 text-sm font-medium text-gray-900 :text-white",
          children: "Correo electrónico*"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          onChange: (event) => handleChangeValue(event, "email"),
          value: formData.email,
          name: "email",
          type: "email",
          id: "small-input",
          className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "small-input",
          className: "block m-2 text-sm font-medium text-gray-900 :text-white",
          children: "Asunto*"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          onChange: (event) => handleChangeValue(event, "subject"),
          value: formData.subject,
          name: "subject",
          type: "text",
          id: "small-input",
          className: "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "small-input",
          className: "block m-2 text-sm font-medium text-gray-900 :text-white",
          children: "Mensaje*"
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          onChange: (event) => handleChangeValue(event, "message"),
          value: formData.message,
          name: "message",
          id: "small-input",
          className: "mb-2 h-20 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-700 focus:border-green-700"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "link-checkbox",
          type: "checkbox",
          value: "",
          className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        }
      ),
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "link-checkbox",
          className: "ms-2 mb-2 text-sm font-medium text-gray-900",
          children: [
            "Consiento el uso de mis datos para los fines indicados en la",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/politica-de-privacidad",
                className: "text-blue-600 :text-blue-500 hover:underline",
                children: "política de privacidad*"
              }
            ),
            "."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center m-2", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300",
        children: "Contactar"
      }
    ) })
  ] });
};

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="block text-center py-4"> <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contáctanos</h1> <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Contacta con nosotros para aclarar tus dudas o solicitar un presupuesto.</p> </div> ${renderComponent($$result2, "ContactFormReact", ContactFormReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/davidenkov/Documentos/gesto-finca/src/components/ContactFormReact", "client:component-export": "default" })} ` })}`;
}, "/home/davidenkov/Documentos/gesto-finca/src/pages/contacto.astro", undefined);

const $$file = "/home/davidenkov/Documentos/gesto-finca/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
