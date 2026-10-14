/* Time Out Cafe: gedeelde gegevens, header en footer.
   Pas hier de gegevens aan. Ze verschijnen automatisch op alle pagina's. */
const SITE = {
  naam: "Time Out Cafe",
  slogan: "Gezelligheid kent geen tijd",
  adres: "Grotekerkstraat 17",
  plaats: "Hoogeveen",
  telefoon: "06 11167190",
  telefoonLink: "+31611167190",
  email: "timeoutcafehoogeveen@gmail.com",
  facebook: "#",   // vul hier de link naar jullie Facebook-pagina in
  instagram: "#",  // vul hier de link naar jullie Instagram-pagina in
  // Openingstijden: pas de tijden aan, bijvoorbeeld "16.00 - 00.00" of "Gesloten"
  tijden: [
    ["Maandag", "00.00 - 00.00"],
    ["Dinsdag", "00.00 - 00.00"],
    ["Woensdag", "00.00 - 00.00"],
    ["Donderdag", "00.00 - 00.00"],
    ["Vrijdag", "00.00 - 00.00"],
    ["Zaterdag", "00.00 - 00.00"],
    ["Zondag", "00.00 - 00.00"]
  ]
};

const PAGINAS = [
  ["index.html", "Home", "home"],
  ["menu.html", "Menukaart", "menu"],
  ["agenda.html", "Agenda", "agenda"],
  ["contact.html", "Contact", "contact"]
];

const mapsLink = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(SITE.adres + ", " + SITE.plaats);

// Opent Google Maps met de routebeschrijving naar het café (vertrekpunt kiest de bezoeker zelf)
const routeLink = "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(SITE.adres + ", " + SITE.plaats);

const mapsEmbed = "https://www.google.com/maps?q=" +
  encodeURIComponent(SITE.adres + ", " + SITE.plaats) + "&output=embed";

function tijdenRijen() {
  return SITE.tijden.map(([dag, tijd]) => `<tr><td>${dag}</td><td>${tijd}</td></tr>`).join("");
}

function bouwHeader() {
  const huidig = document.body.dataset.pagina;
  const links = PAGINAS.map(([url, tekst, id]) =>
    `<a href="${url}"${id === huidig ? ' aria-current="page"' : ""}>${tekst}</a>`).join("");
  return `<header class="site-header"><div class="wrap">
    <a class="merk" href="index.html">${SITE.naam}</a>
    <button class="menu-knop" type="button" aria-expanded="false" aria-controls="hoofdmenu">Menu</button>
    <nav class="hoofdmenu" id="hoofdmenu" aria-label="Hoofdmenu">${links}</nav>
  </div></header>`;
}

function bouwFooter() {
  // Op een pagina met <body data-footer-contact="uit"> blijft het blok "Adres & contact" weg (nu: menukaart)
  const toonContact = document.body.dataset.footerContact !== "uit";
  const contactBlok = toonContact ? `<div><h3>Adres &amp; contact</h3>
        <p>${SITE.adres}<br>${SITE.plaats}<br>
        <a href="tel:${SITE.telefoonLink}">${SITE.telefoon}</a><br>
        <a href="mailto:${SITE.email}">${SITE.email}</a></p></div>` : "";
  return `<footer class="site-footer"><div class="wrap">
    <div class="footer-raster">
      ${contactBlok}
      <div><h3>Volg ons</h3>
        <div class="social">
          <a class="ig" href="${SITE.instagram}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>Instagram</a>
          <a class="fb" href="${SITE.facebook}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>Facebook</a>
        </div></div>
    </div>
    <p class="kleinste">&copy; ${new Date().getFullYear()} ${SITE.naam} &middot; ${SITE.plaats}</p>
  </div></footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", bouwHeader());
  document.body.insertAdjacentHTML("beforeend", bouwFooter());

  // Gegevens invullen op plekken met data-site="..."
  document.querySelectorAll("[data-site]").forEach(el => {
    const sleutel = el.dataset.site;
    if (sleutel === "tijden") el.innerHTML = tijdenRijen();
    else if (sleutel === "maps") el.href = mapsLink;
    else if (sleutel === "mapsEmbed") el.src = mapsEmbed;
    else if (sleutel === "routeHref") el.href = routeLink;
    else if (sleutel === "adres") el.innerHTML = `${SITE.adres}<br>${SITE.plaats}`;
    else if (sleutel === "telefoonHref") el.href = "tel:" + SITE.telefoonLink;
    else if (sleutel === "emailHref") el.href = "mailto:" + SITE.email;
    else if (sleutel === "facebookHref") el.href = SITE.facebook;
    else if (sleutel === "instagramHref") el.href = SITE.instagram;
    else if (SITE[sleutel]) el.textContent = SITE[sleutel];
  });

  toonAgenda();

  // Mobiel menu
  const knop = document.querySelector(".menu-knop");
  const menu = document.getElementById("hoofdmenu");
  knop.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    knop.setAttribute("aria-expanded", String(open));
  });
});

/* Agenda: toont de evenementen uit events.js, op datum gesorteerd, zonder datums die voorbij zijn */
function toonAgenda() {
  const lijst = document.getElementById("agenda-lijst");
  if (!lijst || typeof EVENTS === "undefined") return;

  const vandaag = new Date();
  vandaag.setHours(0, 0, 0, 0);
  const maanden = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  const dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

  const komend = EVENTS
    .map(e => ({ ...e, d: new Date(e.datum + "T00:00:00") }))
    .filter(e => !isNaN(e.d) && e.d >= vandaag)
    .sort((a, b) => a.d - b.d);

  const tekst = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  lijst.innerHTML = komend.map(e => `<li class="evenement">
    <div class="datum" aria-hidden="true"><b>${e.d.getDate()}</b><span>${maanden[e.d.getMonth()]}</span></div>
    <div class="evenement-tekst">
      <h3>${tekst(e.titel)}</h3>
      <p class="wanneer">${dagen[e.d.getDay()]} ${e.d.getDate()} ${maanden[e.d.getMonth()]} ${e.d.getFullYear()}${e.tijd ? " &middot; " + tekst(e.tijd) : ""}</p>
      <p>${tekst(e.omschrijving)}</p>
    </div></li>`).join("");

  const leeg = document.getElementById("agenda-leeg");
  if (leeg) leeg.hidden = komend.length > 0;
}
