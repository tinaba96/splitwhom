import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partagez l'addition et voyez qui paie qui",
    "description": "Application web gratuite et sans inscription qui partage les dépenses de groupe et montre exactement qui paie qui en un minimum de remboursements. Idéale pour les voyages, le camping et la colocation.",
    "keywords": [
      "partager l'addition",
      "partager les dépenses",
      "calcul partage de frais",
      "qui paie qui",
      "rembourser les comptes",
      "dépenses entre amis",
      "partage des frais",
      "diviser une note"
    ],
    "ogTitle": "SplitWhom — partagez l'addition et voyez qui paie qui",
    "ogDescription": "Partagez les dépenses de groupe et soldez les comptes en un minimum de remboursements. Sans inscription, gratuit, directement dans votre navigateur."
  },
  "hero": {
    "tagline": "Partagez les dépenses communes et voyez exactement qui paie qui — en un minimum de remboursements. Sans inscription, tout se passe dans votre navigateur."
  },
  "setup": {
    "eventName": "Nom de l'événement",
    "eventPlaceholder": "ex. Week-end camping",
    "currency": "Devise"
  },
  "members": {
    "title": "Participants",
    "addPlaceholder": "Ajouter un nom",
    "add": "Ajouter",
    "empty": "Ajoutez tous ceux qui ont partagé les frais.",
    "removeAria": "Supprimer {name}",
    "confirmDelete": "Cela supprime aussi {count} paiement(s) effectué(s) par {name}. Continuer ?",
    "peopleLabel": "personnes"
  },
  "payments": {
    "title": "Paiements",
    "itemsLabel": "éléments",
    "addMembersFirst": "Ajoutez d'abord des participants.",
    "paidBy": "Payé par",
    "description": "Description",
    "descPlaceholder": "ex. Nourriture",
    "amount": "Montant",
    "splitBetween": "Partagé entre",
    "selectAll": "Tout sélectionner",
    "clearAll": "Tout effacer",
    "addPayment": "Ajouter un paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tous",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(supprimé)",
    "capToggle": "Plafonds de dépenses (facultatif)",
    "capPlaceholder": "sans plafond",
    "capTag": "max",
    "splitRest": "Reste partagé entre {names}",
    "capsTooLow": "Ces plafonds ne couvrent pas le total."
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le bilan ici.",
    "settlementTitle": "Remboursements — au plus simple",
    "total": "Total {amount}",
    "allSettled": "Tout est réglé — personne ne doit rien 🎉",
    "balancesTitle": "Soldes",
    "member": "Participant",
    "paid": "Payé",
    "share": "Part",
    "net": "Solde",
    "legendPositive": "Positif",
    "legendNegative": "négatif",
    "legendPositiveDesc": "= se fait rembourser",
    "legendNegativeDesc": "= doit de l'argent"
  },
  "footer": {
    "loadSample": "Charger un exemple",
    "reset": "Tout réinitialiser",
    "confirmSample": "Remplacer vos données actuelles par l'exemple ?",
    "confirmReset": "Effacer toutes les données ? Action irréversible."
  },
  "sample": {
    "title": "Week-end camping",
    "names": [
      "Lucas",
      "Hugo",
      "Chloé",
      "Léa",
      "Emma"
    ],
    "food": "Nourriture",
    "drinks": "Boissons",
    "firewood": "Bois de chauffage"
  },
  "landing": {
    "heroHeading": "Partager l'addition et voir qui paie qui",
    "heroSub": "Quand plusieurs personnes paient pour différentes choses, SplitWhom trouve la façon la plus simple de solder les comptes — le minimum de remboursements pour que tout le monde soit à égalité. Gratuit, sans compte, sans appli à installer.",
    "howItWorksTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Ajoutez tout le monde",
        "body": "Listez les personnes qui ont partagé les dépenses — amis, colocataires, votre bande de campeurs."
      },
      {
        "title": "Indiquez qui a payé quoi",
        "body": "Ajoutez chaque paiement avec son montant, et choisissez précisément entre qui le partager."
      },
      {
        "title": "Obtenez le minimum de remboursements",
        "body": "SplitWhom affiche instantanément qui paie qui pour solder les comptes avec le moins de transferts possible."
      }
    ],
    "whyTitle": "Pourquoi SplitWhom",
    "features": [
      {
        "title": "Le minimum de remboursements",
        "body": "La plupart des outils affichent juste les soldes. SplitWhom calcule l'ensemble minimal de transferts, pour que vous fassiez le moins de remboursements possible."
      },
      {
        "title": "Partagez chaque dépense à votre façon",
        "body": "Repas partagé mais boissons payées par trois personnes seulement ? Choisissez qui est inclus dans chaque dépense."
      },
      {
        "title": "Confidentiel par nature",
        "body": "Sans inscription ni serveur — chaque calcul se fait dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "Toutes les devises",
        "body": "Fonctionne en EUR, USD, JPY et bien d'autres, avec un arrondi exact pour ne perdre ni un centime ni un yen."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment partager une addition quand plusieurs personnes ont payé ?",
        "a": "Saisissez chaque paiement et qui l'a partagé. SplitWhom additionne ce que chacun a payé par rapport à ce qu'il doit, puis affiche le minimum de transferts pour que tout le monde soit à égalité."
      },
      {
        "q": "SplitWhom est-il gratuit ?",
        "a": "Oui, totalement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout se passe dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une seule dépense entre quelques personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez précisément entre qui le partager, afin de gérer correctement aussi bien les frais communs que les frais d'un sous-groupe."
      },
      {
        "q": "Est-ce que ça marche pour les voyages, le camping et la colocation ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé l'argent et où il faut solder les comptes équitablement."
      },
      {
        "q": "Mes données sont-elles confidentielles ?",
        "a": "Oui. Aucune connexion, aucun serveur. Tous les calculs se font dans votre navigateur et vos données sont enregistrées uniquement sur votre appareil."
      }
    ]
  },
  "switcher": {
    "label": "Langue"
  },
  "share": {
    "share": "Partager",
    "copied": "Lien copié !",
    "edit": "Modifier",
    "readonlyNote": "Résultat partagé · lecture seule",
    "invalid": "Ce lien partagé est invalide ou vide.",
    "ctaTitle": "Partagez vos propres dépenses de groupe",
    "ctaButton": "Ouvrir SplitWhom"
  }
};
