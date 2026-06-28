import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — 分账神器，一键算清谁该给谁钱",
    "description": "免费、免注册的网页应用，自动分摊多人共同开销，用最少的转账次数算出谁该付给谁多少钱。旅行、露营、合租房一用就上手。",
    "keywords": [
      "AA制怎么算",
      "多人分账",
      "旅行分账工具",
      "谁该给谁钱",
      "一键分账",
      "AA制计算器",
      "聚会平摊账单",
      "合租分摊费用",
      "最少转账次数"
    ],
    "ogTitle": "SplitWhom — 分账神器，一键算清谁该给谁钱",
    "ogDescription": "多人共同开销自动平摊，用最少的转账次数清账。免注册、免费、纯浏览器运行。"
  },
  "hero": {
    "tagline": "分摊共同开销，用最少的转账次数算清谁该给谁钱。免注册，全程在浏览器里完成。"
  },
  "setup": {
    "eventName": "活动名称",
    "eventPlaceholder": "例如：露营之旅",
    "currency": "货币"
  },
  "members": {
    "title": "成员",
    "addPlaceholder": "添加成员",
    "add": "添加",
    "empty": "把一起分摊开销的人都加进来。",
    "removeAria": "移除 {name}",
    "confirmDelete": "这将同时删除 {name} 支付的 {count} 笔款项。确定继续吗？",
    "peopleLabel": "人"
  },
  "payments": {
    "title": "开销记录",
    "itemsLabel": "笔",
    "addMembersFirst": "请先添加成员。",
    "paidBy": "付款人",
    "description": "说明",
    "descPlaceholder": "例如：餐费",
    "amount": "金额",
    "splitBetween": "由谁分摊",
    "selectAll": "全选",
    "clearAll": "清空",
    "addPayment": "添加开销",
    "paidFor": "支付了",
    "splitEveryone": "所有人平摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）",
    "capToggle": "分摊上限（可选）",
    "capPlaceholder": "无上限",
    "capTag": "上限",
    "splitRest": "余款由 {names} 分摊",
    "capsTooLow": "这些上限不足以覆盖总额。"
  },
  "results": {
    "emptyPrompt": "添加成员和开销后，这里会显示清账方案。",
    "settlementTitle": "清账方案 — 转账最少",
    "total": "合计 {amount}",
    "allSettled": "已全部结清 — 互不相欠 🎉",
    "balancesTitle": "收支明细",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正数",
    "legendNegative": "负数",
    "legendPositiveDesc": "= 应收回钱",
    "legendNegativeDesc": "= 还需付钱"
  },
  "footer": {
    "loadSample": "载入示例数据",
    "reset": "全部重置",
    "confirmSample": "用示例数据替换当前数据吗？",
    "confirmReset": "清除所有数据？此操作无法撤销。"
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
    "heroHeading": "AA制分账，一键算清谁该给谁钱",
    "heroSub": "几个人各付了不同的开销，SplitWhom 帮你算出最省事的清账方式——用最少的转账让大家两清。免费、免账号、无需安装。",
    "howItWorksTitle": "使用步骤",
    "steps": [
      {
        "title": "添加成员",
        "body": "列出一起分摊开销的人——朋友、室友，或是你的露营小队。"
      },
      {
        "title": "录入谁付了什么",
        "body": "逐笔添加开销金额，并选好这笔费用由哪些人分摊。"
      },
      {
        "title": "得到最少转账方案",
        "body": "SplitWhom 立刻算出谁该付给谁，用最少的转账次数完成清账。"
      }
    ],
    "whyTitle": "为什么选 SplitWhom",
    "features": [
      {
        "title": "转账次数最少",
        "body": "大多数分账工具只显示余额。SplitWhom 会算出最精简的转账组合，让你尽可能少转几次账。"
      },
      {
        "title": "每笔随心分摊",
        "body": "餐费大家一起出，饮料只有三个人买了？每笔开销都能自己选由谁分摊。"
      },
      {
        "title": "隐私至上",
        "body": "免注册、无服务器——所有计算都在你的浏览器里完成，数据只留在你的设备上。"
      },
      {
        "title": "任意货币",
        "body": "支持人民币、美元、日元等多种货币，精确舍入，一分一厘都不会算丢。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "几个人各自付了钱，AA 制怎么算？",
        "a": "录入每笔开销和分摊的人，SplitWhom 会算出每个人付了多少、该摊多少，再给出让大家两清的最少转账方案。"
      },
      {
        "q": "SplitWhom 收费吗？",
        "a": "完全免费。无需账号、无需订阅、无需安装——直接在网页浏览器里使用。"
      },
      {
        "q": "能让一笔开销只由部分人分摊吗？",
        "a": "可以。每笔开销你都能自己选由谁分摊，无论是大家共摊还是小部分人单独承担，都能算得准。"
      },
      {
        "q": "适合旅行、露营和室友分账吗？",
        "a": "正是为此而生——只要不止一个人垫了钱、需要公平地把账算清，都能用。"
      },
      {
        "q": "我的数据安全吗？",
        "a": "安全。无需登录、没有服务器，所有计算都在你的浏览器里完成，数据只保存在你自己的设备上。"
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
    "invalid": "该分享链接无效或内容为空。",
    "ctaTitle": "分摊你自己的多人开销",
    "ctaButton": "打开 SplitWhom"
  }
};
