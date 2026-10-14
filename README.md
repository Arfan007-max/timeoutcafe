# Time Out Cafe

Website voor Time Out Cafe, een bruin café in Hoogeveen. Gewone HTML, CSS en een beetje JavaScript. Geen framework, geen build-stap.

## De site lokaal bekijken

Dubbelklik op `index.html`. De pagina opent in je browser.

Wil je het zien zoals op een echte server? Open Terminal in deze map en typ:

```bash
python3 -m http.server 8000
```

Ga daarna in je browser naar http://localhost:8000. Stoppen doe je met `Ctrl + C`.

## Bestanden

| Bestand | Waar het voor is |
| --- | --- |
| `index.html` | Home |
| `menu.html` | Menukaart (drankkaart) |
| `agenda.html` | Agenda met activiteiten |
| `contact.html` | Adres, telefoon, e-mail, openingstijden en kaart |
| `style.css` | Eén stylesheet voor alle pagina's (de kleuren staan bovenaan) |
| `site.js` | Gegevens van het café, header en footer, en de agenda-weergave |
| `events.js` | De lijst met activiteiten |
| `images/` | Afbeeldingen |
| `coming-soon.html` | De eerdere "binnenkort open"-pagina |

## Gegevens van het café aanpassen

Open `site.js`. Bovenaan staat het blok `SITE`. Pas daar adres, telefoon, e-mail, openingstijden en de links naar Facebook en Instagram aan. De wijziging staat daarna op alle pagina's. De openingstijden verschijnen alleen op de contactpagina.

Openingstijden zijn nu `00.00 - 00.00`. Vervang ze, bijvoorbeeld door `16.00 - 00.00` of `Gesloten`.

## Menu-items aanpassen

Open `menu.html`. Elk product is één regel:

```html
<li><span class="naam">Pils <small>(klein glas)</small></span><span class="prijs">€ 0,00</span></li>
```

- **Prijs aanpassen:** vervang `€ 0,00` door de echte prijs.
- **Product toevoegen:** kopieer een hele `<li>...</li>`-regel, plak hem eronder in dezelfde categorie en pas de naam en prijs aan.
- **Product weghalen:** verwijder de hele regel.
- **Categorie toevoegen:** kopieer een heel blok `<div class="menu-categorie"> ... </div>` en pas de titel en de producten aan.

## Evenementen toevoegen

Open `events.js`. Elk evenement is een blok tussen accolades:

```js
{
  datum: "2026-11-14",
  tijd: "21.00 uur",
  titel: "Livemuziek",
  omschrijving: "Een band speelt de hele avond. Kom gezellig mee genieten."
},
```

- Zet het blok bij de andere blokken. Vergeet de komma tussen twee blokken niet.
- De datum schrijf je als `jjjj-mm-dd`.
- De volgorde maakt niet uit. De agenda sorteert zelf op datum.
- **Oude activiteiten verdwijnen vanzelf.** Zodra de datum voorbij is, wordt het evenement niet meer getoond. Je hoeft niets te verwijderen.
- Zijn er geen komende activiteiten, dan staat er een vriendelijke melding.

## Foto's

De homepage en de bannertjes op de andere pagina's gebruiken `images/hero.jpg`.

Let op: de foto is klein (399 x 352 pixels) en ziet er op een groot scherm korrelig uit. Gebruik later liever een eigen foto van het café, liefst liggend en minstens 1600 pixels breed.

Eigen foto gebruiken:
1. Zet de foto in `images/`, bijvoorbeeld als `hero-nieuw.jpg`.
2. Vervang `images/hero.jpg` in `index.html` en in `style.css` (bij `.pagina-kop`) door `images/hero-nieuw.jpg`.

Nieuwe foto's om te bekijken kun je eerst in `images/nieuw/` zetten. Ontbreekt de foto, dan toont de site de placeholder `images/hero-placeholder.svg`.
