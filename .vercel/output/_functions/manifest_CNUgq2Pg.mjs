import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CUZytp-l.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BpOPKp44.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/davidenkov/Documentos/gesto-finca/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/administracion-fincas","isIndex":false,"type":"page","pattern":"^\\/administracion-fincas\\/?$","segments":[[{"content":"administracion-fincas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/administracion-fincas.astro","pathname":"/administracion-fincas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/alquileres-vacacionales","isIndex":false,"type":"page","pattern":"^\\/alquileres-vacacionales\\/?$","segments":[[{"content":"alquileres-vacacionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/alquileres-vacacionales.astro","pathname":"/alquileres-vacacionales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/politica-de-privacidad","isIndex":false,"type":"page","pattern":"^\\/politica-de-privacidad\\/?$","segments":[[{"content":"politica-de-privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-de-privacidad.astro","pathname":"/politica-de-privacidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"}],"routeData":{"route":"/presupuestos","isIndex":false,"type":"page","pattern":"^\\/presupuestos\\/?$","segments":[[{"content":"presupuestos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/presupuestos.astro","pathname":"/presupuestos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/administracion-fincas.BETSeksZ.css"},{"type":"inline","content":"@keyframes slideIn{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes slideOut{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/davidenkov/Documentos/gesto-finca/src/pages/administracion-fincas.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/alquileres-vacacionales.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/contacto.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/nosotros.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/politica-de-privacidad.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/pages/presupuestos.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidenkov/Documentos/gesto-finca/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/administracion-fincas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/alquileres-vacacionales@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contacto@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/nosotros@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/politica-de-privacidad@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/presupuestos@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/administracion-fincas@_@astro":"pages/administracion-fincas.astro.mjs","\u0000@astro-page:src/pages/alquileres-vacacionales@_@astro":"pages/alquileres-vacacionales.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/politica-de-privacidad@_@astro":"pages/politica-de-privacidad.astro.mjs","\u0000@astro-page:src/pages/presupuestos@_@astro":"pages/presupuestos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/davidenkov/Documentos/gesto-finca/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ja5uVYGD.mjs","\u0000@astrojs-manifest":"manifest_CNUgq2Pg.mjs","/home/davidenkov/Documentos/gesto-finca/src/components/ContactFormReact":"_astro/ContactFormReact.CLwy_0hZ.js","/home/davidenkov/Documentos/gesto-finca/src/components/Carrousel.jsx":"_astro/Carrousel.hR6jk41W.js","/home/davidenkov/Documentos/gesto-finca/src/components/Header.tsx":"_astro/Header.CFOd9GUH.js","/home/davidenkov/Documentos/gesto-finca/src/components/WhatsappIcon":"_astro/WhatsappIcon.DqaSb2ND.js","@astrojs/react/client.js":"_astro/client.D5VCDl9Y.js","/home/davidenkov/Documentos/gesto-finca/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/edificio1.Ce29t-5r.webp","/_astro/puerta.C1igjg8S.webp","/_astro/seguridad.yShal2eh.png","/_astro/holiday.C1-rCTUR.png","/_astro/profesionalismo.DXAv9TOr.png","/_astro/vivienda.DJ7BkBIU.png","/_astro/darse-la-mano.BX5AkbvM.png","/_astro/building.BeJXuf7N.webp","/_astro/espana.qqaDjUL-.png","/_astro/administracion-fincas.BETSeksZ.css","/favicon.svg","/_astro/Carrousel.hR6jk41W.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/ContactFormReact.CLwy_0hZ.js","/_astro/Header.CFOd9GUH.js","/_astro/WhatsappIcon.DqaSb2ND.js","/_astro/client.D5VCDl9Y.js","/_astro/index.BL7xzsR_.js","/_astro/index.DNpBy_x7.css","/_astro/jsx-runtime.CLpGMVip.js","/flags/alemania.png","/flags/espana.png","/flags/uk.png","/icons/darse-la-mano.png","/icons/holiday.png","/icons/profesionalismo.png","/icons/seguridad.png","/icons/vivienda.png"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","es","de"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"540S6ZcDNYkkyVjUe6nhk8TaqP8LmYL1LSb0XERT9qI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
