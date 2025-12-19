declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function loadGTM(gtmId: string) {
  if (typeof window === "undefined") return;

  if (window.dataLayer) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "gtm.js",
    "gtm.start": new Date().getTime(),
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}
