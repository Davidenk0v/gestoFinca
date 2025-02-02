/* empty css                                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BpOPKp44.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_T-ophOXN.mjs';
import { e as edf2, $ as $$ServicesInfo } from '../chunks/ServicesInfo_ByLTInPR.mjs';
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white"> <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> <div class="mr-auto place-self-center lg:col-span-7"> <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">¿Quienes somos?</h1> <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit reprehenderit quod nulla at sunt consectetur dolores nihil inventore perspiciatis iusto impedit cumque illum, beatae aut harum eius suscipit recusandae.</p> <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
Get started
<svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> <a href="/contacto" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Contáctanos
</a> </div> <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"> <img${addAttribute(edf2.src, "src")} alt="building" class="object-cover w-full h-96 rounded-lg lg:h-full"> </div> </div> </section> <div class="relative"> ${renderComponent($$result2, "ServicesInfo", $$ServicesInfo, {})} </div> ` })}`;
}, "/home/davidenkov/Documentos/gesto-finca/src/pages/nosotros.astro", undefined);

const $$file = "/home/davidenkov/Documentos/gesto-finca/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
