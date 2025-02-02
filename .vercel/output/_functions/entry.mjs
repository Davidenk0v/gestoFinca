import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D_N6FTrK.mjs';
import { manifest } from './manifest_CNUgq2Pg.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/administracion-fincas.astro.mjs');
const _page2 = () => import('./pages/alquileres-vacacionales.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/nosotros.astro.mjs');
const _page5 = () => import('./pages/politica-de-privacidad.astro.mjs');
const _page6 = () => import('./pages/presupuestos.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/administracion-fincas.astro", _page1],
    ["src/pages/alquileres-vacacionales.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/nosotros.astro", _page4],
    ["src/pages/politica-de-privacidad.astro", _page5],
    ["src/pages/presupuestos.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "57dd4e2a-5b03-49a5-a8dd-42693c74fcd4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
