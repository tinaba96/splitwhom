import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partagez l'addition et voyez qui doit payer qui",
    "description": "Appli web gratuite, sans inscription, qui partage les dépenses de groupe et montre exactement qui rembourse qui en un minimum de paiements. Idéale pour les voyages, le camping et les colocations.",
    "keywords": [
      "partager l'addition",
      "partager les dépenses",
      "calculer qui doit quoi",
      "qui paie qui",
      "rembourser entre amis",
      "dépenses de groupe",
      "diviser une addition",
      "calculateur de partage de frais"
    ],
    "ogTitle": "SplitWhom — partagez l'addition et voyez qui doit payer qui",
    "ogDescription": "Partagez les dépenses de groupe et remboursez-vous en un minimum de paiements. Sans inscription, gratuit, directement dans votre navigateur."
  },
  "hero": {
    "tagline": "Partagez vos dépenses communes et voyez exactement qui doit payer qui — en un minimum de paiements. Sans inscription, tout se passe dans votre navigateur."
  },
  "setup": {
    "eventName": "Nom de l'événement",
    "eventPlaceholder": "ex. Sortie camping",
    "currency": "Devise"
  },
  "members": {
    "title": "Participants",
    "addPlaceholder": "Ajouter un nom",
    "add": "Ajouter",
    "empty": "Ajoutez tous ceux qui ont partagé les frais.",
    "removeAria": "Retirer {name}",
    "confirmDelete": "Cela supprime aussi {count} paiement(s) effectué(s) par {name}. Continuer ?",
    "peopleLabel": "personnes"
  },
  "payments": {
    "title": "Paiements",
    "itemsLabel": "éléments",
    "addMembersFirst": "Ajoutez d'abord des participants.",
    "paidBy": "Payé par",
    "description": "Description",
    "descPlaceholder": "ex. Repas",
    "amount": "Montant",
    "splitBetween": "Partagé entre",
    "selectAll": "Tout sélectionner",
    "clearAll": "Tout désélectionner",
    "addPayment": "Ajouter le paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tous",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(retiré)",
    "fixedToggle": "Montants fixes (facultatif)",
    "fixedPlaceholder": "partage le reste",
    "fixedTag": "fixe",
    "splitRest": "Reste partagé entre {names}",
    "fixedExceeds": "Les montants fixes dépassent le total."
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le règlement ici.",
    "settlementTitle": "Règlement — un minimum de paiements",
    "total": "Total {amount}",
    "allSettled": "Tout est réglé — personne ne doit rien 🎉",
    "balancesTitle": "Soldes",
    "member": "Participant",
    "paid": "Payé",
    "share": "Part",
    "net": "Solde net",
    "legendPositive": "Positif",
    "legendNegative": "négatif",
    "legendPositiveDesc": "= récupère de l'argent",
    "legendNegativeDesc": "= doit de l'argent"
  },
  "footer": {
    "loadSample": "Charger des données d'exemple",
    "reset": "Tout réinitialiser",
    "confirmSample": "Remplacer vos données actuelles par les données d'exemple ?",
    "confirmReset": "Effacer toutes les données ? Cette action est irréversible."
  },
  "sample": {
    "title": "Sortie camping",
    "names": [
      "Lucas",
      "Camille",
      "Hugo",
      "Léa",
      "Manon"
    ],
    "food": "Repas",
    "drinks": "Boissons",
    "firewood": "Bois de chauffage"
  },
  "landing": {
    "heroHeading": "Partagez l'addition et voyez qui doit payer qui",
    "heroSub": "Quand plusieurs personnes paient des choses différentes, SplitWhom calcule la façon la plus simple de se rembourser — le minimum de paiements pour que tout le monde soit à égalité. Gratuit, sans compte, aucune appli à installer.",
    "howItWorksTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Ajoutez tout le monde",
        "body": "Listez les personnes qui ont partagé les dépenses — amis, colocataires, votre équipe de camping."
      },
      {
        "title": "Indiquez qui a payé quoi",
        "body": "Ajoutez chaque paiement avec son montant, et choisissez précisément entre qui il doit être partagé."
      },
      {
        "title": "Obtenez le minimum de paiements",
        "body": "SplitWhom affiche instantanément qui doit payer qui pour tout régler avec le moins de transferts possible."
      }
    ],
    "whyTitle": "Pourquoi SplitWhom",
    "features": [
      {
        "title": "Un minimum de paiements",
        "body": "La plupart des applis se contentent d'afficher les soldes. SplitWhom calcule l'ensemble minimal de transferts, pour que vous fassiez le moins de paiements possible."
      },
      {
        "title": "Partagez chaque dépense à votre façon",
        "body": "Vous avez partagé le repas mais seulement trois d'entre vous ont pris des boissons ? Choisissez qui est inclus sur chaque dépense."
      },
      {
        "title": "Privé par conception",
        "body": "Aucune inscription, aucun serveur — tous les calculs se font dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "N'importe quelle devise",
        "body": "Fonctionne en USD, EUR, JPY et bien d'autres, avec un arrondi exact pour qu'aucun centime ni yen ne disparaisse."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment partager une addition quand plusieurs personnes ont payé ?",
        "a": "Saisissez chaque paiement et qui l'a partagé. SplitWhom additionne ce que chacun a payé par rapport à ce qu'il doit, puis affiche le minimum de transferts pour mettre tout le monde à égalité."
      },
      {
        "q": "SplitWhom est-il gratuit ?",
        "a": "Oui, totalement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout fonctionne dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une seule dépense entre certaines personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez précisément entre qui il est partagé, afin que les frais communs et les frais d'un sous-groupe soient gérés correctement."
      },
      {
        "q": "Est-ce que ça marche pour les voyages, le camping et les colocations ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé de l'argent et où il faut se rembourser équitablement."
      },
      {
        "q": "Mes données sont-elles privées ?",
        "a": "Oui. Aucune connexion, aucun serveur. Tous les calculs ont lieu dans votre navigateur et vos données sont enregistrées uniquement sur votre appareil."
      }
    ]
  },
  "switcher": {
    "label": "Langue"
  }
};
