import type { Dictionary } from "../types";

export const it: Dictionary = {
  "meta": {
    "title": "SplitWhom — dividi il conto e scopri chi paga chi",
    "description": "Web app gratuita e senza registrazione che divide le spese di gruppo e mostra esattamente chi paga chi con il minor numero di pagamenti. Perfetta per viaggi, campeggi e case condivise.",
    "keywords": [
      "dividere il conto",
      "dividere le spese",
      "calcolo spese di gruppo",
      "chi paga chi",
      "saldare i conti",
      "spese condivise",
      "dividere le spese tra amici",
      "calcolatore spese viaggio",
      "app per dividere le spese",
      "dividere conto ristorante"
    ],
    "ogTitle": "SplitWhom — dividi il conto e scopri chi paga chi",
    "ogDescription": "Dividi le spese di gruppo e salda i conti con il minor numero di pagamenti. Senza registrazione, gratis, direttamente nel browser."
  },
  "hero": {
    "tagline": "Dividi le spese condivise e scopri esattamente chi paga chi, con il minor numero di pagamenti. Senza registrazione, tutto nel tuo browser."
  },
  "setup": {
    "eventName": "Nome dell'evento",
    "eventPlaceholder": "es. Viaggio in campeggio",
    "currency": "Valuta"
  },
  "members": {
    "title": "Partecipanti",
    "addPlaceholder": "Aggiungi un nome",
    "add": "Aggiungi",
    "empty": "Aggiungi tutti quelli che hanno condiviso le spese.",
    "removeAria": "Rimuovi {name}",
    "confirmDelete": "Verranno eliminati anche {count} pagamento/i effettuati da {name}. Continuare?",
    "peopleLabel": "persone"
  },
  "payments": {
    "title": "Pagamenti",
    "itemsLabel": "voci",
    "addMembersFirst": "Aggiungi prima i partecipanti.",
    "paidBy": "Pagato da",
    "description": "Descrizione",
    "descPlaceholder": "es. Cibo",
    "amount": "Importo",
    "splitBetween": "Dividi tra",
    "selectAll": "Seleziona tutti",
    "clearAll": "Deseleziona tutti",
    "addPayment": "Aggiungi pagamento",
    "paidFor": "ha pagato",
    "splitEveryone": "Diviso tra tutti",
    "splitBetweenNames": "Diviso tra {names}",
    "deleteAria": "Elimina",
    "removed": "(rimosso)",
    "capToggle": "Limiti di spesa (facoltativo)",
    "capPlaceholder": "nessun limite",
    "capTag": "max",
    "splitRest": "Resto diviso tra {names}",
    "capsTooLow": "Questi limiti non coprono il totale."
  },
  "results": {
    "emptyPrompt": "Aggiungi partecipanti e pagamenti per vedere qui il saldo dei conti.",
    "settlementTitle": "Saldo — minor numero di pagamenti",
    "total": "Totale {amount}",
    "allSettled": "Tutto saldato — nessuno deve niente 🎉",
    "balancesTitle": "Bilanci",
    "member": "Partecipante",
    "paid": "Pagato",
    "share": "Quota",
    "net": "Netto",
    "legendPositive": "Positivo",
    "legendNegative": "negativo",
    "legendPositiveDesc": "= riceve denaro",
    "legendNegativeDesc": "= deve denaro"
  },
  "footer": {
    "loadSample": "Carica dati di esempio",
    "reset": "Azzera tutto",
    "confirmSample": "Sostituire i dati attuali con quelli di esempio?",
    "confirmReset": "Cancellare tutti i dati? L'operazione è irreversibile."
  },
  "sample": {
    "title": "Viaggio in campeggio",
    "names": [
      "Luca",
      "Marco",
      "Giulia",
      "Sofia",
      "Matteo"
    ],
    "food": "Cibo",
    "drinks": "Bevande",
    "firewood": "Legna da ardere"
  },
  "landing": {
    "heroHeading": "Dividi il conto e scopri chi paga chi",
    "heroSub": "Quando più persone pagano cose diverse, SplitWhom trova il modo più semplice per saldare i conti: il minor numero di pagamenti per mettere tutti in pari. Gratis, senza account, senza app da installare.",
    "howItWorksTitle": "Come funziona",
    "steps": [
      {
        "title": "Aggiungi tutti",
        "body": "Elenca le persone che hanno condiviso le spese: amici, coinquilini, i compagni di campeggio."
      },
      {
        "title": "Inserisci chi ha pagato cosa",
        "body": "Aggiungi ogni pagamento con l'importo e scegli esattamente tra chi va diviso."
      },
      {
        "title": "Ottieni il minor numero di pagamenti",
        "body": "SplitWhom ti mostra subito chi paga chi per saldare i conti con il minor numero di trasferimenti."
      }
    ],
    "whyTitle": "Perché SplitWhom",
    "features": [
      {
        "title": "Minor numero di pagamenti",
        "body": "La maggior parte delle app mostra solo i bilanci. SplitWhom calcola l'insieme minimo di trasferimenti, così fai meno pagamenti possibile."
      },
      {
        "title": "Dividi ogni voce a modo tuo",
        "body": "Avete condiviso il cibo ma solo in tre avete preso da bere? Scegli chi è incluso in ogni singola spesa."
      },
      {
        "title": "Privato per natura",
        "body": "Senza registrazione e senza server: ogni calcolo avviene nel tuo browser e i tuoi dati restano sul tuo dispositivo."
      },
      {
        "title": "Qualsiasi valuta",
        "body": "Funziona con USD, EUR, JPY e altre, con arrotondamenti precisi così non si perde nemmeno un centesimo."
      }
    ],
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Come si divide un conto quando hanno pagato più persone?",
        "a": "Inserisci ogni pagamento e chi l'ha condiviso. SplitWhom somma quanto ha pagato ciascuno rispetto a quanto deve, poi mostra il minor numero di trasferimenti per mettere tutti in pari."
      },
      {
        "q": "SplitWhom è gratis?",
        "a": "Sì, completamente gratis. Nessun account, nessun abbonamento e niente da installare: funziona direttamente nel browser."
      },
      {
        "q": "Posso dividere una singola spesa solo tra alcune persone?",
        "a": "Sì. Per ogni pagamento scegli esattamente tra chi va diviso, così le spese condivise e quelle di gruppo vengono gestite correttamente."
      },
      {
        "q": "Funziona per viaggi, campeggi e coinquilini?",
        "a": "È esattamente il suo scopo: qualsiasi situazione in cui più di una persona ha anticipato i soldi e bisogna saldare i conti in modo equo."
      },
      {
        "q": "I miei dati sono privati?",
        "a": "Sì. Nessun login e nessun server. Tutti i calcoli avvengono nel tuo browser e i tuoi dati sono salvati solo sul tuo dispositivo."
      }
    ]
  },
  "switcher": {
    "label": "Lingua"
  },
  "share": {
    "share": "Condividi",
    "copied": "Link copiato!",
    "edit": "Modifica",
    "readonlyNote": "Risultato condiviso · solo lettura",
    "invalid": "Questo link condiviso non è valido o è vuoto.",
    "ctaTitle": "Dividi le tue spese di gruppo",
    "ctaButton": "Apri SplitWhom"
  }
};
