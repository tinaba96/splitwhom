import type { Dictionary } from "../types";

export const de: Dictionary = {
  "meta": {
    "title": "SplitWhom — Rechnung teilen & sehen, wer wem zahlt",
    "description": "Kostenlose Web-App ohne Login, die Gruppenausgaben aufteilt und mit den wenigsten Zahlungen zeigt, wer wem genau wie viel schuldet. Ideal für Reisen, Camping und WGs.",
    "keywords": [
      "Rechnung teilen",
      "Kosten teilen",
      "Ausgaben aufteilen",
      "wer schuldet wem",
      "Schulden ausgleichen",
      "Gruppenausgaben",
      "Kostenrechner",
      "Rechnung aufteilen App",
      "Gruppenkasse abrechnen"
    ],
    "ogTitle": "SplitWhom — Rechnung teilen & sehen, wer wem zahlt",
    "ogDescription": "Teile Gruppenausgaben und gleiche Schulden mit den wenigsten Zahlungen aus. Ohne Anmeldung, kostenlos, läuft im Browser."
  },
  "hero": {
    "tagline": "Teile gemeinsame Ausgaben und sieh genau, wer wem zahlt — mit den wenigsten Zahlungen. Ohne Anmeldung, läuft komplett in deinem Browser."
  },
  "setup": {
    "eventName": "Anlass",
    "eventPlaceholder": "z. B. Campingtrip",
    "currency": "Währung"
  },
  "members": {
    "title": "Teilnehmer",
    "addPlaceholder": "Name hinzufügen",
    "add": "Hinzufügen",
    "empty": "Füge alle hinzu, die sich die Kosten geteilt haben.",
    "removeAria": "{name} entfernen",
    "confirmDelete": "Damit werden auch {count} Zahlung(en) von {name} gelöscht. Fortfahren?",
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
    "paidFor": "bezahlte",
    "splitEveryone": "Unter allen aufteilen",
    "splitBetweenNames": "Aufgeteilt unter {names}",
    "deleteAria": "Löschen",
    "removed": "(entfernt)"
  },
  "results": {
    "emptyPrompt": "Füge Teilnehmer und Zahlungen hinzu, um die Abrechnung hier zu sehen.",
    "settlementTitle": "Abrechnung — wenigste Zahlungen",
    "total": "Gesamt {amount}",
    "allSettled": "Alles ausgeglichen — niemand schuldet etwas 🎉",
    "balancesTitle": "Salden",
    "member": "Person",
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
    "heroHeading": "Rechnung teilen und sehen, wer wem zahlt",
    "heroSub": "Wenn mehrere Leute für verschiedene Dinge bezahlen, findet SplitWhom den einfachsten Weg zur Abrechnung — die wenigsten Zahlungen, damit alle quitt sind. Kostenlos, ohne Konto, ohne Installation.",
    "howItWorksTitle": "So funktioniert's",
    "steps": [
      {
        "title": "Alle hinzufügen",
        "body": "Trage alle ein, die sich die Ausgaben geteilt haben — Freunde, Mitbewohner, deine Camping-Crew."
      },
      {
        "title": "Eintragen, wer was bezahlt hat",
        "body": "Füge jede Zahlung mit dem Betrag hinzu und wähle genau aus, unter wem sie aufgeteilt wird."
      },
      {
        "title": "Die wenigsten Zahlungen erhalten",
        "body": "SplitWhom zeigt dir sofort, wer wem zahlt, um mit möglichst wenigen Überweisungen quitt zu sein."
      }
    ],
    "whyTitle": "Warum SplitWhom",
    "features": [
      {
        "title": "Wenigste Zahlungen",
        "body": "Die meisten Splitter zeigen nur Salden. SplitWhom berechnet die minimale Anzahl an Überweisungen, sodass du so wenig wie möglich zahlst."
      },
      {
        "title": "Jeden Posten nach Wunsch teilen",
        "body": "Das Essen geteilt, aber nur drei von euch haben Getränke gekauft? Wähle bei jeder Ausgabe einzeln, wer dabei ist."
      },
      {
        "title": "Privat von Grund auf",
        "body": "Keine Anmeldung, kein Server — jede Berechnung läuft in deinem Browser und deine Daten bleiben auf deinem Gerät."
      },
      {
        "title": "Jede Währung",
        "body": "Funktioniert mit USD, EUR, JPY und mehr, mit exakter Rundung, sodass kein Cent oder Yen verloren geht."
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
        "a": "Ja, komplett kostenlos. Kein Konto, kein Abo und nichts zu installieren — es läuft in deinem Webbrowser."
      },
      {
        "q": "Kann ich eine einzelne Ausgabe nur unter manchen Leuten teilen?",
        "a": "Ja. Bei jeder Zahlung wählst du genau aus, unter wem sie aufgeteilt wird, sodass gemeinsame Kosten und Kosten für nur einige korrekt behandelt werden."
      },
      {
        "q": "Funktioniert es für Reisen, Camping und WGs?",
        "a": "Genau dafür ist es gemacht — jede Situation, in der mehr als eine Person ausgelegt hat und ihr fair abrechnen müsst."
      },
      {
        "q": "Sind meine Daten privat?",
        "a": "Ja. Es gibt keinen Login und keinen Server. Alle Berechnungen passieren in deinem Browser und deine Daten werden nur auf deinem Gerät gespeichert."
      }
    ]
  },
  "switcher": {
    "label": "Sprache"
  }
};
