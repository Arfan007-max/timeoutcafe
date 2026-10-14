# Time Out Cafe

Website voor Time Out Cafe, een bruin café in Hoogeveen. Gewone HTML, CSS en een beetje JavaScript. Geen framework, geen build-stap.

## De site lokaal bekijken

Dubbelklik op `index.html`. De pagina opent in je browser.

Wil je zien hoe het op een echte server werkt? Open Terminal in deze map en typ:

```bash
python3 -m http.server 8000
```

Ga daarna in je browser naar http://localhost:8000. Stoppen doe je met `Ctrl + C`.

## Bestanden

| Bestand | Waar het voor is |
| --- | --- |
| `index.html` | Home |
| `style.css` | Eén stylesheet voor alle pagina's (kleuren staan bovenaan) |
| `site.js` | Gegevens van het café (adres, telefoon, openingstijden), header en footer |
| `images/` | Afbeeldingen. Vervang `hero-placeholder.svg` door je eigen foto |
| `coming-soon.html` | De eerdere "binnenkort open"-pagina |

## Gegevens aanpassen

Open `site.js`. Bovenaan staat het blok `SITE`. Pas daar adres, telefoon, e-mail, openingstijden en de links naar Facebook en Instagram aan. Ze veranderen dan op alle pagina's tegelijk.

## Eigen foto op de homepage

Zet je foto in `images/` (bijvoorbeeld `hero.jpg`, liefst minstens 1600 pixels breed) en pas in `index.html` de regel `<img src="images/hero-placeholder.svg" ...>` aan.

(Uitleg over menu-items en evenementen volgt zodra die pagina's klaar zijn.)
