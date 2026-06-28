import type { Dictionary } from "../types";

export const pt: Dictionary = {
  "meta": {
    "title": "SplitWhom — divida a conta e veja quem paga quem",
    "description": "App web grátis, sem cadastro, que divide despesas em grupo e mostra exatamente quem paga quem no menor número de pagamentos. Ideal para viagens, acampamentos e repúblicas.",
    "keywords": [
      "dividir a conta",
      "dividir despesas",
      "rachar a conta",
      "quem paga quem",
      "acerto de contas",
      "despesas em grupo",
      "calculadora de divisão de contas",
      "rachar despesas"
    ],
    "ogTitle": "SplitWhom — divida a conta e veja quem paga quem",
    "ogDescription": "Divida despesas em grupo e acerte as contas no menor número de pagamentos. Sem cadastro, grátis e direto no navegador."
  },
  "hero": {
    "tagline": "Divida despesas compartilhadas e veja exatamente quem paga quem — com o menor número de pagamentos. Sem cadastro, roda inteirinho no seu navegador."
  },
  "setup": {
    "eventName": "Nome do evento",
    "eventPlaceholder": "ex.: Acampamento",
    "currency": "Moeda"
  },
  "members": {
    "title": "Participantes",
    "addPlaceholder": "Adicionar um nome",
    "add": "Adicionar",
    "empty": "Adicione todo mundo que dividiu os custos.",
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
    "paidFor": "pagou por",
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
    "share": "Parte",
    "net": "Saldo",
    "legendPositive": "Positivo",
    "legendNegative": "negativo",
    "legendPositiveDesc": "= recebe de volta",
    "legendNegativeDesc": "= deve dinheiro"
  },
  "footer": {
    "loadSample": "Carregar dados de exemplo",
    "reset": "Apagar tudo",
    "confirmSample": "Substituir seus dados atuais pelos dados de exemplo?",
    "confirmReset": "Apagar todos os dados? Isso não pode ser desfeito."
  },
  "sample": {
    "title": "Acampamento",
    "names": [
      "Lucas",
      "Bruno",
      "Camila",
      "Daniel",
      "Mariana"
    ],
    "food": "Comida",
    "drinks": "Bebidas",
    "firewood": "Lenha"
  },
  "landing": {
    "heroHeading": "Divida a conta e veja quem paga quem",
    "heroSub": "Quando várias pessoas pagam por coisas diferentes, o SplitWhom calcula o jeito mais simples de acertar as contas — o menor número de pagamentos para deixar todo mundo quite. Grátis, sem conta e sem app para instalar.",
    "howItWorksTitle": "Como funciona",
    "steps": [
      {
        "title": "Adicione todo mundo",
        "body": "Liste as pessoas que dividiram as despesas — amigos, colegas de casa ou a turma do acampamento."
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
        "body": "A maioria dos apps só mostra os saldos. O SplitWhom calcula o conjunto mínimo de transferências, para você fazer o menor número de pagamentos possível."
      },
      {
        "title": "Divida cada item do seu jeito",
        "body": "Todos dividiram a comida, mas só três compraram bebida? Escolha quem entra em cada despesa."
      },
      {
        "title": "Privado por natureza",
        "body": "Sem cadastro e sem servidor — cada cálculo roda no seu navegador e seus dados ficam no seu dispositivo."
      },
      {
        "title": "Qualquer moeda",
        "body": "Funciona em BRL, USD, EUR, JPY e mais, com arredondamento exato para nenhum centavo se perder."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Como dividir uma conta quando várias pessoas pagaram?",
        "a": "Informe cada pagamento e quem participou dele. O SplitWhom soma o que cada um pagou versus o que cada um deve e mostra o menor número de transferências para deixar todo mundo quite."
      },
      {
        "q": "O SplitWhom é grátis?",
        "a": "Sim, totalmente grátis. Não tem conta, não tem assinatura e nada para instalar — roda direto no seu navegador."
      },
      {
        "q": "Dá para dividir uma única despesa entre só algumas pessoas?",
        "a": "Sim. Em cada pagamento você escolhe exatamente entre quem ele é dividido, então despesas de todos e despesas só de alguns funcionam certinho."
      },
      {
        "q": "Funciona para viagens, acampamentos e colegas de casa?",
        "a": "É exatamente para isso — qualquer situação em que mais de uma pessoa adiantou o dinheiro e você precisa acertar as contas de forma justa."
      },
      {
        "q": "Meus dados são privados?",
        "a": "Sim. Não tem login nem servidor. Todos os cálculos acontecem no seu navegador e seus dados ficam salvos só no seu dispositivo."
      }
    ]
  },
  "switcher": {
    "label": "Idioma"
  }
};
