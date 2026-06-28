import type { Dictionary } from "../types";

export const de: Dictionary = {
  "meta": {
    "title": "SplitWhom — Rechnung teilen & sehen, wer wem was schuldet",
    "description": "Kostenlose Web-App ohne Login, die Gruppenausgaben aufteilt und genau zeigt, wer wem mit den wenigsten Zahlungen Geld schuldet. Perfekt für Reisen, Camping und WGs.",
    "keywords": [
      "Rechnung teilen",
      "Kosten aufteilen",
      "Ausgaben teilen",
      "wer schuldet wem",
      "Gruppenausgaben aufteilen",
      "Schulden ausgleichen",
      "Geld zurückzahlen Gruppe",
      "Kostenrechner Gruppe"
    ],
    "ogTitle": "SplitWhom — Rechnung teilen & sehen, wer wem was schuldet",
    "ogDescription": "Gruppenausgaben aufteilen und mit den wenigsten Zahlungen ausgleichen. Ohne Anmeldung, kostenlos, läuft im Browser."
  },
  "hero": {
    "tagline": "Gemeinsame Ausgaben aufteilen und genau sehen, wer wem was schuldet — mit den wenigsten Zahlungen. Ohne Anmeldung, läuft komplett im Browser."
  },
  "setup": {
    "eventName": "Anlass",
    "eventPlaceholder": "z.B. Campingtrip",
    "currency": "Währung"
  },
  "members": {
    "title": "Mitglieder",
    "addPlaceholder": "Name hinzufügen",
    "add": "Hinzufügen",
    "empty": "Füge alle hinzu, die sich die Kosten geteilt haben.",
    "removeAria": "{name} entfernen",
    "confirmDelete": "Damit werden auch {count} Zahlung(en) von {name} gelöscht. Fortfahren?",
    "peopleLabel": "Personen",
    "notePlaceholder": "E-Mail / Telefon / Zahlungs-ID (optional)",
    "contactsTitle": "Mitglieder & Zahlungsinfos",
    "copy": "Kopieren",
    "copied": "Kopiert!"
  },
  "payments": {
    "title": "Zahlungen",
    "itemsLabel": "Einträge",
    "addMembersFirst": "Füge zuerst Mitglieder hinzu.",
    "paidBy": "Bezahlt von",
    "description": "Beschreibung",
    "descPlaceholder": "z.B. Essen",
    "amount": "Betrag",
    "splitBetween": "Aufteilen unter",
    "selectAll": "Alle auswählen",
    "clearAll": "Alle abwählen",
    "addPayment": "Zahlung hinzufügen",
    "paidFor": "zahlte für",
    "splitEveryone": "Auf alle aufteilen",
    "splitBetweenNames": "Aufteilen unter {names}",
    "deleteAria": "Löschen",
    "removed": "(entfernt)",
    "capToggle": "Ausgabenlimits (optional)",
    "capPlaceholder": "kein Limit",
    "capTag": "max.",
    "splitRest": "Rest aufteilen unter {names}",
    "capsTooLow": "Diese Limits decken den Gesamtbetrag nicht."
  },
  "results": {
    "emptyPrompt": "Füge Mitglieder und Zahlungen hinzu, um hier den Ausgleich zu sehen.",
    "settlementTitle": "Ausgleich — wenigste Zahlungen",
    "total": "Gesamt {amount}",
    "allSettled": "Alles ausgeglichen — niemand schuldet etwas 🎉",
    "balancesTitle": "Salden",
    "member": "Mitglied",
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
      "Felix",
      "Lena",
      "Jonas",
      "Mia"
    ],
    "food": "Essen",
    "drinks": "Getränke",
    "firewood": "Brennholz"
  },
  "landing": {
    "heroHeading": "Rechnung teilen und sehen, wer wem was schuldet",
    "heroSub": "Wenn mehrere Leute verschiedene Dinge bezahlen, ermittelt SplitWhom den einfachsten Weg zum Ausgleich — die wenigsten Zahlungen, damit alle quitt sind. Kostenlos, kein Konto, keine App nötig.",
    "howItWorksTitle": "So funktioniert's",
    "steps": [
      {
        "title": "Alle hinzufügen",
        "body": "Liste die Personen auf, die sich die Ausgaben geteilt haben — Freunde, Mitbewohner, deine Camping-Crew."
      },
      {
        "title": "Eingeben, wer was bezahlt hat",
        "body": "Füge jede Zahlung mit dem Betrag hinzu und wähle genau aus, unter wem sie aufgeteilt wird."
      },
      {
        "title": "Die wenigsten Zahlungen erhalten",
        "body": "SplitWhom zeigt sofort, wer wem zahlt, um mit den wenigsten Überweisungen auszugleichen."
      }
    ],
    "whyTitle": "Warum SplitWhom",
    "features": [
      {
        "title": "Wenigste Zahlungen",
        "body": "Die meisten Apps zeigen nur Salden. SplitWhom berechnet die minimale Anzahl an Überweisungen, damit du so wenig wie möglich zahlst."
      },
      {
        "title": "Jeden Posten flexibel aufteilen",
        "body": "Das Essen geteilt, aber nur drei von euch haben Getränke gekauft? Wähle bei jeder Ausgabe, wer dabei ist."
      },
      {
        "title": "Privat by Design",
        "body": "Keine Anmeldung, kein Server — jede Berechnung läuft in deinem Browser und deine Daten bleiben auf deinem Gerät."
      },
      {
        "title": "Jede Währung",
        "body": "Funktioniert mit EUR, USD, JPY und mehr, mit exakter Rundung, damit kein Cent verloren geht."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie teilt man eine Rechnung, wenn mehrere Leute bezahlt haben?",
        "a": "Gib jede Zahlung ein und wer sie geteilt hat. SplitWhom rechnet aus, was jeder bezahlt hat und was er schuldet, und zeigt dann die wenigsten Überweisungen, damit alle quitt sind."
      },
      {
        "q": "Ist SplitWhom kostenlos?",
        "a": "Ja, völlig kostenlos. Kein Konto, kein Abo und nichts zu installieren — es läuft in deinem Webbrowser."
      },
      {
        "q": "Kann ich eine einzelne Ausgabe nur unter manchen aufteilen?",
        "a": "Ja. Für jede Zahlung wählst du genau, unter wem sie aufgeteilt wird — so werden gemeinsame und nur für eine Gruppe anfallende Kosten korrekt behandelt."
      },
      {
        "q": "Funktioniert es für Reisen, Camping und WGs?",
        "a": "Genau dafür ist es gemacht — jede Situation, in der mehr als eine Person Geld vorgestreckt hat und ihr fair ausgleichen müsst."
      },
      {
        "q": "Sind meine Daten privat?",
        "a": "Ja. Es gibt kein Login und keinen Server. Alle Berechnungen laufen in deinem Browser und deine Daten werden nur auf deinem Gerät gespeichert."
      }
    ]
  },
  "switcher": {
    "label": "Sprache"
  },
  "share": {
    "share": "Teilen",
    "copied": "Link kopiert!",
    "edit": "Bearbeiten",
    "readonlyNote": "Geteiltes Ergebnis · nur Ansicht",
    "invalid": "Dieser geteilte Link ist ungültig oder leer.",
    "ctaTitle": "Teile deine eigenen Gruppenausgaben",
    "ctaButton": "SplitWhom öffnen"
  }
};
