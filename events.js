/* Agenda van Time Out Cafe.
   Een activiteit toevoegen? Kopieer een blok { ... }, zet het erbij (met een komma ertussen)
   en pas de gegevens aan. De volgorde maakt niet uit: de agenda sorteert op datum.
   Activiteiten waarvan de datum voorbij is, verdwijnen vanzelf van de pagina.

   datum:        jjjj-mm-dd, bijvoorbeeld "2026-11-14"
   tijd:         vrije tekst, bijvoorbeeld "21.00 uur" (mag leeg blijven: "")
   titel:        de naam van de activiteit
   omschrijving: één of twee korte zinnen
*/
const EVENTS = [
  {
    datum: "2026-11-06",
    tijd: "21.00 uur",
    titel: "Opening met live muziek",
    omschrijving: "Een band speelt voor je op de openingsavond. Kom gezellig een biertje drinken."
  },
  {
    datum: "2026-11-13",
    tijd: "20.00 uur",
    titel: "Dartavond",
    omschrijving: "Gooi mee of kijk gezellig toe. Voor beginners en ervaren spelers."
  },
  {
    datum: "2026-11-21",
    tijd: "20.45 uur",
    titel: "Voetbal kijken",
    omschrijving: "Wij laten de wedstrijd zien op groot scherm, met een koud biertje erbij."
  },
  {
    datum: "2026-12-05",
    tijd: "21.00 uur",
    titel: "Thema-avond: jaren 80",
    omschrijving: "Kom verkleed in jaren-80-stijl en dans mee op de grootste hits."
  }
];
