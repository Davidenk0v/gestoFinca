import { c as createComponent, r as renderTemplate, b as addAttribute, f as renderScript, e as createAstro, m as maybeRenderHead, a as renderComponent, g as renderHead, h as createTransitionScope, i as renderSlot } from './astro/server_BpOPKp44.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import i18n from 'i18next';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/davidenkov/Documentos/gesto-finca/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/davidenkov/Documentos/gesto-finca/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- component --><link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"><link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">${maybeRenderHead()}<footer class="relative bg-slate-200 pt-8 pb-6"> <div class="container mx-auto px-4"> <div class="flex flex-wrap text-left lg:text-left"> <div class="w-full lg:w-6/12 px-4"> <h4 class="text-3xl font-semibold text-blueGray-700">GestoFinca</h4> <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
Cuidamos de tu propiedad, gestionamos tu tranquilidad.
</h5> <div class="mt-6 lg:mb-0 mb-6"> <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"> <i class="fab fa-facebook-square"></i> </button> <button class="bg-green-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"> <i class="fab fa-whatsapp"></i> </button> </div> </div> <div class="w-full lg:w-6/12 px-4"> <div class="flex flex-wrap items-top mb-6"> <div class="w-full lg:w-4/12 px-4 ml-auto"> <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Páginas</span> <ul class="list-unstyled"> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/nosotros">Nosotros</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/administracion-fincas">Administración de fincas</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/alquileres-vacacionales">Alquileres vacacionales</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/presupuestos">Presupuestos</a> </li> </ul> </div> <div class="w-full lg:w-4/12 px-4"> <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Enlaces de interés</span> <ul class="list-unstyled"> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contacto">Contáctanos</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Terminos &amp; Condiciones</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/politica-de-privacidad">Política de privacidad</a> </li> <li> <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Uso de cookies</a> </li> </ul> </div> </div> </div> </div> <hr class="my-6 border-blueGray-300"> <div class="flex flex-wrap items-center md:justify-between justify-center"> <div class="w-full md:w-4/12 px-4 mx-auto text-center"> <div class="text-sm text-blueGray-500 font-semibold py-1">
Copyright © <span id="get-current-year">2025</span> <a href="/" class="text-blueGray-500 hover:text-blueGray-800"> GestoFinca S.L</a>.
</div> </div> </div> </div> </footer>`;
}, "/home/davidenkov/Documentos/gesto-finca/src/components/Footer.astro", undefined);

new Proxy({"src":"/_astro/espana.qqaDjUL-.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/flags/espana.png";
							}
							
							return target[name];
						}
					});

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  const handleChange = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return /* @__PURE__ */ jsxs(
    "select",
    {
      className: "w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
      value: language,
      onChange: handleChange,
      children: [
        /* @__PURE__ */ jsx("option", { value: "en", children: "🇬🇧" }),
        /* @__PURE__ */ jsx("option", { value: "es", children: "🇪🇸" }),
        /* @__PURE__ */ jsx("option", { value: "de", children: "🇩🇪" })
      ]
    }
  );
};

const Header = () => {
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const togglePhoneMenu = () => {
    console.log("boton menu");
    setIsOpenPhone((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs("header", { className: "bg-slate-200 sticky top-0 z-50 bg-opacity-90", children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: "mx-auto flex max-w-full items-center justify-between p-6 lg:px-8",
        "aria-label": "Global",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Your Company" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "h-8 w-auto",
                src: "https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600",
                alt: "property admin"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: togglePhoneMenu,
              type: "button",
              className: "-m-2.5 z-20 inline-flex items-center justify-center rounded-md  p-2.5 text-gray-700",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-6 z-0",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex lg:gap-x-12 items-center", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/administracion-fincas",
                className: "whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700",
                children: "Administración de fincas"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/alquileres-vacacionales",
                className: "whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700",
                children: "Alquileres vacacionales"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/nosotros",
                className: "text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700",
                children: "Nosotros"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/presupuestos",
                className: "text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-green-700",
                children: "Presupuestos"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contacto",
                className: "text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-green-700",
                children: "Contacto"
              }
            ),
            /* @__PURE__ */ jsx(LanguageSelector, {})
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "lg:hidden", role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${isOpenPhone ? "hidden" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Your Company" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "h-8 w-auto",
                    src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600",
                    alt: ""
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: togglePhoneMenu,
                  className: "-m-2.5 z-10 rounded-md p-2.5 text-gray-700",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "size-6 bg-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18 18 6M6 6l12 12"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsx("div", { className: "-my-6 divide-y divide-gray-500/10", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 py-6", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/administracion-fincas",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
                  onClick: togglePhoneMenu,
                  children: "Administración de fincas"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/alquileres-vacacionales",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
                  onClick: togglePhoneMenu,
                  children: "Alquileres vacacionales"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/nosotros",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
                  onClick: togglePhoneMenu,
                  children: "Nosotros"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "presupuestos",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
                  onClick: togglePhoneMenu,
                  children: "Presupuestos"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/contacto",
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
                  onClick: togglePhoneMenu,
                  children: "Contacto"
                }
              ),
              /* @__PURE__ */ jsx(LanguageSelector, {})
            ] }) }) })
          ]
        }
      )
    ] })
  ] });
};

const WhatsAppIcon = () => {
  const handleClick = () => {
    const message = "¡Hola! Estoy interesado en tus servicios";
    const phoneNumber = "+34672277520";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    console.log(phoneNumber);
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 bg-green-700 rounded-full shadow-lg hover:bg-green-600 transition",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          className: "w-8 h-8 text-white",
          fill: "currentColor",
          children: /* @__PURE__ */ jsx("path", { d: "M16.001 0C7.163 0 0 7.163 0 16c0 2.957.803 5.736 2.324 8.204L0 32l8.107-2.303A15.977 15.977 0 0 0 16 32c8.837 0 16-7.163 16-16S24.838 0 16.001 0Zm8.228 22.373c-.344.967-1.707 1.786-2.772 2.025-.74.161-1.687.293-4.892-1.043-4.111-1.707-6.735-5.851-6.94-6.123-.202-.272-1.654-2.202-1.654-4.196 0-1.994 1.033-2.976 1.399-3.372.345-.368.74-.46.988-.46h.713c.232 0 .546-.048.84.637.321.72 1.086 2.664 1.181 2.859.096.193.16.416.032.674-.129.258-.193.416-.387.644-.193.225-.408.506-.582.678-.193.2-.39.419-.166.805.225.385 1.002 1.647 2.148 2.667 1.478 1.304 2.715 1.707 3.097 1.903.385.193.613.161.841-.097.225-.258.967-1.125 1.225-1.51.258-.386.483-.322.805-.193.322.128 2.032.957 2.382 1.13.353.161.582.258.672.403.097.144.097.835-.247 1.803Z" })
        }
      )
    }
  );
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="flex flex-col min-h-screen" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/davidenkov/Documentos/gesto-finca/src/components/Header.tsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true, "data-astro-transition-persist": createTransitionScope($$result, "j4akag7t") })} <main class="flex-grow" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "WhatsAppIcon", WhatsAppIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/davidenkov/Documentos/gesto-finca/src/components/WhatsappIcon", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "/home/davidenkov/Documentos/gesto-finca/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
