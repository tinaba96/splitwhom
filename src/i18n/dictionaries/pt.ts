import type { Dictionary } from "../types";

export const pt: Dictionary = {
  "meta": {
    "title": "SplitWhom — divida a conta e veja quem paga quem",
    "description": "App web grátis e sem login que divide despesas em grupo e mostra exatamente quem paga quem com o menor número de pagamentos. Perfeito para viagens, acampamentos e repúblicas.",
    "keywords": [
      "dividir a conta",
      "dividir despesas",
      "rachar a conta",
      "quem paga quem",
      "acertar as contas",
      "despesas em grupo",
      "calculadora de rateio",
      "dividir gastos em grupo"
    ],
    "ogTitle": "SplitWhom — divida a conta e veja quem paga quem",
    "ogDescription": "Divida despesas em grupo e acerte as contas com o menor número de pagamentos. Sem cadastro, grátis e funciona no seu navegador."
  },
  "hero": {
    "tagline": "Divida despesas compartilhadas e veja exatamente quem paga quem — com o menor número de pagamentos. Sem cadastro, roda totalmente no seu navegador."
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
    "empty": "Adicione todo mundo que dividiu os gastos.",
    "removeAria": "Remover {name}",
    "confirmDelete": "Isso também exclui {count} pagamento(s) feito(s) por {name}. Continuar?",
    "peopleLabel": "pessoas",
    "notePlaceholder": "E-mail / telefone / chave de pagamento (opcional)",
    "contactsTitle": "Participantes e dados de pagamento",
    "copy": "Copiar",
    "copied": "Copiado!"
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
    "capTag": "máx.",
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
    "title": "Acampamento",
    "names": [
      "Lucas",
      "Mateus",
      "Beatriz",
      "Rafael",
      "Júlia"
    ],
    "food": "Comida",
    "drinks": "Bebidas",
    "firewood": "Lenha"
  },
  "landing": {
    "heroHeading": "Divida a conta e veja quem paga quem",
    "heroSub": "Quando várias pessoas pagam por coisas diferentes, o SplitWhom calcula a forma mais simples de acertar as contas — o menor número de pagamentos para deixar todo mundo quite. Grátis, sem conta e sem app para instalar.",
    "howItWorksTitle": "Como funciona",
    "steps": [
      {
        "title": "Adicione todo mundo",
        "body": "Liste as pessoas que dividiram as despesas — amigos, colegas de república, a turma do acampamento."
      },
      {
        "title": "Informe quem pagou o quê",
        "body": "Adicione cada pagamento com o valor e escolha exatamente entre quem ele deve ser dividido."
      },
      {
        "title": "Receba o menor número de pagamentos",
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
        "body": "Todos dividiram a comida, mas só três compraram bebida? Escolha quem entra em cada despesa."
      },
      {
        "title": "Privado por natureza",
        "body": "Sem cadastro e sem servidor — todo cálculo roda no seu navegador e seus dados ficam no seu dispositivo."
      },
      {
        "title": "Qualquer moeda",
        "body": "Funciona com real, dólar, euro, iene e mais, com arredondamento exato para nenhum centavo se perder."
      }
    ],
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Como dividir uma conta quando várias pessoas pagaram?",
        "a": "Informe cada pagamento e quem o dividiu. O SplitWhom soma o que cada um pagou em comparação com o que deve e mostra o menor número de transferências para deixar todo mundo quite."
      },
      {
        "q": "O SplitWhom é grátis?",
        "a": "Sim, totalmente grátis. Não tem conta, não tem assinatura e nada para instalar — roda no seu navegador."
      },
      {
        "q": "Posso dividir uma única despesa só entre algumas pessoas?",
        "a": "Sim. Em cada pagamento você escolhe exatamente entre quem ele é dividido, então gastos compartilhados e gastos de apenas parte do grupo são tratados corretamente."
      },
      {
        "q": "Funciona para viagens, acampamentos e colegas de república?",
        "a": "É exatamente para isso que ele serve — qualquer situação em que mais de uma pessoa adiantou o dinheiro e você precisa acertar as contas de forma justa."
      },
      {
        "q": "Meus dados são privados?",
        "a": "Sim. Não tem login nem servidor. Todos os cálculos acontecem no seu navegador e seus dados são salvos somente no seu dispositivo."
      },
      {
        "q": "Posso limitar quanto uma pessoa paga?",
        "a": "Sim. Em qualquer pagamento você pode definir um valor máximo (limite) para pessoas específicas; elas pagam no máximo aquele valor e o restante é dividido entre as outras."
      },
      {
        "q": "Posso compartilhar o resultado com o meu grupo?",
        "a": "Sim. Toque em Compartilhar para copiar um link que abre um resumo somente leitura de quem paga quem. Os dados ficam codificados no próprio link — nada é armazenado em um servidor."
      },
      {
        "q": "Funciona no meu celular?",
        "a": "Sim. O SplitWhom roda em qualquer navegador moderno de celular ou computador — não tem app para instalar."
      }
    ],
    "useCasesTitle": "Feito para gastos em grupo da vida real",
    "useCases": [
      {
        "title": "Acampamentos e trilhas",
        "body": "Uma pessoa compra a comida, outra a lenha, uma terceira os equipamentos — o SplitWhom equilibra tudo com o menor número de pagamentos."
      },
      {
        "title": "Viagens e férias",
        "body": "Hotéis, táxis e jantares pagos por pessoas diferentes durante a viagem? Acerte tudo no final com uma lista clara."
      },
      {
        "title": "Repúblicas e colegas de casa",
        "body": "Divida mercado, contas e materiais — e escolha exatamente quem participa de cada despesa."
      },
      {
        "title": "Festas, churrascos e jantares em grupo",
        "body": "Quando várias pessoas contribuem para um encontro, veja num relance quem deve a quem."
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
    "readonlyNote": "Resultado compartilhado · somente leitura",
    "invalid": "Este link compartilhado é inválido ou está vazio.",
    "ctaTitle": "Divida as despesas do seu próprio grupo",
    "ctaButton": "Abrir o SplitWhom"
  },
  "site": {
    "footerTagline": "Divida a conta e veja quem paga quem — grátis e sem cadastro.",
    "privacy": "Política de Privacidade",
    "terms": "Termos de Serviço",
    "about": "Sobre",
    "contact": "Contato",
    "rights": "Todos os direitos reservados."
  },
  "privacy": {
    "title": "Política de Privacidade",
    "updatedLabel": "Última atualização",
    "intro": "Esta Política de Privacidade explica como o SplitWhom trata as informações quando você usa o site em splitwhom.com. O SplitWhom não tem contas de usuário nem banco de dados no servidor — a divisão que você cria fica no seu próprio navegador.",
    "sections": [
      {
        "heading": "Informações que você insere",
        "body": "Os participantes, pagamentos e anotações que você digita são armazenados apenas no armazenamento local do seu navegador, no seu dispositivo. Eles não são transmitidos nem armazenados em nossos servidores, porque o SplitWhom não tem banco de dados de back-end."
      },
      {
        "heading": "Links compartilhados",
        "body": "Quando você cria um link de Compartilhamento, os dados da divisão são comprimidos e codificados dentro do fragmento da URL do link (após o símbolo #). Eles não são enviados a nenhum servidor. Qualquer pessoa a quem você der o link pode ver esses dados, então compartilhe apenas com quem você pretende."
      },
      {
        "heading": "Cookies e armazenamento local",
        "body": "O próprio SplitWhom usa o armazenamento local do seu navegador para lembrar a sua divisão atual. Não definimos nossos próprios cookies de rastreamento. No entanto, os serviços de terceiros abaixo podem definir cookies no seu navegador."
      },
      {
        "heading": "Análise",
        "body": "Usamos o Google Analytics 4 para entender como o site é utilizado (por exemplo, visualizações de página e localização geral). O Google pode definir cookies e processar esses dados de acordo com suas próprias políticas. Para mais detalhes, consulte a Política de Privacidade do Google em policies.google.com/privacy."
      },
      {
        "heading": "Publicidade",
        "body": "Usamos o Google AdSense para exibir anúncios. Fornecedores terceiros, incluindo o Google, usam cookies para veicular anúncios com base nas suas visitas anteriores a este e a outros sites. O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para você. Você pode desativar a publicidade personalizada visitando as Configurações de Anúncios do Google em adsettings.google.com ou desativar o uso de cookies por fornecedores terceiros em aboutads.info."
      },
      {
        "heading": "Consentimento na EEE, no Reino Unido e na Suíça",
        "body": "Se você estiver no Espaço Econômico Europeu, no Reino Unido ou na Suíça, uma mensagem de consentimento é exibida para que você possa escolher como seus dados são usados para anúncios, conforme exigido pela legislação aplicável."
      },
      {
        "heading": "Crianças",
        "body": "O SplitWhom não é direcionado a crianças menores de 13 anos e não coletamos intencionalmente informações pessoais delas."
      },
      {
        "heading": "Suas opções",
        "body": "Você pode apagar seus dados a qualquer momento usando o botão Apagar ou limpando o armazenamento do navegador, recusar ou gerenciar a personalização de anúncios pelos controles acima e usar um bloqueador de anúncios/rastreadores no navegador, se preferir."
      },
      {
        "heading": "Alterações nesta política",
        "body": "Podemos atualizar esta política de tempos em tempos. Alterações relevantes serão refletidas pela data mostrada acima."
      },
      {
        "heading": "Contato",
        "body": "Se você tiver dúvidas sobre esta política, fale conosco em contact@splitwhom.com."
      }
    ]
  },
  "terms": {
    "title": "Termos de Serviço",
    "updatedLabel": "Última atualização",
    "intro": "Ao usar o SplitWhom em splitwhom.com, você concorda com estes termos. Se não concordar, por favor não use o site.",
    "sections": [
      {
        "heading": "O serviço",
        "body": "O SplitWhom é uma ferramenta gratuita que ajuda grupos a dividir despesas compartilhadas e ver quem paga quem. Não exige conta e roda no seu navegador."
      },
      {
        "heading": "Use a seu critério",
        "body": "O SplitWhom é fornecido para sua conveniência. Sempre confira os resultados antes de transferir dinheiro. Você é responsável pelo uso que faz dos cálculos e por quaisquer pagamentos que realizar."
      },
      {
        "heading": "Sem garantia",
        "body": "O serviço é fornecido \"como está\" e \"conforme disponível\", sem garantias de qualquer tipo, expressas ou implícitas, incluindo precisão, adequação a uma finalidade específica ou disponibilidade ininterrupta."
      },
      {
        "heading": "Limitação de responsabilidade",
        "body": "Na máxima extensão permitida por lei, o SplitWhom e seu operador não se responsabilizam por quaisquer danos indiretos, incidentais ou consequentes, nem por qualquer perda decorrente do seu uso do site."
      },
      {
        "heading": "Uso aceitável",
        "body": "Não use o site para qualquer finalidade ilegal nem de forma que possa danificá-lo, desativá-lo ou prejudicá-lo."
      },
      {
        "heading": "Alterações",
        "body": "Podemos atualizar estes termos ou o serviço a qualquer momento. O uso contínuo após as alterações significa que você aceita os termos atualizados."
      },
      {
        "heading": "Contato",
        "body": "Dúvidas sobre estes termos? Fale conosco em contact@splitwhom.com."
      }
    ]
  },
  "about": {
    "title": "Sobre o SplitWhom",
    "paragraphs": [
      "O SplitWhom é um app web grátis e sem login que torna simples dividir despesas compartilhadas em grupo. Em vez de apenas mostrar saldos, ele calcula o menor número de pagamentos necessários para que todos fiquem quites — perfeito para viagens, acampamentos, repúblicas e festas.",
      "Ele foi feito para ser privado por natureza: não há contas nem banco de dados no servidor. Todo cálculo roda no seu navegador, e seus dados ficam no seu dispositivo, a menos que você opte por compartilhar um link.",
      "O SplitWhom está disponível em vários idiomas e é gratuito, mantido por anúncios."
    ],
    "contactHeading": "Contato",
    "contactBody": "Dúvidas, comentários ou ideias? Fale com a gente em"
  }
};
