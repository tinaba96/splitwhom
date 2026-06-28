import type { Dictionary } from "../types";

export const es: Dictionary = {
  "meta": {
    "title": "SplitWhom — divide la cuenta y mira quién le paga a quién",
    "description": "App web gratuita y sin registro que divide los gastos del grupo y muestra exactamente quién le paga a quién con la menor cantidad de pagos. Ideal para viajes, campamentos y casas compartidas.",
    "keywords": [
      "dividir la cuenta",
      "dividir gastos",
      "calculadora para dividir cuentas",
      "quién le paga a quién",
      "saldar cuentas",
      "gastos compartidos",
      "dividir gastos en grupo",
      "calculadora para dividir gastos"
    ],
    "ogTitle": "SplitWhom — divide la cuenta y mira quién le paga a quién",
    "ogDescription": "Divide los gastos del grupo y salda las cuentas con la menor cantidad de pagos. Sin registro, gratis y funciona en tu navegador."
  },
  "hero": {
    "tagline": "Divide los gastos compartidos y mira exactamente quién le paga a quién, con la menor cantidad de pagos. Sin registro y funciona por completo en tu navegador."
  },
  "setup": {
    "eventName": "Nombre del evento",
    "eventPlaceholder": "ej. Viaje de campamento",
    "currency": "Moneda"
  },
  "members": {
    "title": "Integrantes",
    "addPlaceholder": "Agregar un nombre",
    "add": "Agregar",
    "empty": "Agrega a todos los que compartieron los gastos.",
    "removeAria": "Eliminar a {name}",
    "confirmDelete": "Esto también elimina {count} pago(s) hecho(s) por {name}. ¿Continuar?",
    "peopleLabel": "personas",
    "notePlaceholder": "Correo / teléfono / ID de pago (opcional)",
    "contactsTitle": "Integrantes e información de pago",
    "copy": "Copiar",
    "copied": "¡Copiado!"
  },
  "payments": {
    "title": "Pagos",
    "itemsLabel": "elementos",
    "addMembersFirst": "Primero agrega integrantes.",
    "paidBy": "Pagado por",
    "description": "Descripción",
    "descPlaceholder": "ej. Comida",
    "amount": "Monto",
    "splitBetween": "Dividir entre",
    "selectAll": "Seleccionar todos",
    "clearAll": "Quitar todos",
    "addPayment": "Agregar pago",
    "paidFor": "pagó por",
    "splitEveryone": "Dividir entre todos",
    "splitBetweenNames": "Dividir entre {names}",
    "deleteAria": "Eliminar",
    "removed": "(eliminado)",
    "capToggle": "Límites de gasto (opcional)",
    "capPlaceholder": "sin límite",
    "capTag": "máx.",
    "splitRest": "El resto se divide entre {names}",
    "capsTooLow": "Estos límites no alcanzan a cubrir el total."
  },
  "results": {
    "emptyPrompt": "Agrega integrantes y pagos para ver aquí cómo saldar las cuentas.",
    "settlementTitle": "Liquidación — menos pagos posibles",
    "total": "Total {amount}",
    "allSettled": "Todo saldado — nadie debe nada 🎉",
    "balancesTitle": "Saldos",
    "member": "Integrante",
    "paid": "Pagó",
    "share": "Le toca",
    "net": "Neto",
    "legendPositive": "Positivo",
    "legendNegative": "negativo",
    "legendPositiveDesc": "= recibe dinero",
    "legendNegativeDesc": "= debe dinero"
  },
  "footer": {
    "loadSample": "Cargar datos de ejemplo",
    "reset": "Restablecer todo",
    "confirmSample": "¿Reemplazar tus datos actuales con datos de ejemplo?",
    "confirmReset": "¿Borrar todos los datos? Esto no se puede deshacer."
  },
  "sample": {
    "title": "Viaje de campamento",
    "names": [
      "Lucía",
      "Mateo",
      "Sofía",
      "Diego",
      "Valentina"
    ],
    "food": "Comida",
    "drinks": "Bebidas",
    "firewood": "Leña"
  },
  "landing": {
    "heroHeading": "Divide la cuenta y mira quién le paga a quién",
    "heroSub": "Cuando varias personas pagan por cosas distintas, SplitWhom calcula la forma más simple de saldar las cuentas: la menor cantidad de pagos para que todos queden a mano. Gratis, sin cuenta y sin apps que instalar.",
    "howItWorksTitle": "Cómo funciona",
    "steps": [
      {
        "title": "Agrega a todos",
        "body": "Anota a las personas que compartieron los gastos: amigos, compañeros de piso o tu grupo de campamento."
      },
      {
        "title": "Registra quién pagó qué",
        "body": "Agrega cada pago con su monto y elige exactamente entre quiénes se debe dividir."
      },
      {
        "title": "Obtén los menos pagos posibles",
        "body": "SplitWhom muestra al instante quién le paga a quién para saldar las cuentas con la menor cantidad de transferencias."
      }
    ],
    "whyTitle": "Por qué SplitWhom",
    "features": [
      {
        "title": "La menor cantidad de pagos",
        "body": "La mayoría de las apps solo muestran saldos. SplitWhom calcula el conjunto mínimo de transferencias, para que hagas la menor cantidad de pagos posible."
      },
      {
        "title": "Divide cada gasto a tu manera",
        "body": "¿Compartieron la comida pero solo tres compraron las bebidas? Elige quién participa en cada gasto."
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
        "a": "Registra cada pago y quién lo compartió. SplitWhom suma lo que pagó cada uno frente a lo que le toca, y luego muestra las menos transferencias posibles para que todos queden a mano."
      },
      {
        "q": "¿SplitWhom es gratis?",
        "a": "Sí, completamente gratis. No hay cuenta, ni suscripción, ni nada que instalar: funciona en tu navegador web."
      },
      {
        "q": "¿Puedo dividir un solo gasto entre algunas personas?",
        "a": "Sí. En cada pago eliges exactamente entre quiénes se divide, así los gastos compartidos y los de solo algunos se calculan correctamente."
      },
      {
        "q": "¿Sirve para viajes, campamentos y compañeros de piso?",
        "a": "Para eso está hecho: cualquier situación en la que más de una persona puso el dinero y necesitan saldar las cuentas de forma justa."
      },
      {
        "q": "¿Mis datos son privados?",
        "a": "Sí. No hay registro ni servidor. Todos los cálculos se hacen en tu navegador y tus datos se guardan solo en tu dispositivo."
      },
      {
        "q": "¿Puedo poner un límite a lo que paga una persona?",
        "a": "Sí. En cualquier pago puedes fijar un máximo (límite) para personas específicas; pagan como mucho ese monto y el resto se reparte entre los demás."
      },
      {
        "q": "¿Puedo compartir el resultado con mi grupo?",
        "a": "Sí. Toca Compartir para copiar un enlace que abre un resumen de solo lectura de quién le paga a quién. Los datos van codificados en el propio enlace: no se guarda nada en un servidor."
      },
      {
        "q": "¿Funciona en mi teléfono?",
        "a": "Sí. SplitWhom funciona en cualquier navegador moderno de móvil o de escritorio: no hay ninguna app que instalar."
      }
    ],
    "useCasesTitle": "Hecho para los gastos de grupo de la vida real",
    "useCases": [
      {
        "title": "Campamentos y salidas al aire libre",
        "body": "Uno compra la comida, otro la leña y un tercero el equipo: SplitWhom lo nivela todo con la menor cantidad de pagos."
      },
      {
        "title": "Viajes y vacaciones",
        "body": "¿Hoteles, taxis y cenas pagados por distintas personas durante el viaje? Salda todo al final con una lista clara."
      },
      {
        "title": "Casas compartidas y compañeros de piso",
        "body": "Divide la compra, los servicios y los suministros, y elige exactamente quién comparte cada gasto."
      },
      {
        "title": "Fiestas, asados y cenas de grupo",
        "body": "Cuando varios ponen dinero para una reunión, ve de un vistazo quién le debe a quién."
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
    "ctaTitle": "Divide tus propios gastos de grupo",
    "ctaButton": "Abrir SplitWhom"
  },
  "site": {
    "footerTagline": "Divide la cuenta y mira quién le paga a quién: gratis y sin registro.",
    "privacy": "Política de privacidad",
    "terms": "Términos del servicio",
    "about": "Acerca de",
    "contact": "Contacto",
    "rights": "Todos los derechos reservados."
  },
  "privacy": {
    "title": "Política de privacidad",
    "updatedLabel": "Última actualización",
    "intro": "Esta Política de privacidad explica cómo SplitWhom maneja la información cuando usas el sitio en splitwhom.com. SplitWhom no tiene cuentas de usuario ni base de datos en el servidor: la división que creas se queda en tu propio navegador.",
    "sections": [
      {
        "heading": "Información que ingresas",
        "body": "Los integrantes, pagos y notas que escribes se guardan únicamente en el almacenamiento local de tu navegador, en tu dispositivo. No se transmiten ni se almacenan en nuestros servidores, porque SplitWhom no tiene base de datos en el servidor."
      },
      {
        "heading": "Enlaces compartidos",
        "body": "Cuando creas un enlace para Compartir, los datos de la división se comprimen y se codifican dentro del fragmento de la URL del enlace (después del símbolo #). No se envían a ningún servidor. Cualquier persona a la que le des el enlace puede ver esos datos, así que compártelo solo con quien tengas la intención de hacerlo."
      },
      {
        "heading": "Cookies y almacenamiento local",
        "body": "SplitWhom usa el almacenamiento local de tu navegador para recordar tu división actual. No establecemos nuestras propias cookies de seguimiento. Sin embargo, los servicios de terceros que se indican a continuación pueden establecer cookies en tu navegador."
      },
      {
        "heading": "Analítica",
        "body": "Usamos Google Analytics 4 para entender cómo se usa el sitio (por ejemplo, vistas de página y ubicación general). Google puede establecer cookies y procesar estos datos de acuerdo con sus propias políticas. Para más detalles, consulta la Política de privacidad de Google en policies.google.com/privacy."
      },
      {
        "heading": "Publicidad",
        "body": "Usamos Google AdSense para mostrar anuncios. Los proveedores externos, incluido Google, usan cookies para mostrar anuncios basados en tus visitas anteriores a este y otros sitios web. El uso de cookies de publicidad por parte de Google le permite, a él y a sus socios, mostrarte anuncios. Puedes desactivar la publicidad personalizada visitando la Configuración de anuncios de Google en adsettings.google.com, o desactivar el uso de cookies por parte de proveedores externos en aboutads.info."
      },
      {
        "heading": "Consentimiento en el EEE, el Reino Unido y Suiza",
        "body": "Si te encuentras en el Espacio Económico Europeo, el Reino Unido o Suiza, se muestra un mensaje de consentimiento para que elijas cómo se usan tus datos para los anuncios, según lo exige la legislación aplicable."
      },
      {
        "heading": "Menores",
        "body": "SplitWhom no está dirigido a menores de 13 años, y no recopilamos a sabiendas información personal de ellos."
      },
      {
        "heading": "Tus opciones",
        "body": "Puedes borrar tus datos en cualquier momento usando el botón Restablecer o limpiando el almacenamiento de tu navegador, rechazar o gestionar la personalización de anuncios mediante los controles indicados arriba, y usar un bloqueador de anuncios o rastreadores en tu navegador si lo prefieres."
      },
      {
        "heading": "Cambios en esta política",
        "body": "Es posible que actualicemos esta política de vez en cuando. Los cambios importantes se reflejarán mediante la fecha que se muestra arriba."
      },
      {
        "heading": "Contacto",
        "body": "Si tienes preguntas sobre esta política, contáctanos en contact@splitwhom.com."
      }
    ]
  },
  "terms": {
    "title": "Términos del servicio",
    "updatedLabel": "Última actualización",
    "intro": "Al usar SplitWhom en splitwhom.com, aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.",
    "sections": [
      {
        "heading": "El servicio",
        "body": "SplitWhom es una herramienta gratuita que ayuda a los grupos a dividir gastos compartidos y ver quién le paga a quién. No requiere cuenta y funciona en tu navegador."
      },
      {
        "heading": "Uso bajo tu propio criterio",
        "body": "SplitWhom se ofrece como una comodidad. Revisa siempre los resultados antes de transferir dinero. Eres responsable de cómo usas los cálculos y de cualquier pago que realices."
      },
      {
        "heading": "Sin garantía",
        "body": "El servicio se ofrece \"tal cual\" y \"según disponibilidad\", sin garantías de ningún tipo, ya sean expresas o implícitas, incluida la exactitud, la idoneidad para un propósito determinado o la disponibilidad ininterrumpida."
      },
      {
        "heading": "Limitación de responsabilidad",
        "body": "En la máxima medida permitida por la ley, SplitWhom y su operador no son responsables de daños indirectos, incidentales o consecuentes, ni de ninguna pérdida derivada de tu uso del sitio."
      },
      {
        "heading": "Uso aceptable",
        "body": "No uses el sitio con ningún fin ilícito ni de una manera que pueda dañarlo, inhabilitarlo o perjudicarlo."
      },
      {
        "heading": "Cambios",
        "body": "Es posible que actualicemos estos términos o el servicio en cualquier momento. El uso continuado tras los cambios significa que aceptas los términos actualizados."
      },
      {
        "heading": "Contacto",
        "body": "¿Preguntas sobre estos términos? Contáctanos en contact@splitwhom.com."
      }
    ]
  },
  "about": {
    "title": "Acerca de SplitWhom",
    "paragraphs": [
      "SplitWhom es una app web gratuita y sin registro que hace que dividir los gastos compartidos de un grupo sea sencillo. En lugar de mostrar solo saldos, calcula la menor cantidad de pagos necesarios para que todos queden a mano: ideal para viajes, campamentos, casas compartidas y fiestas.",
      "Está creada para ser privada por diseño: no hay cuentas ni base de datos en el servidor. Cada cálculo se hace en tu navegador, y tus datos se quedan en tu dispositivo a menos que elijas compartir un enlace.",
      "SplitWhom está disponible en muchos idiomas y es gratis, con el apoyo de anuncios."
    ],
    "contactHeading": "Contacto",
    "contactBody": "¿Preguntas, comentarios o ideas? Escríbenos a"
  },
  "crossPromo": {
    "eyebrow": "Del equipo de SplitWhom",
    "title": "¿Viajas en grupo? Conoce a un local",
    "body": "Shenzhen Buddies conecta a viajeros de todo el mundo con gente local que comparte sus intereses y les enseña la ciudad.",
    "cta": "Descubre Shenzhen Buddies"
  }
};
