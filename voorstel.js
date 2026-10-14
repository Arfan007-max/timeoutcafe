/* Hulpscript voor de homepage-voorstellen: toont de komende activiteiten uit events.js en het kaartje met het voorstelnummer. */
document.addEventListener("DOMContentLoaded", () => {
  const lijst = document.getElementById("komend");
  if (lijst && typeof EVENTS !== "undefined") {
    const aantal = parseInt(lijst.dataset.aantal || "3", 10);
    const vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
    const maanden = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    const dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    const tekst = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const komend = EVENTS.map(e => ({ ...e, d: new Date(e.datum + "T00:00:00") }))
      .filter(e => !isNaN(e.d) && e.d >= vandaag).sort((a, b) => a.d - b.d).slice(0, aantal);
    lijst.innerHTML = komend.map(e => `<li class="evenement">
      <div class="datum" aria-hidden="true"><b>${e.d.getDate()}</b><span>${maanden[e.d.getMonth()]}</span></div>
      <div class="evenement-tekst">
        <h3>${tekst(e.titel)}</h3>
        <p class="wanneer">${dagen[e.d.getDay()]} ${e.d.getDate()} ${maanden[e.d.getMonth()]}${e.tijd ? " &middot; " + tekst(e.tijd) : ""}</p>
        <p>${tekst(e.omschrijving)}</p>
      </div></li>`).join("");
  }
  const nr = document.body.dataset.voorstel;
  if (nr) document.body.insertAdjacentHTML("beforeend", `<div class="voorstel-label">Voorstel ${nr} van 3</div>`);
});
