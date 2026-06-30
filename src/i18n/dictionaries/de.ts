import type { Dictionary } from "../types";

export const de: Dictionary = {
  "meta": {
    "title": "SplitWhom — Rechnung teilen & sehen, wer wem zahlt",
    "description": "Kostenlose Web-App ohne Anmeldung, die Gruppenausgaben aufteilt und genau zeigt, wer wem zahlt – mit möglichst wenigen Zahlungen. Ideal für Reisen, Camping und WGs.",
    "keywords": [
      "Rechnung teilen",
      "Kosten aufteilen",
      "Ausgaben teilen App",
      "wer zahlt wem",
      "Schulden ausgleichen",
      "Gruppenausgaben aufteilen",
      "Kostenrechner Gruppe",
      "Geld teilen App"
    ],
    "ogTitle": "SplitWhom — Rechnung teilen & sehen, wer wem zahlt",
    "ogDescription": "Gruppenausgaben aufteilen und mit möglichst wenigen Zahlungen ausgleichen. Ohne Anmeldung, kostenlos, läuft im Browser."
  },
  "hero": {
    "tagline": "Teile gemeinsame Ausgaben und sieh genau, wer wem zahlt – mit möglichst wenigen Zahlungen. Ohne Anmeldung, läuft komplett in deinem Browser."
  },
  "setup": {
    "eventName": "Name des Events",
    "eventPlaceholder": "z. B. Campingausflug",
    "currency": "Währung"
  },
  "members": {
    "title": "Teilnehmer",
    "addPlaceholder": "Name hinzufügen",
    "add": "Hinzufügen",
    "empty": "Füge alle hinzu, die sich die Kosten geteilt haben.",
    "removeAria": "{name} entfernen",
    "confirmDelete": "Damit werden auch {count} Zahlung(en) von {name} gelöscht. Fortfahren?",
    "peopleLabel": "Personen",
    "notePlaceholder": "E-Mail / Telefon / Zahlungs-ID (optional)",
    "contactsTitle": "Teilnehmer & Zahlungsinfos",
    "copy": "Kopieren",
    "copied": "Kopiert!"
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
    "paidFor": "bezahlt für",
    "splitEveryone": "Unter allen aufteilen",
    "splitBetweenNames": "Aufgeteilt unter {names}",
    "deleteAria": "Löschen",
    "removed": "(entfernt)",
    "capToggle": "Ausgabenlimits (optional)",
    "capPlaceholder": "kein Limit",
    "capTag": "max.",
    "splitRest": "Rest aufgeteilt unter {names}",
    "capsTooLow": "Diese Limits decken den Gesamtbetrag nicht ab."
  },
  "results": {
    "emptyPrompt": "Füge Teilnehmer und Zahlungen hinzu, um hier den Ausgleich zu sehen.",
    "settlementTitle": "Ausgleich – möglichst wenige Zahlungen",
    "total": "Gesamt {amount}",
    "allSettled": "Alles ausgeglichen – niemand schuldet etwas 🎉",
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
      "Ben",
      "Lena",
      "Felix",
      "Emma"
    ],
    "food": "Essen",
    "drinks": "Getränke",
    "firewood": "Brennholz"
  },
  "landing": {
    "heroHeading": "Rechnung teilen und sehen, wer wem zahlt",
    "heroSub": "Wenn mehrere Leute für verschiedene Dinge bezahlen, ermittelt SplitWhom den einfachsten Weg zum Ausgleich – mit den wenigsten Zahlungen, damit am Ende alle quitt sind. Kostenlos, ohne Konto, ohne App-Installation.",
    "howItWorksTitle": "So funktioniert's",
    "steps": [
      {
        "title": "Alle hinzufügen",
        "body": "Liste die Leute auf, die sich die Ausgaben geteilt haben – Freunde, Mitbewohner, deine Camping-Crew."
      },
      {
        "title": "Eintragen, wer was bezahlt hat",
        "body": "Füge jede Zahlung mit dem Betrag hinzu und wähle genau aus, unter wem sie aufgeteilt werden soll."
      },
      {
        "title": "Die wenigsten Zahlungen erhalten",
        "body": "SplitWhom zeigt dir sofort, wer wem zahlt, um mit der geringsten Anzahl an Überweisungen alles auszugleichen."
      }
    ],
    "whyTitle": "Warum SplitWhom",
    "features": [
      {
        "title": "Wenigste Zahlungen",
        "body": "Die meisten Tools zeigen nur Salden an. SplitWhom berechnet die minimale Anzahl an Überweisungen, damit du so wenig wie möglich zahlen musst."
      },
      {
        "title": "Jeden Posten nach deinen Wünschen aufteilen",
        "body": "Das Essen geteilt, aber nur drei von euch haben Getränke gekauft? Wähle bei jeder einzelnen Ausgabe, wer beteiligt ist."
      },
      {
        "title": "Privat von Grund auf",
        "body": "Keine Anmeldung und kein Server – jede Berechnung läuft in deinem Browser und deine Daten bleiben auf deinem Gerät."
      },
      {
        "title": "Jede Währung",
        "body": "Funktioniert mit USD, EUR, JPY und mehr, mit exakter Rundung, damit kein Cent und kein Yen verloren geht."
      }
    ],
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie unterscheidet sich SplitWhom von Apps wie Splitwise?",
        "a": "SplitWhom ist für schnelle, einmalige Abrechnungen gemacht: kein Konto, keine App-Installation, kein Server. Alles läuft privat im Browser, deine Daten verlassen nie dein Gerät, und du kannst sogar festlegen, wie viel eine Person höchstens zahlt, während SplitWhom den Rest automatisch verteilt. Link öffnen, Rechnung teilen und in Sekunden eine schreibgeschützte Übersicht weitergeben – völlig kostenlos und wunderbar einfach."
      },
      {
        "q": "Wie teilt man eine Rechnung auf, wenn mehrere bezahlt haben?",
        "a": "Trage jede Zahlung ein und wer daran beteiligt war. SplitWhom verrechnet, was jeder bezahlt hat, mit dem, was jeder schuldet, und zeigt dann die wenigsten Überweisungen, damit alle quitt sind."
      },
      {
        "q": "Ist SplitWhom kostenlos?",
        "a": "Ja, völlig kostenlos. Es gibt kein Konto, kein Abo und nichts zu installieren – es läuft in deinem Webbrowser."
      },
      {
        "q": "Kann ich eine einzelne Ausgabe nur unter einigen Personen aufteilen?",
        "a": "Ja. Bei jeder Zahlung wählst du genau aus, unter wem sie aufgeteilt wird, sodass gemeinsame Kosten und Kosten für nur einen Teil der Gruppe korrekt behandelt werden."
      },
      {
        "q": "Funktioniert es für Reisen, Camping und WGs?",
        "a": "Genau dafür ist es gemacht – für jede Situation, in der mehr als eine Person Geld ausgelegt hat und ihr fair abrechnen müsst."
      },
      {
        "q": "Sind meine Daten privat?",
        "a": "Ja. Es gibt keine Anmeldung und keinen Server. Alle Berechnungen finden in deinem Browser statt und deine Daten werden nur auf deinem Gerät gespeichert."
      },
      {
        "q": "Kann ich begrenzen, wie viel eine Person zahlt?",
        "a": "Ja. Bei jeder Zahlung kannst du für bestimmte Personen ein Maximum (Limit) festlegen; sie zahlen höchstens diesen Betrag und der Rest wird unter den anderen aufgeteilt."
      },
      {
        "q": "Kann ich das Ergebnis mit meiner Gruppe teilen?",
        "a": "Ja. Tippe auf Teilen, um einen Link zu kopieren, der eine schreibgeschützte Übersicht zeigt, wer wem zahlt. Die Daten sind im Link selbst codiert – nichts wird auf einem Server gespeichert."
      },
      {
        "q": "Funktioniert es auf meinem Handy?",
        "a": "Ja. SplitWhom läuft in jedem modernen Browser auf Handy oder Desktop – es gibt keine App zu installieren."
      }
    ],
    "useCasesTitle": "Gemacht für echte Gruppenausgaben",
    "useCases": [
      {
        "title": "Camping & Outdoor-Trips",
        "body": "Einer kauft das Essen, ein anderer das Brennholz, ein Dritter die Ausrüstung – SplitWhom gleicht alles mit den wenigsten Zahlungen aus."
      },
      {
        "title": "Reisen & Urlaub",
        "body": "Hotels, Taxis und Abendessen, von verschiedenen Leuten über die ganze Reise bezahlt? Gleicht am Ende alles mit einer klaren Liste aus."
      },
      {
        "title": "WGs & Mitbewohner",
        "body": "Teile Einkäufe, Nebenkosten und Verbrauchsmaterial – und wähle genau, wer sich an jeder Ausgabe beteiligt."
      },
      {
        "title": "Partys, Grillabende & Gruppenessen",
        "body": "Wenn mehrere für ein Treffen zusammenlegen, siehst du auf einen Blick, wer wem etwas schuldet."
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
  },
  "site": {
    "footerTagline": "Rechnung teilen und sehen, wer wem zahlt – kostenlos und ohne Anmeldung.",
    "privacy": "Datenschutzerklärung",
    "terms": "Nutzungsbedingungen",
    "about": "Über uns",
    "contact": "Kontakt",
    "rights": "Alle Rechte vorbehalten."
  },
  "privacy": {
    "title": "Datenschutzerklärung",
    "updatedLabel": "Zuletzt aktualisiert",
    "intro": "Diese Datenschutzerklärung erklärt, wie SplitWhom mit Informationen umgeht, wenn du die Website unter splitwhom.com nutzt. SplitWhom hat keine Benutzerkonten und keine serverseitige Datenbank – die von dir erstellte Abrechnung bleibt in deinem eigenen Browser.",
    "sections": [
      {
        "heading": "Von dir eingegebene Informationen",
        "body": "Die Teilnehmer, Zahlungen und Notizen, die du eingibst, werden ausschließlich im lokalen Speicher deines Browsers auf deinem Gerät gespeichert. Sie werden nicht an unsere Server übertragen oder dort gespeichert, da SplitWhom keine Backend-Datenbank besitzt."
      },
      {
        "heading": "Geteilte Links",
        "body": "Wenn du einen Teilen-Link erstellst, werden die Abrechnungsdaten komprimiert und im URL-Fragment des Links (nach dem #-Zeichen) codiert. Sie werden an keinen Server gesendet. Jeder, dem du den Link gibst, kann diese Daten sehen, teile ihn also nur mit Personen, für die er bestimmt ist."
      },
      {
        "heading": "Cookies und lokaler Speicher",
        "body": "SplitWhom selbst nutzt den lokalen Speicher deines Browsers, um deine aktuelle Abrechnung zu merken. Wir setzen keine eigenen Tracking-Cookies. Die unten genannten Drittanbieterdienste können jedoch Cookies in deinem Browser setzen."
      },
      {
        "heading": "Analyse",
        "body": "Wir verwenden Google Analytics 4, um zu verstehen, wie die Website genutzt wird (zum Beispiel Seitenaufrufe und ungefährer Standort). Google kann Cookies setzen und diese Daten gemäß seinen eigenen Richtlinien verarbeiten. Einzelheiten findest du in der Datenschutzerklärung von Google unter policies.google.com/privacy."
      },
      {
        "heading": "Werbung",
        "body": "Wir verwenden Google AdSense, um Anzeigen einzublenden. Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen basierend auf deinen früheren Besuchen dieser und anderer Websites zu schalten. Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, dir Anzeigen zu schalten. Du kannst personalisierte Werbung deaktivieren, indem du die Anzeigeneinstellungen von Google unter adsettings.google.com aufrufst, oder die Verwendung von Cookies durch Drittanbieter unter aboutads.info deaktivieren."
      },
      {
        "heading": "Einwilligung im EWR, im Vereinigten Königreich und in der Schweiz",
        "body": "Wenn du dich im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in der Schweiz befindest, wird eine Einwilligungsmeldung angezeigt, damit du wie gesetzlich vorgeschrieben wählen kannst, wie deine Daten für Werbung verwendet werden."
      },
      {
        "heading": "Kinder",
        "body": "SplitWhom richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen."
      },
      {
        "heading": "Deine Wahlmöglichkeiten",
        "body": "Du kannst deine Daten jederzeit löschen, indem du die Zurücksetzen-Schaltfläche verwendest oder deinen Browser-Speicher leerst, die Werbepersonalisierung über die oben genannten Steuerungen ablehnen oder verwalten und bei Bedarf einen Werbe-/Tracker-Blocker im Browser nutzen."
      },
      {
        "heading": "Änderungen dieser Erklärung",
        "body": "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch das oben angezeigte Datum kenntlich gemacht."
      },
      {
        "heading": "Kontakt",
        "body": "Wenn du Fragen zu dieser Erklärung hast, kontaktiere uns unter contact@splitwhom.com."
      }
    ]
  },
  "terms": {
    "title": "Nutzungsbedingungen",
    "updatedLabel": "Zuletzt aktualisiert",
    "intro": "Durch die Nutzung von SplitWhom unter splitwhom.com stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze die Website bitte nicht.",
    "sections": [
      {
        "heading": "Der Dienst",
        "body": "SplitWhom ist ein kostenloses Tool, das Gruppen hilft, gemeinsame Ausgaben aufzuteilen und zu sehen, wer wem zahlt. Es erfordert kein Konto und läuft in deinem Browser."
      },
      {
        "heading": "Nutzung nach eigenem Ermessen",
        "body": "SplitWhom wird der Einfachheit halber bereitgestellt. Überprüfe die Ergebnisse immer, bevor du Geld überweist. Du bist dafür verantwortlich, wie du die Berechnungen nutzt, und für alle Zahlungen, die du leistest."
      },
      {
        "heading": "Keine Gewährleistung",
        "body": "Der Dienst wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung, einschließlich Genauigkeit, Eignung für einen bestimmten Zweck oder ununterbrochener Verfügbarkeit."
      },
      {
        "heading": "Haftungsbeschränkung",
        "body": "Soweit gesetzlich zulässig, haften SplitWhom und sein Betreiber nicht für indirekte, zufällige oder Folgeschäden oder für Verluste, die aus deiner Nutzung der Website entstehen."
      },
      {
        "heading": "Zulässige Nutzung",
        "body": "Nutze die Website nicht für rechtswidrige Zwecke oder auf eine Weise, die sie beschädigen, deaktivieren oder beeinträchtigen könnte."
      },
      {
        "heading": "Änderungen",
        "body": "Wir können diese Bedingungen oder den Dienst jederzeit aktualisieren. Die fortgesetzte Nutzung nach Änderungen bedeutet, dass du die aktualisierten Bedingungen akzeptierst."
      },
      {
        "heading": "Kontakt",
        "body": "Fragen zu diesen Bedingungen? Kontaktiere uns unter contact@splitwhom.com."
      }
    ]
  },
  "about": {
    "title": "Über SplitWhom",
    "paragraphs": [
      "SplitWhom ist eine kostenlose Web-App ohne Anmeldung, die das Aufteilen gemeinsamer Gruppenausgaben einfach macht. Statt nur Salden anzuzeigen, berechnet sie die wenigsten nötigen Zahlungen, damit am Ende alle quitt sind – ideal für Reisen, Camping, WGs und Partys.",
      "Sie ist von Grund auf auf Privatsphäre ausgelegt: Es gibt keine Konten und keine serverseitige Datenbank. Jede Berechnung läuft in deinem Browser, und deine Daten bleiben auf deinem Gerät, sofern du dich nicht entscheidest, einen Link zu teilen.",
      "SplitWhom ist in vielen Sprachen verfügbar und kostenlos nutzbar, finanziert durch Werbung."
    ],
    "contactHeading": "Kontakt",
    "contactBody": "Fragen, Feedback oder Ideen? Erreiche uns unter"
  },
  "crossPromo": {
    "eyebrow": "Vom SplitWhom-Team",
    "title": "Mit der Gruppe unterwegs? Triff einen Local",
    "body": "Shenzhen Buddies bringt Reisende aus aller Welt mit Einheimischen zusammen, die ihre Interessen teilen – und zeigt ihnen die Stadt.",
    "cta": "Shenzhen Buddies entdecken"
  }
};
