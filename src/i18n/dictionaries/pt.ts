import type { Dictionary } from "../types";

export const pt: Dictionary = {
  "meta": {
    "title": "SplitWhom — divida a conta e veja quem paga quem",
    "description": "App web gratuito e sem login que divide despesas em grupo e mostra exatamente quem paga quem com o menor número de pagamentos. Perfeito para viagens, camping e repúblicas.",
    "keywords": [
      "dividir conta",
      "dividir despesas",
      "rateio de contas",
      "quem paga quem",
      "acertar contas",
      "despesas em grupo",
      "calculadora de rateio",
      "dividir gastos do grupo",
      "racha conta"
    ],
    "ogTitle": "SplitWhom — divida a conta e veja quem paga quem",
    "ogDescription": "Divida despesas em grupo e acerte as contas com o menor número de pagamentos. Sem cadastro, grátis e direto no navegador."
  },
  "hero": {
    "tagline": "Divida despesas compartilhadas e veja exatamente quem paga quem — com o menor número de pagamentos. Sem cadastro, roda inteiramente no seu navegador."
  },
  "setup": {
    "eventName": "Nome do evento",
    "eventPlaceholder": "ex.: Viagem de camping",
    "currency": "Moeda"
  },
  "members": {
    "title": "Participantes",
    "addPlaceholder": "Adicionar um nome",
    "add": "Adicionar",
    "empty": "Adicione todo mundo que dividiu os gastos.",
    "removeAria": "Remover {name}",
    "confirmDelete": "Isso também apaga {count} pagamento(s) feito(s) por {name}. Continuar?",
    "peopleLabel": "pessoas"
  },
  "payments": {
    "title": "Pagamentos",
    "itemsLabel": "itens",
    "addMembersFirst": "Adicione participantes primeiro.",
    "paidBy": "Pago por",
    "description": "Descrição",
    "descPlaceholder": "ex.: Comida",
    "amount": "Valor",
    "splitBetween": "Dividir entre",
    "selectAll": "Selecionar todos",
    "clearAll": "Limpar tudo",
    "addPayment": "Adicionar pagamento",
    "paidFor": "pagou",
    "splitEveryone": "Dividir entre todos",
    "splitBetweenNames": "Dividir entre {names}",
    "deleteAria": "Excluir",
    "removed": "(removido)",
    "capToggle": "Limites de gasto (opcional)",
    "capPlaceholder": "sem limite",
    "capTag": "máx",
    "splitRest": "Restante dividido entre {names}",
    "capsTooLow": "Esses limites não cobrem o total."
  },
  "results": {
    "emptyPrompt": "Adicione participantes e pagamentos para ver o acerto aqui.",
    "settlementTitle": "Acerto — menos pagamentos",
    "total": "Total {amount}",
    "allSettled": "Tudo acertado — ninguém deve nada 🎉",
    "balancesTitle": "Saldos",
    "member": "Participante",
    "paid": "Pagou",
    "share": "Cota",
    "net": "Saldo",
    "legendPositive": "Positivo",
    "legendNegative": "negativo",
    "legendPositiveDesc": "= recebe de volta",
    "legendNegativeDesc": "= deve"
  },
  "footer": {
    "loadSample": "Carregar dados de exemplo",
    "reset": "Apagar tudo",
    "confirmSample": "Substituir seus dados atuais pelos dados de exemplo?",
    "confirmReset": "Apagar todos os dados? Isso não pode ser desfeito."
  },
  "sample": {
    "title": "Viagem de camping",
    "names": [
      "Lucas",
      "Beatriz",
      "Gabriel",
      "Mariana",
      "Rafael"
    ],
    "food": "Comida",
    "drinks": "Bebidas",
    "firewood": "Lenha"
  },
  "landing": {
    "heroHeading": "Divida a conta e veja quem paga quem",
    "heroSub": "Quando várias pessoas pagam por coisas diferentes, o SplitWhom calcula o jeito mais simples de acertar as contas — o menor número de pagamentos para deixar todo mundo quites. Grátis, sem conta e sem app para instalar.",
    "howItWorksTitle": "Como funciona",
    "steps": [
      {
        "title": "Adicione todo mundo",
        "body": "Liste as pessoas que dividiram os gastos — amigos, colegas de casa, a turma do camping."
      },
      {
        "title": "Informe quem pagou o quê",
        "body": "Adicione cada pagamento com o valor e escolha exatamente entre quem ele deve ser dividido."
      },
      {
        "title": "Tenha o menor número de pagamentos",
        "body": "O SplitWhom mostra na hora quem paga quem para acertar as contas com o mínimo de transferências."
      }
    ],
    "whyTitle": "Por que o SplitWhom",
    "features": [
      {
        "title": "Menos pagamentos",
        "body": "A maioria dos apps só mostra os saldos. O SplitWhom calcula o conjunto mínimo de transferências, para você fazer o menor número possível de pagamentos."
      },
      {
        "title": "Divida cada item do seu jeito",
        "body": "Dividiram a comida, mas só três compraram bebida? Escolha quem entra em cada despesa."
      },
      {
        "title": "Privado por natureza",
        "body": "Sem cadastro e sem servidor — todo cálculo roda no seu navegador e seus dados ficam no seu dispositivo."
      },
      {
        "title": "Qualquer moeda",
        "body": "Funciona com BRL, USD, EUR, JPY e mais, com arredondamento exato para nenhum centavo se perder."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Como dividir uma conta quando várias pessoas pagaram?",
        "a": "Informe cada pagamento e quem dividiu. O SplitWhom soma o que cada um pagou contra o que deve e mostra o menor número de transferências para deixar todo mundo quites."
      },
      {
        "q": "O SplitWhom é grátis?",
        "a": "Sim, totalmente grátis. Não tem conta, nem assinatura, nem nada para instalar — roda direto no seu navegador."
      },
      {
        "q": "Posso dividir uma despesa só entre algumas pessoas?",
        "a": "Sim. Em cada pagamento você escolhe exatamente entre quem ele é dividido, então gastos do grupo e gastos de só alguns funcionam certinho."
      },
      {
        "q": "Funciona para viagens, camping e colegas de casa?",
        "a": "É exatamente para isso — qualquer situação em que mais de uma pessoa adiantou o dinheiro e vocês precisam acertar as contas de forma justa."
      },
      {
        "q": "Meus dados são privados?",
        "a": "Sim. Não há login nem servidor. Todos os cálculos acontecem no seu navegador e seus dados são salvos só no seu dispositivo."
      }
    ]
  },
  "switcher": {
    "label": "Idioma"
  },
  "share": {
    "share": "Compartilhar",
    "copied": "Link copiado!",
    "edit": "Editar",
    "readonlyNote": "Resultado compartilhado · só visualização",
    "invalid": "Este link compartilhado é inválido ou está vazio.",
    "ctaTitle": "Divida as despesas do seu próprio grupo",
    "ctaButton": "Abrir SplitWhom"
  }
};
