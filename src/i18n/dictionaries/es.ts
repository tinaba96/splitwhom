import type { Dictionary } from "../types";

export const es: Dictionary = {
  "meta": {
    "title": "SplitWhom — divide la cuenta y mira quién le paga a quién",
    "description": "App web gratis y sin registro que divide los gastos de grupo y muestra exactamente quién le paga a quién en el menor número de pagos. Ideal para viajes, acampadas y pisos compartidos.",
    "keywords": [
      "dividir la cuenta",
      "dividir gastos",
      "calculadora para dividir gastos",
      "quién le paga a quién",
      "ajustar cuentas",
      "gastos en grupo",
      "repartir gastos",
      "dividir cuenta entre amigos",
      "calcular gastos compartidos"
    ],
    "ogTitle": "SplitWhom — divide la cuenta y mira quién le paga a quién",
    "ogDescription": "Divide los gastos de grupo y salda cuentas con el menor número de pagos. Sin registro, gratis y funciona en tu navegador."
  },
  "hero": {
    "tagline": "Divide los gastos compartidos y mira exactamente quién le paga a quién, con el menor número de pagos. Sin registro y todo dentro de tu navegador."
  },
  "setup": {
    "eventName": "Nombre del evento",
    "eventPlaceholder": "ej. Viaje de acampada",
    "currency": "Moneda"
  },
  "members": {
    "title": "Integrantes",
    "addPlaceholder": "Añadir un nombre",
    "add": "Añadir",
    "empty": "Añade a todos los que compartieron los gastos.",
    "removeAria": "Eliminar a {name}",
    "confirmDelete": "Esto también borra {count} pago(s) hechos por {name}. ¿Continuar?",
    "peopleLabel": "personas",
    "notePlaceholder": "Email / teléfono / ID de pago (opcional)",
    "contactsTitle": "Integrantes e info de pago",
    "copy": "Copiar",
    "copied": "¡Copiado!"
  },
  "payments": {
    "title": "Pagos",
    "itemsLabel": "ítems",
    "addMembersFirst": "Añade integrantes primero.",
    "paidBy": "Pagado por",
    "description": "Descripción",
    "descPlaceholder": "ej. Comida",
    "amount": "Importe",
    "splitBetween": "Dividir entre",
    "selectAll": "Seleccionar todos",
    "clearAll": "Quitar todos",
    "addPayment": "Añadir pago",
    "paidFor": "pagó",
    "splitEveryone": "Dividir entre todos",
    "splitBetweenNames": "Dividir entre {names}",
    "deleteAria": "Eliminar",
    "removed": "(eliminado)",
    "capToggle": "Límites de gasto (opcional)",
    "capPlaceholder": "sin límite",
    "capTag": "máx",
    "splitRest": "El resto se divide entre {names}",
    "capsTooLow": "Estos límites no alcanzan para cubrir el total."
  },
  "results": {
    "emptyPrompt": "Añade integrantes y pagos para ver el reparto aquí.",
    "settlementTitle": "Reparto — menor número de pagos",
    "total": "Total {amount}",
    "allSettled": "Todo saldado — nadie debe nada 🎉",
    "balancesTitle": "Saldos",
    "member": "Integrante",
    "paid": "Pagó",
    "share": "Le toca",
    "net": "Neto",
    "legendPositive": "Positivo",
    "legendNegative": "negativo",
    "legendPositiveDesc": "= recupera dinero",
    "legendNegativeDesc": "= debe dinero"
  },
  "footer": {
    "loadSample": "Cargar datos de ejemplo",
    "reset": "Borrar todo",
    "confirmSample": "¿Reemplazar tus datos actuales con datos de ejemplo?",
    "confirmReset": "¿Borrar todos los datos? Esto no se puede deshacer."
  },
  "sample": {
    "title": "Viaje de acampada",
    "names": [
      "Alejandro",
      "Lucía",
      "Carlos",
      "Marta",
      "Pablo"
    ],
    "food": "Comida",
    "drinks": "Bebidas",
    "firewood": "Leña"
  },
  "landing": {
    "heroHeading": "Divide la cuenta y mira quién le paga a quién",
    "heroSub": "Cuando varias personas pagan cosas distintas, SplitWhom calcula la forma más sencilla de saldar cuentas: el menor número de pagos para que todos queden a mano. Gratis, sin cuenta y sin apps que instalar.",
    "howItWorksTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Añade a todos",
        "body": "Apunta a las personas que compartieron los gastos: amigos, compañeros de piso o tu grupo de acampada."
      },
      {
        "title": "Indica quién pagó qué",
        "body": "Añade cada pago con su importe y elige exactamente entre quiénes se debe dividir."
      },
      {
        "title": "Obtén el menor número de pagos",
        "body": "SplitWhom te muestra al instante quién le paga a quién para saldar cuentas con las mínimas transferencias."
      }
    ],
    "whyTitle": "Por qué SplitWhom",
    "features": [
      {
        "title": "Menos pagos",
        "body": "La mayoría de apps solo muestran saldos. SplitWhom calcula el conjunto mínimo de transferencias, para que hagas los menos pagos posibles."
      },
      {
        "title": "Divide cada gasto a tu manera",
        "body": "¿Compartieron la comida pero solo tres compraron las bebidas? Elige quién entra en cada gasto."
      },
      {
        "title": "Privado por diseño",
        "body": "Sin registro y sin servidor: cada cálculo se hace en tu navegador y tus datos se quedan en tu dispositivo."
      },
      {
        "title": "Cualquier moneda",
        "body": "Funciona con USD, EUR, JPY y más, con redondeo exacto para que no se pierda ni un centavo ni un yen."
      }
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo se divide una cuenta cuando pagaron varias personas?",
        "a": "Introduce cada pago y quién lo compartió. SplitWhom suma lo que pagó cada uno frente a lo que debe y luego muestra las menos transferencias para que todos queden a mano."
      },
      {
        "q": "¿SplitWhom es gratis?",
        "a": "Sí, totalmente gratis. No hay cuenta, ni suscripción, ni nada que instalar: funciona en tu navegador web."
      },
      {
        "q": "¿Puedo dividir un solo gasto entre algunas personas nada más?",
        "a": "Sí. En cada pago eliges exactamente entre quiénes se divide, así los gastos compartidos y los de solo algunos se calculan bien."
      },
      {
        "q": "¿Sirve para viajes, acampadas y compañeros de piso?",
        "a": "Para eso mismo está pensado: cualquier situación en la que más de una persona puso el dinero por adelantado y hay que saldar cuentas de forma justa."
      },
      {
        "q": "¿Mis datos son privados?",
        "a": "Sí. No hay inicio de sesión ni servidor. Todos los cálculos se hacen en tu navegador y tus datos se guardan solo en tu dispositivo."
      }
    ]
  },
  "switcher": {
    "label": "Idioma"
  },
  "share": {
    "share": "Compartir",
    "copied": "¡Enlace copiado!",
    "edit": "Editar",
    "readonlyNote": "Resultado compartido · solo lectura",
    "invalid": "Este enlace compartido no es válido o está vacío.",
    "ctaTitle": "Divide los gastos de tu propio grupo",
    "ctaButton": "Abrir SplitWhom"
  }
};
