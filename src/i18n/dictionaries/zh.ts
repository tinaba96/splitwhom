import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — 分摊账单，理清谁该付钱给谁",
    "description": "免费免登录的网页应用，帮你分摊团体开销，用最少的转账次数算清谁该付钱给谁。旅行、露营、合租通通适用。",
    "keywords": [
      "aa制怎么算",
      "分摊账单",
      "记账分账",
      "团体出游分账",
      "谁付钱给谁",
      "aa收款",
      "合租分摊",
      "旅行账单分摊",
      "聚餐aa计算器"
    ],
    "ogTitle": "SplitWhom — 分摊账单，理清谁该付钱给谁",
    "ogDescription": "分摊团体开销，用最少的转账次数算清账目。免注册、免费、在浏览器中即可使用。"
  },
  "hero": {
    "tagline": "分摊共同开销，用最少的转账次数算清谁该付钱给谁。免注册，全程在浏览器中运行。"
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
    "empty": "把一起分摊费用的人都加进来。",
    "removeAria": "移除 {name}",
    "confirmDelete": "这将同时删除 {name} 的 {count} 笔付款。要继续吗？",
    "peopleLabel": "人"
  },
  "payments": {
    "title": "付款",
    "itemsLabel": "项",
    "addMembersFirst": "请先添加成员。",
    "paidBy": "付款人",
    "description": "说明",
    "descPlaceholder": "例如：餐费",
    "amount": "金额",
    "splitBetween": "分摊人",
    "selectAll": "全选",
    "clearAll": "清空",
    "addPayment": "添加付款",
    "paidFor": "支付了",
    "splitEveryone": "全体平摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）",
    "capToggle": "分摊上限（可选）",
    "capPlaceholder": "无上限",
    "capTag": "上限",
    "splitRest": "余额由 {names} 分摊",
    "capsTooLow": "这些上限不足以覆盖总额。"
  },
  "results": {
    "emptyPrompt": "添加成员和付款后，这里会显示清账方案。",
    "settlementTitle": "清账方案 — 最少转账",
    "total": "共计 {amount}",
    "allSettled": "已全部结清 — 谁都不欠谁 🎉",
    "balancesTitle": "余额",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正",
    "legendNegative": "负",
    "legendPositiveDesc": "= 应收回",
    "legendNegativeDesc": "= 需付款"
  },
  "footer": {
    "loadSample": "载入示例数据",
    "reset": "清空全部",
    "confirmSample": "用示例数据替换当前数据吗？",
    "confirmReset": "删除所有数据？此操作无法撤销。"
  },
  "sample": {
    "title": "露营之旅",
    "names": [
      "伟",
      "芳",
      "敏",
      "杰",
      "静"
    ],
    "food": "餐费",
    "drinks": "饮料",
    "firewood": "柴火"
  },
  "landing": {
    "heroHeading": "分摊账单，算清谁付钱给谁",
    "heroSub": "当几个人各自付了不同的钱，SplitWhom 会算出最简单的清账方式——用最少的转账让每个人都两清。免费、无需账号、无需安装。",
    "howItWorksTitle": "使用方法",
    "steps": [
      {
        "title": "添加所有人",
        "body": "列出一起分摊费用的人——朋友、室友、露营搭子。"
      },
      {
        "title": "录入谁付了什么",
        "body": "添加每一笔付款及金额，并精确选出该由哪些人分摊。"
      },
      {
        "title": "得到最少转账方案",
        "body": "SplitWhom 即时算出谁该付钱给谁，用最少的转账次数完成清账。"
      }
    ],
    "whyTitle": "为什么选 SplitWhom",
    "features": [
      {
        "title": "最少转账",
        "body": "多数分账工具只显示余额。SplitWhom 会算出最精简的转账方案，让你转账次数降到最低。"
      },
      {
        "title": "每笔费用灵活分摊",
        "body": "餐费大家一起出，饮料只有三个人买？每一笔开销都能自由选择由谁分摊。"
      },
      {
        "title": "隐私至上",
        "body": "无需注册、没有服务器——所有计算都在你的浏览器中完成，数据只留在你的设备上。"
      },
      {
        "title": "支持任意货币",
        "body": "支持人民币、美元、日元等多种货币，精确取整，绝不漏算一分一厘。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "几个人都付了钱，账单怎么分摊？",
        "a": "录入每一笔付款及分摊的人。SplitWhom 会算出每个人实付与应摊的差额，再给出最少的转账方案让大家两清。"
      },
      {
        "q": "SplitWhom 是免费的吗？",
        "a": "是的，完全免费。无需账号、无需订阅、无需安装——在浏览器里就能用。"
      },
      {
        "q": "可以只让部分人分摊某一笔费用吗？",
        "a": "可以。每一笔付款你都能精确指定分摊的人，无论是全体共担还是小范围分摊都能正确处理。"
      },
      {
        "q": "它适合旅行、露营和室友分账吗？",
        "a": "正是为此而生——只要不止一个人垫了钱、需要公平地算清账目，都能用得上。"
      },
      {
        "q": "我的数据安全吗？",
        "a": "安全。没有登录、没有服务器。所有计算都在你的浏览器中完成，数据仅保存在你的设备上。"
      }
    ]
  },
  "switcher": {
    "label": "语言"
  }
};
