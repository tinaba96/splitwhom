import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — AA分账，一眼看清谁该给谁付钱",
    "description": "免费免注册的网页应用，帮你拆分团体开销，用最少的转账次数清清楚楚算出谁该给谁付钱。旅行、露营、合租都适用。",
    "keywords": [
      "aa分账",
      "分摊费用",
      "聚餐分账工具",
      "谁给谁付钱",
      "旅行费用分摊",
      "团体开销结算",
      "记账分账app",
      "aa制计算器"
    ],
    "ogTitle": "SplitWhom — AA分账，一眼看清谁该给谁付钱",
    "ogDescription": "拆分团体开销，用最少的转账次数完成结算。免注册、免费、在浏览器里直接用。"
  },
  "hero": {
    "tagline": "拆分共同开销，用最少的转账次数清楚算出谁该给谁付钱。免注册，全程在你的浏览器里运行。"
  },
  "setup": {
    "eventName": "活动名称",
    "eventPlaceholder": "例如：露营之旅",
    "currency": "货币"
  },
  "members": {
    "title": "成员",
    "addPlaceholder": "添加姓名",
    "add": "添加",
    "empty": "把一起分摊费用的人都加进来。",
    "removeAria": "移除 {name}",
    "confirmDelete": "此操作将同时删除 {name} 支付的 {count} 笔款项。是否继续？",
    "peopleLabel": "人",
    "notePlaceholder": "邮箱 / 电话 / 收款ID（选填）",
    "contactsTitle": "成员与收款信息",
    "copy": "复制",
    "copied": "已复制！"
  },
  "payments": {
    "title": "款项",
    "itemsLabel": "笔",
    "addMembersFirst": "请先添加成员。",
    "paidBy": "付款人",
    "description": "说明",
    "descPlaceholder": "例如：餐费",
    "amount": "金额",
    "splitBetween": "分摊人",
    "selectAll": "全选",
    "clearAll": "全部清除",
    "addPayment": "添加款项",
    "paidFor": "支付了",
    "splitEveryone": "由所有人分摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）",
    "capToggle": "消费上限（选填）",
    "capPlaceholder": "无上限",
    "capTag": "上限",
    "splitRest": "余额由 {names} 分摊",
    "capsTooLow": "这些上限不足以覆盖总额。"
  },
  "results": {
    "emptyPrompt": "添加成员和款项后，结算结果将显示在这里。",
    "settlementTitle": "结算 — 最少转账次数",
    "total": "合计 {amount}",
    "allSettled": "全部结清 — 谁都不欠谁 🎉",
    "balancesTitle": "收支明细",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正数",
    "legendNegative": "负数",
    "legendPositiveDesc": "= 应收回款项",
    "legendNegativeDesc": "= 应付款项"
  },
  "footer": {
    "loadSample": "加载示例数据",
    "reset": "全部重置",
    "confirmSample": "用示例数据替换你当前的数据吗？",
    "confirmReset": "清空所有数据？此操作无法撤销。"
  },
  "sample": {
    "title": "露营之旅",
    "names": [
      "伟",
      "芳",
      "敏",
      "强",
      "静"
    ],
    "food": "餐费",
    "drinks": "饮料",
    "firewood": "柴火"
  },
  "landing": {
    "heroHeading": "AA分账，一眼看清谁该给谁付钱",
    "heroSub": "当几个人分别付了不同的钱，SplitWhom 会算出最简单的结算方式——用最少的转账让大家两清。免费、免注册、无需安装App。",
    "howItWorksTitle": "使用方法",
    "steps": [
      {
        "title": "添加所有人",
        "body": "列出一起分摊费用的人——朋友、室友，或你的露营搭子。"
      },
      {
        "title": "录入谁付了什么",
        "body": "为每笔款项填写金额，并精确选择该由哪些人分摊。"
      },
      {
        "title": "得到最少转账方案",
        "body": "SplitWhom 立刻算出谁该给谁付钱，用最少的转账次数完成结算。"
      }
    ],
    "whyTitle": "为什么选择 SplitWhom",
    "features": [
      {
        "title": "转账次数最少",
        "body": "大多数分账工具只显示收支余额。SplitWhom 会算出最精简的转账组合，让你尽可能少付几笔。"
      },
      {
        "title": "每笔费用自由分摊",
        "body": "餐费大家一起分，但饮料只有三个人买？每一笔开销都能自由选择由谁分摊。"
      },
      {
        "title": "隐私优先设计",
        "body": "免注册、无服务器——所有计算都在你的浏览器里完成，数据始终留在你的设备上。"
      },
      {
        "title": "支持任意货币",
        "body": "支持人民币、美元、欧元、日元等多种货币，精确取整，绝不丢失一分一厘。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "SplitWhom 和 Splitwise 等应用有什么不同？",
        "a": "SplitWhom 专为快速、一次性的结账而生：无需账号、无需安装应用，也没有服务器。一切都在你的浏览器中私密运行，数据绝不离开你的设备；你甚至可以为某个人设定支付上限，剩余部分由 SplitWhom 自动重新分配。打开链接、分摊账单，几秒内分享一份只读汇总——完全免费，简单得令人惊喜。"
      },
      {
        "q": "几个人都付了钱，要怎么AA分账？",
        "a": "录入每一笔款项以及由谁分摊。SplitWhom 会算出每个人实付了多少、应摊多少，再给出让大家两清的最少转账方案。"
      },
      {
        "q": "SplitWhom 是免费的吗？",
        "a": "是的，完全免费。无需账号、无需订阅、无需安装——直接在浏览器里使用。"
      },
      {
        "q": "可以只让部分人分摊某一笔费用吗？",
        "a": "可以。每一笔款项你都能精确选择由谁分摊，无论是大家共担的费用还是小范围的费用都能正确处理。"
      },
      {
        "q": "它适合旅行、露营和室友分账吗？",
        "a": "这正是它的用途——只要有不止一个人垫了钱、需要公平结算的场景都适用。"
      },
      {
        "q": "我的数据安全吗？",
        "a": "安全。无需登录、无服务器。所有计算都在你的浏览器里完成，数据只保存在你的设备上。"
      },
      {
        "q": "可以限制某个人最多付多少钱吗？",
        "a": "可以。任意款项都能为特定的人设置上限（最多付多少），他们最多只付该金额，其余部分由其他人分摊。"
      },
      {
        "q": "可以把结果分享给同伴吗？",
        "a": "可以。点击「分享」即可复制一个链接，打开后是只读的「谁付给谁」结果摘要。数据全部编码在链接本身里——服务器上不存储任何内容。"
      },
      {
        "q": "在手机上能用吗？",
        "a": "能。SplitWhom 可在任意现代手机或电脑浏览器上运行——无需安装App。"
      }
    ],
    "useCasesTitle": "专为真实的团体开销而生",
    "useCases": [
      {
        "title": "露营与户外出行",
        "body": "一个人买食材，一个人买柴火，还有人买装备——SplitWhom 用最少的转账帮你全部摆平。"
      },
      {
        "title": "旅行与度假",
        "body": "酒店、打车、晚餐由不同的人在旅途中分别支付？最后用一份清晰的清单一次性结清。"
      },
      {
        "title": "合租与室友",
        "body": "分摊买菜、水电和日用品——还能精确选择每笔费用由谁分摊。"
      },
      {
        "title": "派对、烧烤与聚餐",
        "body": "几个人凑钱办聚会时，一眼看清谁该给谁付钱。"
      }
    ]
  },
  "switcher": {
    "label": "语言"
  },
  "share": {
    "share": "分享",
    "copied": "链接已复制！",
    "edit": "编辑",
    "readonlyNote": "分享结果 · 仅供查看",
    "invalid": "此分享链接无效或为空。",
    "ctaTitle": "分摊你自己的团体开销",
    "ctaButton": "打开 SplitWhom"
  },
  "site": {
    "footerTagline": "AA分账，一眼看清谁该给谁付钱——免费、免注册。",
    "privacy": "隐私政策",
    "terms": "服务条款",
    "about": "关于",
    "contact": "联系我们",
    "rights": "版权所有。"
  },
  "privacy": {
    "title": "隐私政策",
    "updatedLabel": "最后更新",
    "intro": "本隐私政策说明你在使用 splitwhom.com 网站时，SplitWhom 如何处理信息。SplitWhom 没有用户账号，也没有服务器端数据库——你创建的分账数据始终保存在你自己的浏览器中。",
    "sections": [
      {
        "heading": "你录入的信息",
        "body": "你输入的成员、款项和备注仅保存在你设备上浏览器的本地存储中。它们不会被传输到或存储在我们的服务器上，因为 SplitWhom 没有后端数据库。"
      },
      {
        "heading": "分享链接",
        "body": "当你创建分享链接时，分账数据会被压缩并编码在链接的 URL 片段中（# 符号之后）。这些数据不会发送到任何服务器。任何拿到该链接的人都能查看其中的数据，因此请只分享给你确实想分享的人。"
      },
      {
        "heading": "Cookie 与本地存储",
        "body": "SplitWhom 本身会使用你浏览器的本地存储来记住你当前的分账。我们不设置自己的跟踪 Cookie。但下列第三方服务可能会在你的浏览器中设置 Cookie。"
      },
      {
        "heading": "分析",
        "body": "我们使用 Google Analytics 4 来了解网站的使用情况（例如页面浏览量和大致地理位置）。Google 可能会设置 Cookie 并按照其自身政策处理这些数据。详情请参阅 Google 的隐私政策：policies.google.com/privacy。"
      },
      {
        "heading": "广告",
        "body": "我们使用 Google AdSense 来展示广告。包括 Google 在内的第三方供应商会使用 Cookie，根据你过去对本网站和其他网站的访问来投放广告。Google 使用广告 Cookie 使其及其合作伙伴能够向你投放广告。你可以访问 Google 广告设置 adsettings.google.com 退出个性化广告，或访问 aboutads.info 退出第三方供应商对 Cookie 的使用。"
      },
      {
        "heading": "欧洲经济区、英国和瑞士的同意",
        "body": "如果你身处欧洲经济区、英国或瑞士，系统会按照适用法律的要求向你显示同意提示，以便你选择如何将数据用于广告。"
      },
      {
        "heading": "儿童",
        "body": "SplitWhom 并非面向 13 岁以下儿童，我们也不会在知情的情况下收集他们的个人信息。"
      },
      {
        "heading": "你的选择",
        "body": "你可以随时使用「重置」按钮或清除浏览器存储来清除数据，通过上述控件拒绝或管理广告个性化，也可以根据需要使用浏览器的广告/跟踪拦截工具。"
      },
      {
        "heading": "政策变更",
        "body": "我们可能会不时更新本政策。重大变更将以上方显示的日期为准。"
      },
      {
        "heading": "联系我们",
        "body": "如对本政策有任何疑问，请通过 contact@splitwhom.com 与我们联系。"
      }
    ]
  },
  "terms": {
    "title": "服务条款",
    "updatedLabel": "最后更新",
    "intro": "使用 splitwhom.com 上的 SplitWhom 即表示你同意本条款。如果你不同意，请勿使用本网站。",
    "sections": [
      {
        "heading": "服务内容",
        "body": "SplitWhom 是一款免费工具，帮助团体拆分共同开销并算出谁该给谁付钱。它无需账号，在你的浏览器中运行。"
      },
      {
        "heading": "自行斟酌使用",
        "body": "SplitWhom 仅为方便而提供。在转账前请务必核对结果。你需对如何使用这些计算结果以及你所做的任何付款负责。"
      },
      {
        "heading": "不提供保证",
        "body": "本服务按「现状」和「现有」基础提供，不作任何明示或暗示的保证，包括准确性、特定用途适用性或不间断可用性。"
      },
      {
        "heading": "责任限制",
        "body": "在法律允许的最大范围内，SplitWhom 及其运营者不对任何间接、附带或后果性损害，或因你使用本网站而产生的任何损失承担责任。"
      },
      {
        "heading": "可接受的使用",
        "body": "请勿将本网站用于任何非法目的，或以可能损坏、禁用或削弱本网站的方式使用。"
      },
      {
        "heading": "变更",
        "body": "我们可能随时更新本条款或服务。变更后继续使用即表示你接受更新后的条款。"
      },
      {
        "heading": "联系我们",
        "body": "对本条款有疑问？请通过 contact@splitwhom.com 与我们联系。"
      }
    ]
  },
  "about": {
    "title": "关于 SplitWhom",
    "paragraphs": [
      "SplitWhom 是一款免费、免注册的网页应用，让拆分团体共同开销变得简单。它不只是显示收支余额，还会算出让每个人两清所需的最少转账次数——非常适合旅行、露营、合租和聚会。",
      "它从设计之初就以隐私为先：没有账号，也没有服务器端数据库。所有计算都在你的浏览器里完成，除非你主动分享链接，否则数据始终留在你的设备上。",
      "SplitWhom 支持多种语言，可免费使用，依靠广告支持运营。"
    ],
    "contactHeading": "联系我们",
    "contactBody": "有问题、反馈或建议？请通过以下方式联系我们："
  },
  "crossPromo": {
    "eyebrow": "来自 SplitWhom 团队",
    "title": "结伴出游？认识一位当地朋友",
    "body": "Shenzhen Buddies 将各国旅行者与志同道合的当地人配对，带你逛遍这座城市。",
    "cta": "了解 Shenzhen Buddies"
  }
};
