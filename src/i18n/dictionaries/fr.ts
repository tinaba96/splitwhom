import type { Dictionary } from "../types";

export const fr: Dictionary = {
  "meta": {
    "title": "SplitWhom — partager l'addition et voir qui rembourse qui",
    "description": "Application web gratuite, sans inscription, qui partage les dépenses de groupe et montre exactement qui rembourse qui en un minimum de paiements. Idéale pour les voyages, le camping et les colocations.",
    "keywords": [
      "partager l'addition",
      "partager les dépenses",
      "calculateur de partage de frais",
      "qui rembourse qui",
      "régler les comptes",
      "dépenses de groupe",
      "diviser une note",
      "partage de frais entre amis"
    ],
    "ogTitle": "SplitWhom — partager l'addition et voir qui rembourse qui",
    "ogDescription": "Partagez les dépenses de groupe et réglez vos comptes en un minimum de paiements. Sans inscription, gratuit, fonctionne dans votre navigateur."
  },
  "hero": {
    "tagline": "Partagez les dépenses communes et voyez exactement qui rembourse qui — en un minimum de paiements. Sans inscription, tout se passe dans votre navigateur."
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
    "empty": "Ajoutez toutes les personnes qui ont partagé les frais.",
    "removeAria": "Retirer {name}",
    "confirmDelete": "Cela supprime aussi {count} paiement(s) effectué(s) par {name}. Continuer ?",
    "peopleLabel": "personnes",
    "notePlaceholder": "E-mail / téléphone / identifiant de paiement (facultatif)",
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
    "clearAll": "Tout effacer",
    "addPayment": "Ajouter un paiement",
    "paidFor": "a payé",
    "splitEveryone": "Partagé entre tout le monde",
    "splitBetweenNames": "Partagé entre {names}",
    "deleteAria": "Supprimer",
    "removed": "(retiré)",
    "capToggle": "Plafonds de dépenses (facultatif)",
    "capPlaceholder": "sans plafond",
    "capTag": "max",
    "splitRest": "Reste partagé entre {names}",
    "capsTooLow": "Ces plafonds ne peuvent pas couvrir le total."
  },
  "results": {
    "emptyPrompt": "Ajoutez des participants et des paiements pour voir le règlement ici.",
    "settlementTitle": "Règlement — minimum de paiements",
    "total": "Total {amount}",
    "allSettled": "Tout est réglé — personne ne doit rien 🎉",
    "balancesTitle": "Soldes",
    "member": "Participant",
    "paid": "Payé",
    "share": "Part",
    "net": "Solde net",
    "legendPositive": "Positif",
    "legendNegative": "négatif",
    "legendPositiveDesc": "= se fait rembourser",
    "legendNegativeDesc": "= doit de l'argent"
  },
  "footer": {
    "loadSample": "Charger des données d'exemple",
    "reset": "Tout réinitialiser",
    "confirmSample": "Remplacer vos données actuelles par des données d'exemple ?",
    "confirmReset": "Effacer toutes les données ? Cette action est irréversible."
  },
  "sample": {
    "title": "Sortie camping",
    "names": [
      "Lucas",
      "Emma",
      "Hugo",
      "Léa",
      "Jules"
    ],
    "food": "Nourriture",
    "drinks": "Boissons",
    "firewood": "Bois de chauffage"
  },
  "landing": {
    "heroHeading": "Partagez l'addition et voyez qui rembourse qui",
    "heroSub": "Quand plusieurs personnes paient des choses différentes, SplitWhom calcule la façon la plus simple de régler les comptes — le minimum de paiements pour que tout le monde soit à égalité. Gratuit, sans compte, sans application à installer.",
    "howItWorksTitle": "Comment ça marche",
    "steps": [
      {
        "title": "Ajoutez tout le monde",
        "body": "Listez les personnes qui ont partagé les dépenses — amis, colocataires, vos compagnons de camping."
      },
      {
        "title": "Indiquez qui a payé quoi",
        "body": "Ajoutez chaque paiement avec son montant, et choisissez précisément entre qui il doit être partagé."
      },
      {
        "title": "Obtenez le minimum de paiements",
        "body": "SplitWhom affiche instantanément qui rembourse qui pour solder les comptes avec le moins de virements possible."
      }
    ],
    "whyTitle": "Pourquoi SplitWhom",
    "features": [
      {
        "title": "Minimum de paiements",
        "body": "La plupart des outils se contentent d'afficher les soldes. SplitWhom calcule l'ensemble minimal de virements, pour que vous fassiez le moins de paiements possible."
      },
      {
        "title": "Partagez chaque dépense à votre façon",
        "body": "Vous avez partagé la nourriture mais seulement trois d'entre vous ont acheté les boissons ? Choisissez qui est inclus dans chaque dépense."
      },
      {
        "title": "Confidentiel par conception",
        "body": "Sans inscription et sans serveur — chaque calcul s'effectue dans votre navigateur et vos données restent sur votre appareil."
      },
      {
        "title": "Toutes les devises",
        "body": "Fonctionne en USD, EUR, JPY et bien d'autres, avec un arrondi exact pour qu'aucun centime ni yen ne se perde."
      }
    ],
    "faqTitle": "Questions fréquentes",
    "faqs": [
      {
        "q": "Comment partager une addition quand plusieurs personnes ont payé ?",
        "a": "Saisissez chaque paiement et qui l'a partagé. SplitWhom additionne ce que chacun a payé par rapport à ce qu'il doit, puis affiche le minimum de virements pour que tout le monde soit à égalité."
      },
      {
        "q": "SplitWhom est-il gratuit ?",
        "a": "Oui, totalement gratuit. Pas de compte, pas d'abonnement et rien à installer — tout fonctionne dans votre navigateur web."
      },
      {
        "q": "Puis-je partager une seule dépense entre quelques personnes seulement ?",
        "a": "Oui. Pour chaque paiement, vous choisissez précisément entre qui il est partagé, afin que les frais communs et les frais limités à certains soient gérés correctement."
      },
      {
        "q": "Est-ce que ça marche pour les voyages, le camping et les colocations ?",
        "a": "C'est exactement à ça que ça sert — toute situation où plusieurs personnes ont avancé l'argent et où vous devez régler les comptes équitablement."
      },
      {
        "q": "Mes données sont-elles confidentielles ?",
        "a": "Oui. Il n'y a ni connexion ni serveur. Tous les calculs se font dans votre navigateur et vos données ne sont enregistrées que sur votre appareil."
      },
      {
        "q": "Puis-je plafonner ce qu'une personne paie ?",
        "a": "Oui. Pour chaque paiement, vous pouvez fixer un maximum (plafond) pour certaines personnes ; elles paient au plus ce montant et le reste est partagé entre les autres."
      },
      {
        "q": "Puis-je partager le résultat avec mon groupe ?",
        "a": "Oui. Appuyez sur Partager pour copier un lien qui ouvre un récapitulatif en lecture seule de qui rembourse qui. Les données sont encodées dans le lien lui-même — rien n'est stocké sur un serveur."
      },
      {
        "q": "Est-ce que ça fonctionne sur mon téléphone ?",
        "a": "Oui. SplitWhom fonctionne dans tout navigateur mobile ou ordinateur moderne — il n'y a aucune application à installer."
      }
    ],
    "useCasesTitle": "Pensé pour les vrais frais de groupe",
    "useCases": [
      {
        "title": "Camping et sorties en plein air",
        "body": "L'un achète la nourriture, l'autre le bois de chauffage, un troisième le matériel — SplitWhom équilibre tout en un minimum de paiements."
      },
      {
        "title": "Voyages et vacances",
        "body": "Hôtels, taxis et dîners payés par différentes personnes tout au long du voyage ? Réglez le tout à la fin avec une seule liste claire."
      },
      {
        "title": "Colocations et colocataires",
        "body": "Partagez les courses, les charges et les fournitures — et choisissez précisément qui partage chaque dépense."
      },
      {
        "title": "Soirées, barbecues et dîners de groupe",
        "body": "Quand plusieurs personnes participent aux frais d'une réunion, voyez d'un coup d'œil qui doit quoi à qui."
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
  },
  "site": {
    "footerTagline": "Partagez l'addition et voyez qui rembourse qui — gratuit et sans inscription.",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions d'utilisation",
    "about": "À propos",
    "contact": "Contact",
    "rights": "Tous droits réservés."
  },
  "privacy": {
    "title": "Politique de confidentialité",
    "updatedLabel": "Dernière mise à jour",
    "intro": "Cette Politique de confidentialité explique comment SplitWhom traite vos informations lorsque vous utilisez le site splitwhom.com. SplitWhom n'a ni comptes utilisateurs ni base de données côté serveur — le partage que vous créez reste dans votre propre navigateur.",
    "sections": [
      {
        "heading": "Informations que vous saisissez",
        "body": "Les participants, paiements et notes que vous saisissez sont stockés uniquement dans le stockage local de votre navigateur, sur votre appareil. Ils ne sont ni transmis ni stockés sur nos serveurs, car SplitWhom n'a aucune base de données dorsale."
      },
      {
        "heading": "Liens partagés",
        "body": "Lorsque vous créez un lien de partage, les données du partage sont compressées et encodées dans le fragment d'URL du lien (après le symbole #). Elles ne sont envoyées à aucun serveur. Toute personne à qui vous donnez le lien peut voir ces données, alors ne le partagez qu'avec les personnes concernées."
      },
      {
        "heading": "Cookies et stockage local",
        "body": "SplitWhom utilise le stockage local de votre navigateur pour mémoriser votre partage en cours. Nous ne déposons pas nos propres cookies de suivi. Toutefois, les services tiers ci-dessous peuvent déposer des cookies dans votre navigateur."
      },
      {
        "heading": "Analyse d'audience",
        "body": "Nous utilisons Google Analytics 4 pour comprendre comment le site est utilisé (par exemple, les pages vues et la localisation générale). Google peut déposer des cookies et traiter ces données conformément à ses propres règles. Pour en savoir plus, consultez la Politique de confidentialité de Google sur policies.google.com/privacy."
      },
      {
        "heading": "Publicité",
        "body": "Nous utilisons Google AdSense pour afficher des annonces. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site et d'autres sites. L'utilisation de cookies publicitaires par Google permet à Google et à ses partenaires de vous diffuser des annonces. Vous pouvez refuser la publicité personnalisée en consultant les Paramètres des annonces de Google sur adsettings.google.com, ou refuser l'utilisation de cookies par les fournisseurs tiers sur aboutads.info."
      },
      {
        "heading": "Consentement dans l'EEE, au Royaume-Uni et en Suisse",
        "body": "Si vous vous trouvez dans l'Espace économique européen, au Royaume-Uni ou en Suisse, un message de consentement s'affiche afin que vous puissiez choisir comment vos données sont utilisées à des fins publicitaires, comme l'exige la loi applicable."
      },
      {
        "heading": "Enfants",
        "body": "SplitWhom ne s'adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d'informations personnelles les concernant."
      },
      {
        "heading": "Vos choix",
        "body": "Vous pouvez effacer vos données à tout moment à l'aide du bouton Réinitialiser ou en vidant le stockage de votre navigateur, refuser ou gérer la personnalisation publicitaire via les commandes ci-dessus, et utiliser un bloqueur de publicités/traceurs si vous le préférez."
      },
      {
        "heading": "Modifications de cette politique",
        "body": "Nous pouvons mettre à jour cette politique de temps à autre. Les modifications importantes seront reflétées par la date indiquée ci-dessus."
      },
      {
        "heading": "Contact",
        "body": "Si vous avez des questions sur cette politique, contactez-nous à l'adresse contact@splitwhom.com."
      }
    ]
  },
  "terms": {
    "title": "Conditions d'utilisation",
    "updatedLabel": "Dernière mise à jour",
    "intro": "En utilisant SplitWhom sur splitwhom.com, vous acceptez ces conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.",
    "sections": [
      {
        "heading": "Le service",
        "body": "SplitWhom est un outil gratuit qui aide les groupes à partager les dépenses communes et à voir qui rembourse qui. Il ne nécessite aucun compte et fonctionne dans votre navigateur."
      },
      {
        "heading": "Utilisation à votre discrétion",
        "body": "SplitWhom est fourni pour votre commodité. Vérifiez toujours les résultats avant de transférer de l'argent. Vous êtes responsable de la façon dont vous utilisez les calculs et de tout paiement que vous effectuez."
      },
      {
        "heading": "Aucune garantie",
        "body": "Le service est fourni « tel quel » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, notamment quant à l'exactitude, l'adéquation à un usage particulier ou la disponibilité ininterrompue."
      },
      {
        "heading": "Limitation de responsabilité",
        "body": "Dans toute la mesure permise par la loi, SplitWhom et son exploitant ne sauraient être tenus responsables de tout dommage indirect, accessoire ou consécutif, ni de toute perte découlant de votre utilisation du site."
      },
      {
        "heading": "Utilisation acceptable",
        "body": "N'utilisez pas le site à des fins illégales ou d'une manière susceptible de l'endommager, de le désactiver ou de le perturber."
      },
      {
        "heading": "Modifications",
        "body": "Nous pouvons modifier ces conditions ou le service à tout moment. Toute utilisation continue après des modifications signifie que vous acceptez les conditions mises à jour."
      },
      {
        "heading": "Contact",
        "body": "Des questions sur ces conditions ? Contactez-nous à l'adresse contact@splitwhom.com."
      }
    ]
  },
  "about": {
    "title": "À propos de SplitWhom",
    "paragraphs": [
      "SplitWhom est une application web gratuite et sans inscription qui simplifie le partage des dépenses de groupe. Au lieu de simplement afficher les soldes, elle calcule le minimum de paiements nécessaires pour que tout le monde soit à égalité — idéale pour les voyages, le camping, les colocations et les soirées.",
      "Elle est conçue pour être confidentielle par nature : aucun compte ni base de données côté serveur. Chaque calcul s'effectue dans votre navigateur, et vos données restent sur votre appareil, sauf si vous choisissez de partager un lien.",
      "SplitWhom est disponible dans de nombreuses langues et son utilisation est gratuite, financée par la publicité."
    ],
    "contactHeading": "Contact",
    "contactBody": "Des questions, des retours ou des idées ? Écrivez-nous à"
  },
  "crossPromo": {
    "eyebrow": "De l'équipe SplitWhom",
    "title": "Vous voyagez à plusieurs ? Rencontrez un local",
    "body": "Shenzhen Buddies met en relation les voyageurs du monde entier avec des habitants qui partagent leurs centres d'intérêt et leur font visiter la ville.",
    "cta": "Découvrir Shenzhen Buddies"
  }
};
