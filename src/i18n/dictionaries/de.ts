import type { Dictionary } from "../types";

export const de: Dictionary = {
  "meta": {
    "title": "SplitWhom — Rechnung teilen & sehen, wer wem was zahlt",
    "description": "Kostenlose Web-App ohne Anmeldung, die Gruppenausgaben aufteilt und genau zeigt, wer wem mit den wenigsten Zahlungen Geld schuldet. Ideal für Reisen, Camping und WGs.",
    "keywords": [
      "Rechnung teilen",
      "Ausgaben teilen",
      "Kosten aufteilen",
      "wer schuldet wem",
      "Schulden ausgleichen",
      "Gruppenausgaben",
      "Rechnung aufteilen Rechner",
      "Kosten teilen App",
      "Urlaubskasse abrechnen"
    ],
    "ogTitle": "SplitWhom — Rechnung teilen & sehen, wer wem was zahlt",
    "ogDescription": "Gruppenausgaben aufteilen und mit den wenigsten Zahlungen ausgleichen. Ohne Anmeldung, kostenlos, läuft im Browser."
  },
  "hero": {
    "tagline": "Gemeinsame Ausgaben aufteilen und genau sehen, wer wem was zahlt — mit den wenigsten Zahlungen. Ohne Anmeldung, läuft komplett im Browser."
  },
  "setup": {
    "eventName": "Name des Events",
    "eventPlaceholder": "z. B. Campingtrip",
    "currency": "Währung"
  },
  "members": {
    "title": "Teilnehmer",
    "addPlaceholder": "Namen hinzufügen",
    "add": "Hinzufügen",
    "empty": "Füge alle hinzu, die sich die Kosten geteilt haben.",
    "removeAria": "{name} entfernen",
    "confirmDelete": "Dadurch werden auch {count} Zahlung(en) von {name} gelöscht. Fortfahren?",
    "peopleLabel": "Personen"
  },
  "payments": {
    "title": "Zahlungen",
    "itemsLabel": "Einträge",
    "addMembersFirst": "Füge zuerst Teilnehmer hinzu.",
    "paidBy": "Bezahlt von",
    "description": "Beschreibung",
    "descPlaceholder": "z. B. Essen",
    "amount": "Betrag",
    "splitBetween": "Aufteilen unter",
    "selectAll": "Alle wählen",
    "clearAll": "Alle abwählen",
    "addPayment": "Zahlung hinzufügen",
    "paidFor": "bezahlte",
    "splitEveryone": "Unter allen aufgeteilt",
    "splitBetweenNames": "Aufgeteilt unter {names}",
    "deleteAria": "Löschen",
    "removed": "(entfernt)",
    "fixedToggle": "Feste Beträge (optional)",
    "fixedPlaceholder": "teilt Rest",
    "fixedTag": "fest",
    "splitRest": "Rest aufgeteilt unter {names}",
    "fixedExceeds": "Die festen Beträge übersteigen die Summe."
  },
  "results": {
    "emptyPrompt": "Füge Teilnehmer und Zahlungen hinzu, um hier die Abrechnung zu sehen.",
    "settlementTitle": "Abrechnung — wenigste Zahlungen",
    "total": "Gesamt {amount}",
    "allSettled": "Alles ausgeglichen — niemand schuldet etwas 🎉",
    "balancesTitle": "Salden",
    "member": "Teilnehmer",
    "paid": "Bezahlt",
    "share": "Anteil",
    "net": "Saldo",
    "legendPositive": "Positiv",
    "legendNegative": "negativ",
    "legendPositiveDesc": "= bekommt Geld zurück",
    "legendNegativeDesc": "= schuldet Geld"
  },
  "footer": {
    "loadSample": "Beispieldaten laden",
    "reset": "Alles zurücksetzen",
    "confirmSample": "Deine aktuellen Daten durch Beispieldaten ersetzen?",
    "confirmReset": "Alle Daten löschen? Das kann nicht rückgängig gemacht werden."
  },
  "sample": {
    "title": "Campingtrip",
    "names": [
      "Lukas",
      "Jonas",
      "Lena",
      "Felix",
      "Mia"
    ],
    "food": "Essen",
    "drinks": "Getränke",
    "firewood": "Brennholz"
  },
  "landing": {
    "heroHeading": "Rechnung teilen und sehen, wer wem was zahlt",
    "heroSub": "Wenn mehrere Leute verschiedene Dinge bezahlen, findet SplitWhom den einfachsten Weg zum Ausgleich — die wenigsten Zahlungen, damit alle quitt sind. Kostenlos, ohne Konto, keine App zum Installieren.",
    "howItWorksTitle": "So funktioniert's",
    "steps": [
      {
        "title": "Alle hinzufügen",
        "body": "Liste die Leute auf, die sich die Ausgaben geteilt haben — Freunde, Mitbewohner, deine Camping-Crew."
      },
      {
        "title": "Eintragen, wer was bezahlt hat",
        "body": "Füge jede Zahlung mit dem Betrag hinzu und wähle genau aus, unter wem sie aufgeteilt wird."
      },
      {
        "title": "Die wenigsten Zahlungen erhalten",
        "body": "SplitWhom zeigt dir sofort, wer wem was zahlt, um mit den wenigsten Überweisungen quitt zu sein."
      }
    ],
    "whyTitle": "Warum SplitWhom",
    "features": [
      {
        "title": "Wenigste Zahlungen",
        "body": "Die meisten Tools zeigen nur Salden. SplitWhom berechnet die minimale Anzahl an Überweisungen, sodass du so wenig wie möglich zahlen musst."
      },
      {
        "title": "Jeden Posten nach deinen Regeln teilen",
        "body": "Essen geteilt, aber nur drei von euch haben Getränke gekauft? Wähle bei jeder einzelnen Ausgabe aus, wer dabei ist."
      },
      {
        "title": "Privat von Grund auf",
        "body": "Keine Anmeldung und kein Server — jede Berechnung läuft in deinem Browser und deine Daten bleiben auf deinem Gerät."
      },
      {
        "title": "Jede Währung",
        "body": "Funktioniert mit USD, EUR, JPY und mehr, mit exakter Rundung, damit kein Cent oder Yen verloren geht."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie teilt man eine Rechnung, wenn mehrere Leute bezahlt haben?",
        "a": "Trage jede Zahlung ein und wer sie geteilt hat. SplitWhom rechnet zusammen, was jeder bezahlt hat und was er schuldet, und zeigt dann die wenigsten Überweisungen, damit alle quitt sind."
      },
      {
        "q": "Ist SplitWhom kostenlos?",
        "a": "Ja, komplett kostenlos. Kein Konto, kein Abo und nichts zu installieren — es läuft direkt in deinem Browser."
      },
      {
        "q": "Kann ich eine einzelne Ausgabe nur unter einigen Leuten aufteilen?",
        "a": "Ja. Bei jeder Zahlung wählst du genau aus, unter wem sie aufgeteilt wird, sodass gemeinsame und nur für einige geltende Kosten korrekt behandelt werden."
      },
      {
        "q": "Funktioniert es für Reisen, Camping und WGs?",
        "a": "Genau dafür ist es gemacht — für jede Situation, in der mehr als eine Person das Geld vorgestreckt hat und ihr fair abrechnen wollt."
      },
      {
        "q": "Sind meine Daten privat?",
        "a": "Ja. Es gibt kein Login und keinen Server. Alle Berechnungen laufen in deinem Browser und deine Daten werden nur auf deinem Gerät gespeichert."
      }
    ]
  },
  "switcher": {
    "label": "Sprache"
  }
};
