import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partagez l'addition et voyez qui paie qui",
    "description": "Appli web gratuite, sans inscription, qui partage les dépenses de groupe et montre exactement qui paie qui en un minimum de remboursements. Idéale pour les voyages, le camping et la colocation.",
    "keywords": [
      "partager l'addition",
      "partage des dépenses",
      "diviser la note",
      "qui paie qui",
      "rembourser entre amis",
      "dépenses de groupe",
      "calculer le partage des frais",
      "partager les frais entre amis"
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
    "removeAria": "Retirer {name}",
    "confirmDelete": "Cela supprime aussi {count} paiement(s) effectué(s) par {name}. Continuer ?",
    "peopleLabel": "personnes",
    "notePlaceholder": "E-mail / téléphone / ID de paiement (facultatif)",
    "contactsTitle": "Participants et infos de paiement",
    "copy": "Copier",
    "copied": "Copié !"
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
    "clearAll": "Tout désélectionner",
    "addPayment": "Ajouter un paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tout le monde",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(supprimé)",
    "capToggle": "Plafonds de dépense (facultatif)",
    "capPlaceholder": "sans plafond",
    "capTag": "max",
    "splitRest": "Reste partagé entre {names}",
    "capsTooLow": "Ces plafonds ne couvrent pas le total."
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le décompte ici.",
    "settlementTitle": "Remboursements — le minimum de paiements",
    "total": "Total {amount}",
    "allSettled": "Tout est réglé — personne ne doit rien 🎉",
    "balancesTitle": "Soldes",
    "member": "Participant",
    "paid": "Payé",
    "share": "Part",
    "net": "Solde",
    "legendPositive": "Positif",
    "legendNegative": "négatif",
    "legendPositiveDesc": "= doit être remboursé",
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
      "Léa",
      "Hugo",
      "Chloé",
      "Lucas",
      "Emma"
    ],
    "food": "Nourriture",
    "drinks": "Boissons",
    "firewood": "Bois de chauffage"
  },
  "landing": {
    "heroHeading": "Partagez l'addition et voyez qui paie qui",
    "heroSub": "Quand plusieurs personnes paient des choses différentes, SplitWhom trouve la façon la plus simple de solder les comptes — le minimum de remboursements pour que tout le monde soit à égalité. Gratuit, sans compte, sans appli à installer.",
    "howItWorksTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Ajoutez tout le monde",
        "body": "Listez les personnes qui ont partagé les dépenses — amis, colocataires, votre équipe de camping."
      },
      {
        "title": "Indiquez qui a payé quoi",
        "body": "Ajoutez chaque paiement avec son montant, puis choisissez précisément entre qui le partager."
      },
      {
        "title": "Obtenez le minimum de paiements",
        "body": "SplitWhom montre instantanément qui paie qui pour solder les comptes avec le moins de virements possible."
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
        "body": "La nourriture pour tous, mais seulement trois pour les boissons ? Choisissez qui est inclus dans chaque dépense."
      },
      {
        "title": "Confidentiel par conception",
        "body": "Sans inscription ni serveur — chaque calcul se fait dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "Toutes les devises",
        "body": "Fonctionne en USD, EUR, JPY et plus, avec un arrondi précis pour qu'aucun centime ni yen ne disparaisse."
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
        "a": "Oui, entièrement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout se passe dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une seule dépense entre quelques personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez précisément entre qui il est partagé, afin que les frais communs et les frais d'un sous-groupe soient gérés correctement."
      },
      {
        "q": "Est-ce que ça marche pour les voyages, le camping et les colocations ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé de l'argent et où il faut solder les comptes équitablement."
      },
      {
        "q": "Mes données sont-elles confidentielles ?",
        "a": "Oui. Aucune connexion, aucun serveur. Tous les calculs se font dans votre navigateur et vos données ne sont enregistrées que sur votre appareil."
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
