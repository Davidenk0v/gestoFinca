import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BpOPKp44.mjs';
import 'kleur/colors';
import 'clsx';

const edf2 = new Proxy({"src":"/_astro/edificio1.Ce29t-5r.webp","width":796,"height":980,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/src/assets/images/edificio1.webp";
							}
							
							return target[name];
						}
					});

const hands = new Proxy({"src":"/_astro/darse-la-mano.BX5AkbvM.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/icons/darse-la-mano.png";
							}
							
							return target[name];
						}
					});

const safe = new Proxy({"src":"/_astro/seguridad.yShal2eh.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/icons/seguridad.png";
							}
							
							return target[name];
						}
					});

const pro = new Proxy({"src":"/_astro/profesionalismo.DXAv9TOr.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/icons/profesionalismo.png";
							}
							
							return target[name];
						}
					});

const vivienda = new Proxy({"src":"/_astro/vivienda.DJ7BkBIU.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/icons/vivienda.png";
							}
							
							return target[name];
						}
					});

const holiday = new Proxy({"src":"/_astro/holiday.C1-rCTUR.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/davidenkov/Documentos/gesto-finca/public/icons/holiday.png";
							}
							
							return target[name];
						}
					});

const $$ServicesInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-100"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Nuestros servicios</h2> </div> <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0"> <div> <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12"> <img${addAttribute(vivienda.src, "src")} alt="vivienda" class="w-7 h-7"> </div> <h3 class="mb-2 text-xl font-bold">Administración de fincas</h3> <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p> </div> <div> <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 "> <img${addAttribute(holiday.src, "src")} alt="holiday" class="w-8 h-7"> </div> <h3 class="mb-2 text-xl font-bold">Gestión de alquileres vacacionales</h3> <p class="text-gray-500">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p> </div> </div> </div> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md mb-8 lg:mb-16"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Que nos hace únicos en nuestros servicios</h2> </div> <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0"> <div> <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-1"> <img${addAttribute(hands.src, "src")} alt="hands" class="w-6 h-6"> </div> <h3 class="mb-2 text-xl font-bold dark:text-black">Confiabilidad</h3> <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p> </div> <div> <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12"> <img${addAttribute(safe.src, "src")} alt="safe" class="w-6 h-6"> </div> <h3 class="mb-2 text-xl font-bold dark:text-black">Seguridad</h3> <p class="text-gray-500">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p> </div> <div> <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12"> <img${addAttribute(pro.src, "src")} alt="pro" class="w-7 h-7"> </div> <h3 class="mb-2 text-xl font-bold">Profesionalidad</h3> <p class="text-gray-500">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p> </div> </div> </div> </section>`;
}, "/home/davidenkov/Documentos/gesto-finca/src/components/ServicesInfo.astro", undefined);

export { $$ServicesInfo as $, edf2 as e };
