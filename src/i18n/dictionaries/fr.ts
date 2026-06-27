import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partagez l'addition et voyez qui paie qui",
    "description": "Appli web gratuite et sans inscription qui partage les dépenses de groupe et indique précisément qui rembourse qui, en un minimum de paiements. Idéale pour les voyages, le camping et la colocation.",
    "keywords": [
      "partager l'addition",
      "partager les dépenses",
      "calculer qui doit quoi",
      "qui doit combien à qui",
      "rembourser entre amis",
      "dépenses de groupe",
      "partage des frais",
      "calculateur de partage de dépenses",
      "diviser une note de restaurant",
      "compte entre amis"
    ],
    "ogTitle": "SplitWhom — partagez l'addition et voyez qui paie qui",
    "ogDescription": "Partagez les dépenses de groupe et soldez les comptes en un minimum de paiements. Sans inscription, gratuit, directement dans votre navigateur."
  },
  "hero": {
    "tagline": "Partagez vos dépenses communes et voyez précisément qui rembourse qui, en un minimum de paiements. Sans inscription, tout se passe dans votre navigateur."
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
    "descPlaceholder": "ex. Courses",
    "amount": "Montant",
    "splitBetween": "Partagé entre",
    "selectAll": "Tout sélectionner",
    "clearAll": "Tout désélectionner",
    "addPayment": "Ajouter le paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tout le monde",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(supprimé)"
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le décompte ici.",
    "settlementTitle": "Décompte — paiements minimum",
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
    "confirmReset": "Tout effacer ? Cette action est irréversible."
  },
  "sample": {
    "title": "Week-end camping",
    "names": [
      "Lucas",
      "Manon",
      "Hugo",
      "Camille",
      "Léa"
    ],
    "food": "Courses",
    "drinks": "Boissons",
    "firewood": "Bois de chauffage"
  },
  "landing": {
    "heroHeading": "Partagez l'addition et voyez qui paie qui",
    "heroSub": "Quand plusieurs personnes paient des choses différentes, SplitWhom calcule la façon la plus simple de solder les comptes — le minimum de paiements pour que tout le monde soit à égalité. Gratuit, sans compte, rien à installer.",
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
        "title": "Obtenez le minimum de paiements",
        "body": "SplitWhom affiche instantanément qui rembourse qui pour solder les comptes avec le moins de virements possible."
      }
    ],
    "whyTitle": "Pourquoi SplitWhom",
    "features": [
      {
        "title": "Paiements minimum",
        "body": "La plupart des applis se contentent d'afficher les soldes. SplitWhom calcule l'ensemble minimal de virements, pour que vous fassiez le moins de paiements possible."
      },
      {
        "title": "Chaque dépense à votre façon",
        "body": "Vous avez partagé les courses mais seuls trois d'entre vous ont acheté les boissons ? Choisissez qui est inclus sur chaque dépense."
      },
      {
        "title": "Privé par conception",
        "body": "Sans inscription et sans serveur — tous les calculs se font dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "Toutes les devises",
        "body": "Fonctionne en EUR, USD, JPY et bien d'autres, avec un arrondi exact pour qu'aucun centime ni yen ne disparaisse."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment partager une addition quand plusieurs personnes ont payé ?",
        "a": "Saisissez chaque paiement et qui l'a partagé. SplitWhom additionne ce que chacun a payé par rapport à ce qu'il doit, puis affiche le minimum de virements pour mettre tout le monde à égalité."
      },
      {
        "q": "SplitWhom est-il gratuit ?",
        "a": "Oui, entièrement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout se passe dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une dépense entre quelques personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez exactement entre qui il est partagé, afin de gérer correctement les frais communs comme ceux réservés à un groupe."
      },
      {
        "q": "Est-ce que ça marche pour les voyages, le camping et les colocations ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé de l'argent et où il faut solder les comptes équitablement."
      },
      {
        "q": "Mes données sont-elles privées ?",
        "a": "Oui. Aucune connexion, aucun serveur. Tous les calculs se font dans votre navigateur et vos données ne sont enregistrées que sur votre appareil."
      }
    ]
  },
  "switcher": {
    "label": "Langue"
  }
};
