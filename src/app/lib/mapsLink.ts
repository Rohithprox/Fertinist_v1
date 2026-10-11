// maps.app.goo.gl links are handled by the Google Maps app, so on a phone they
// open the app directly. On desktop there is no app to catch them and the
// browser has to follow Google's shortener redirect, which is unreliable now
// that goo.gl links are being retired - that is why the buttons worked on a
// phone but not on Windows.
//
// So: app link on touch devices, plain google.com/maps URL everywhere else.

export type MapsLink = { app: string; web: string };

const q = (address: string) =>
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);

export const NELLORE_MAPS: MapsLink = {
  app: "https://maps.app.goo.gl/Q3hTYenGrXYGorCB8?g_st=iw",
  web: q("Mythri Fertinest, 3rd Floor, PMR Arcade, Mini Bypass Road, Gomati Nagar, Nellore, Andhra Pradesh 524003"),
};

export const ANANTAPUR_MAPS: MapsLink = {
  app: "https://maps.app.goo.gl/G3ubEjwvEb3APesAA",
  web: q("Mythri Fertinest, 4th Floor, One Par Centre, Sangameswar Circle, Sai Nagar, Anantapur, Andhra Pradesh 515001"),
};

function hasMapsApp() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  // iPadOS 13+ reports a Mac UA, so fall back to touch points for it
  return /Android|iPhone|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}

export function mapsHref(link: MapsLink) {
  return hasMapsApp() ? link.app : link.web;
}
