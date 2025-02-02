/* empty css                                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BpOPKp44.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
import { e as edf2, $ as $$ServicesInfo } from '../chunks/ServicesInfo_ByLTInPR.mjs';
import { $ as $$Layout } from '../chunks/Layout_T-ophOXN.mjs';
export { renderers } from '../renderers.mjs';

const edf1 = new Proxy({"src":"/_astro/building.BeJXuf7N.webp","width":5120,"height":2880,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/src/assets/images/building.webp";
							}
							
							return target[name];
						}
					});

const edf3 = new Proxy({"src":"/_astro/puerta.C1igjg8S.webp","width":1024,"height":681,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/src/assets/images/puerta.webp";
							}
							
							return target[name];
						}
					});

const Carrousel = () => {
  const images = [edf1.src, edf2.src, edf3.src];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [animations, setAnimations] = useState("slideIn");
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimations("slideOut");
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          setAnimations("slideIn");
          return images[nextIndex];
        });
      }, 500);
    }, 1e4);
    return () => clearInterval(interval);
  }, [images]);
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[50vh] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 bg-cover bg-center transition-transform duration-500 ${animations}`,
        style: { backgroundImage: `url(${currentImage})` },
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black opacity-60 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative flex justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-6xl font-extrabold text-brand-blueFinca sm:text-5xl", children: [
        "Gesto",
        /* @__PURE__ */ jsx("strong", { className: "font-extrabold text-brand-greenFinca", children: "Finca." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-lg text-white sm:text-xl/relaxed", children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4 text-center justify-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contacto",
            className: "block border-2 border-brand-blueFinca rounded-md bg-brand-blueFinca px-12 py-3 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:border-2 focus:ring-3 focus:outline-hidden sm:w-auto",
            children: "Contáctanos"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/nosotros",
            className: "block border-2 border-brand-blueFinca rounded-md px-12 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-blueFinca focus:ring-3 focus:outline-hidden sm:w-auto",
            children: "Descubre más"
          }
        )
      ] })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GestoFinca - Administradores de fincas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="snap-y snap-mandatory"> <div class="snap-start"> ${renderComponent($$result2, "Carrousel", Carrousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/davidenkov/Documentos/gesto-finca/src/components/Carrousel.jsx", "client:component-export": "default" })} </div> <section class="snap-start"> ${renderComponent($$result2, "ServicesInfo", $$ServicesInfo, {})} </section> </div> ` })}`;
}, "/home/davidenkov/Documentos/gesto-finca/src/pages/index.astro", undefined);

const $$file = "/home/davidenkov/Documentos/gesto-finca/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
