import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partagez l'addition et voyez qui rembourse qui",
    "description": "Application web gratuite et sans inscription qui partage les dépenses de groupe et montre exactement qui rembourse qui en un minimum de paiements. Idéale pour les voyages, le camping et la colocation.",
    "keywords": [
      "partager l'addition",
      "partager les dépenses",
      "calculateur de partage",
      "qui rembourse qui",
      "diviser la note",
      "dépenses de groupe",
      "partage des frais",
      "rembourser entre amis",
      "compte entre amis"
    ],
    "ogTitle": "SplitWhom — partagez l'addition et voyez qui rembourse qui",
    "ogDescription": "Partagez les dépenses de groupe et soldez vos comptes en un minimum de paiements. Sans inscription, gratuit, directement dans votre navigateur."
  },
  "hero": {
    "tagline": "Partagez les dépenses communes et voyez exactement qui rembourse qui, en un minimum de paiements. Sans inscription, tout se passe dans votre navigateur."
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
    "descPlaceholder": "ex. Courses",
    "amount": "Montant",
    "splitBetween": "Partager entre",
    "selectAll": "Tout sélectionner",
    "clearAll": "Tout effacer",
    "addPayment": "Ajouter le paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tous",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(retiré)",
    "capToggle": "Plafonds de dépenses (facultatif)",
    "capPlaceholder": "sans plafond",
    "capTag": "max",
    "splitRest": "Reste partagé entre {names}",
    "capsTooLow": "Ces plafonds ne couvrent pas le total."
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le règlement ici.",
    "settlementTitle": "Règlement — paiements minimisés",
    "total": "Total {amount}",
    "allSettled": "Tout est réglé — personne ne doit rien 🎉",
    "balancesTitle": "Soldes",
    "member": "Participant",
    "paid": "Payé",
    "share": "Part",
    "net": "Solde",
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
    "heroHeading": "Partagez l'addition et voyez qui rembourse qui",
    "heroSub": "Quand plusieurs personnes paient des choses différentes, SplitWhom trouve la façon la plus simple de solder les comptes — le minimum de paiements pour remettre tout le monde à égalité. Gratuit, sans compte, sans application à installer.",
    "howItWorksTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Ajoutez tout le monde",
        "body": "Listez les personnes qui ont partagé les dépenses — amis, colocataires, votre bande de campeurs."
      },
      {
        "title": "Indiquez qui a payé quoi",
        "body": "Ajoutez chaque paiement avec son montant et choisissez précisément entre qui le partager."
      },
      {
        "title": "Obtenez le minimum de paiements",
        "body": "SplitWhom affiche instantanément qui rembourse qui pour solder les comptes avec le moins de virements possible."
      }
    ],
    "whyTitle": "Pourquoi SplitWhom",
    "features": [
      {
        "title": "Le minimum de paiements",
        "body": "La plupart des applis se contentent d'afficher les soldes. SplitWhom calcule l'ensemble minimal de virements, pour que vous fassiez le moins de paiements possible."
      },
      {
        "title": "Partagez chaque dépense à votre façon",
        "body": "Les courses pour tous mais les boissons pour trois d'entre vous ? Choisissez qui est inclus dans chaque dépense."
      },
      {
        "title": "Confidentiel par conception",
        "body": "Sans inscription et sans serveur — chaque calcul se fait dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "Toutes les devises",
        "body": "Fonctionne en EUR, USD, JPY et bien d'autres, avec un arrondi exact pour ne jamais perdre le moindre centime."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment partager une addition quand plusieurs personnes ont payé ?",
        "a": "Saisissez chaque paiement et qui l'a partagé. SplitWhom additionne ce que chacun a payé par rapport à ce qu'il doit, puis affiche le minimum de virements pour remettre tout le monde à égalité."
      },
      {
        "q": "SplitWhom est-il gratuit ?",
        "a": "Oui, totalement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout fonctionne dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une seule dépense entre certaines personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez exactement entre qui le partager, de sorte que les frais communs et les frais réservés à un groupe sont gérés correctement."
      },
      {
        "q": "Est-ce adapté aux voyages, au camping et à la colocation ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé l'argent et où il faut solder les comptes équitablement."
      },
      {
        "q": "Mes données sont-elles confidentielles ?",
        "a": "Oui. Aucune connexion, aucun serveur. Tous les calculs se font dans votre navigateur et vos données ne sont enregistrées que sur votre appareil."
      }
    ]
  },
  "switcher": {
    "label": "Langue"
  }
};
