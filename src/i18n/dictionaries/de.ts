import type { Dictionary } from "../types";

export const de: Dictionary = {
  "meta": {
    "title": "SplitWhom — Rechnung teilen & sehen, wer wem was schuldet",
    "description": "Kostenlose Web-App ohne Login, die Gruppenausgaben aufteilt und genau zeigt, wer wem mit den wenigsten Zahlungen Geld schuldet. Perfekt für Reisen, Camping und WGs.",
    "keywords": [
      "Rechnung teilen",
      "Ausgaben aufteilen",
      "Kosten teilen",
      "wer schuldet wem",
      "Schulden ausgleichen",
      "Gruppenausgaben",
      "Rechnung aufteilen Rechner",
      "WG Kosten aufteilen",
      "Reisekosten teilen"
    ],
    "ogTitle": "SplitWhom — Rechnung teilen & sehen, wer wem was schuldet",
    "ogDescription": "Gruppenausgaben aufteilen und mit den wenigsten Zahlungen ausgleichen. Ohne Anmeldung, kostenlos, läuft im Browser."
  },
  "hero": {
    "tagline": "Gemeinsame Ausgaben aufteilen und genau sehen, wer wem zahlt — mit den wenigsten Zahlungen. Ohne Anmeldung, läuft komplett im Browser."
  },
  "setup": {
    "eventName": "Anlass",
    "eventPlaceholder": "z. B. Campingausflug",
    "currency": "Währung"
  },
  "members": {
    "title": "Teilnehmer",
    "addPlaceholder": "Name hinzufügen",
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
    "selectAll": "Alle auswählen",
    "clearAll": "Alle abwählen",
    "addPayment": "Zahlung hinzufügen",
    "paidFor": "zahlte für",
    "splitEveryone": "Unter allen aufteilen",
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
    "emptyPrompt": "Füge Teilnehmer und Zahlungen hinzu, um den Ausgleich hier zu sehen.",
    "settlementTitle": "Ausgleich — wenigste Zahlungen",
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
    "confirmSample": "Aktuelle Daten durch Beispieldaten ersetzen?",
    "confirmReset": "Alle Daten löschen? Das kann nicht rückgängig gemacht werden."
  },
  "sample": {
    "title": "Campingausflug",
    "names": [
      "Lukas",
      "Jonas",
      "Lena",
      "Finn",
      "Mia"
    ],
    "food": "Essen",
    "drinks": "Getränke",
    "firewood": "Brennholz"
  },
  "landing": {
    "heroHeading": "Rechnung teilen und sehen, wer wem was schuldet",
    "heroSub": "Wenn mehrere Leute verschiedene Dinge bezahlen, berechnet SplitWhom den einfachsten Weg zum Ausgleich — die wenigsten Zahlungen, damit alle quitt sind. Kostenlos, kein Konto, keine App nötig.",
    "howItWorksTitle": "So funktioniert's",
    "steps": [
      {
        "title": "Alle hinzufügen",
        "body": "Liste die Leute auf, die sich die Ausgaben geteilt haben — Freunde, Mitbewohner, deine Camping-Crew."
      },
      {
        "title": "Eintragen, wer was bezahlt hat",
        "body": "Füge jede Zahlung mit Betrag hinzu und wähle genau aus, unter wem sie aufgeteilt wird."
      },
      {
        "title": "Wenigste Zahlungen erhalten",
        "body": "SplitWhom zeigt dir sofort, wer wem zahlt, um mit den wenigsten Überweisungen auszugleichen."
      }
    ],
    "whyTitle": "Warum SplitWhom",
    "features": [
      {
        "title": "Wenigste Zahlungen",
        "body": "Die meisten Tools zeigen nur Salden. SplitWhom berechnet die minimale Anzahl an Überweisungen, damit du so wenig wie möglich zahlen musst."
      },
      {
        "title": "Jeden Posten individuell aufteilen",
        "body": "Das Essen geteilt, aber nur drei von euch haben Getränke gekauft? Wähle bei jeder einzelnen Ausgabe, wer dabei ist."
      },
      {
        "title": "Privat von Grund auf",
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
        "q": "Wie teilt man eine Rechnung auf, wenn mehrere Leute bezahlt haben?",
        "a": "Trage jede Zahlung ein und wer sie sich geteilt hat. SplitWhom rechnet zusammen, was jeder bezahlt hat und was er schuldet, und zeigt dann die wenigsten Überweisungen, damit alle quitt sind."
      },
      {
        "q": "Ist SplitWhom kostenlos?",
        "a": "Ja, völlig kostenlos. Kein Konto, kein Abo und nichts zu installieren — es läuft direkt im Browser."
      },
      {
        "q": "Kann ich eine einzelne Ausgabe nur zwischen einigen Personen aufteilen?",
        "a": "Ja. Bei jeder Zahlung wählst du genau aus, unter wem sie aufgeteilt wird, sodass geteilte Kosten und reine Gruppenkosten beide korrekt behandelt werden."
      },
      {
        "q": "Funktioniert das für Reisen, Camping und WGs?",
        "a": "Genau dafür ist es gedacht — jede Situation, in der mehr als eine Person in Vorlage getreten ist und ihr fair ausgleichen müsst."
      },
      {
        "q": "Sind meine Daten privat?",
        "a": "Ja. Es gibt keinen Login und keinen Server. Alle Berechnungen laufen in deinem Browser und deine Daten werden nur auf deinem Gerät gespeichert."
      }
    ]
  },
  "switcher": {
    "label": "Sprache"
  }
};
