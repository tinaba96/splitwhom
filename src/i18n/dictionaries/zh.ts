import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — 多人分账，一键算清谁该还谁",
    "description": "免费、免登录的网页分账工具，自动计算多人均摊的费用，用最少的转账次数算清谁该还谁。旅行、露营、合租都好用。",
    "keywords": [
      "AA制怎么算",
      "多人分账",
      "分账工具",
      "谁该还谁",
      "一键还清账单",
      "旅行费用分摊",
      "聚餐分账计算器",
      "均摊费用计算",
      "合租费用分摊",
      "AA算账"
    ],
    "ogTitle": "SplitWhom — 多人分账，一键算清谁该还谁",
    "ogDescription": "多人费用一起算，用最少的转账次数还清账单。免注册、免费，浏览器里就能用。"
  },
  "hero": {
    "tagline": "分摊共同费用，用最少的转账次数算清谁该还谁。免注册，全程在浏览器里完成。"
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
    "confirmDelete": "这同时会删除 {name} 支付的 {count} 笔付款。是否继续？",
    "peopleLabel": "人"
  },
  "payments": {
    "title": "付款",
    "itemsLabel": "笔",
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
    "splitEveryone": "所有人分摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）"
  },
  "results": {
    "emptyPrompt": "添加成员和付款后，结算结果会显示在这里。",
    "settlementTitle": "结算 — 最少转账次数",
    "total": "合计 {amount}",
    "allSettled": "已全部结清 — 谁都不欠谁 🎉",
    "balancesTitle": "余额",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正数",
    "legendNegative": "负数",
    "legendPositiveDesc": "= 应收回",
    "legendNegativeDesc": "= 应支付"
  },
  "footer": {
    "loadSample": "加载示例数据",
    "reset": "清空全部",
    "confirmSample": "用示例数据替换当前数据？",
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
    "heroHeading": "多人分账，一键算清谁该还谁",
    "heroSub": "当几个人各自付了不同的账，SplitWhom 帮你算出最省事的还款方式 — 用最少的转账让大家两清。免费、免账号、无需下载App。",
    "howItWorksTitle": "使用方法",
    "steps": [
      {
        "title": "添加所有人",
        "body": "列出一起分摊费用的人 — 朋友、室友，或你的露营小队。"
      },
      {
        "title": "录入谁付了哪笔",
        "body": "添加每一笔付款的金额，并选好这笔费用具体由谁分摊。"
      },
      {
        "title": "得出最少转账",
        "body": "SplitWhom 立刻算出谁该还谁，用最少的转账次数让大家两清。"
      }
    ],
    "whyTitle": "为什么选 SplitWhom",
    "features": [
      {
        "title": "最少转账",
        "body": "大多数分账工具只显示余额。SplitWhom 会算出最少的转账方案，让你尽可能少付几笔。"
      },
      {
        "title": "每笔费用自由分摊",
        "body": "餐费大家一起吃，饮料只有三个人买？每一笔费用都能自己选谁参与分摊。"
      },
      {
        "title": "隐私优先",
        "body": "免注册、无服务器 — 所有计算都在浏览器里完成，数据只留在你的设备上。"
      },
      {
        "title": "支持各种货币",
        "body": "支持人民币、美元、日元等多种货币，精确取整，一分一厘都不会算错。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "几个人各自付了钱，账单怎么分？",
        "a": "录入每一笔付款和参与分摊的人。SplitWhom 会算出每个人付了多少、该摊多少，再给出最少的转账方案让大家两清。"
      },
      {
        "q": "SplitWhom 是免费的吗？",
        "a": "是的，完全免费。无需账号、无需订阅、无需安装 — 在浏览器里就能直接用。"
      },
      {
        "q": "能只让部分人分摊某一笔费用吗？",
        "a": "可以。每一笔付款你都能自己选由谁分摊，无论是大家共摊还是部分人分摊都能算对。"
      },
      {
        "q": "旅行、露营、合租都能用吗？",
        "a": "正是为这些场景而生 — 只要有不止一个人先垫了钱、需要公平地把账算清，都能用。"
      },
      {
        "q": "我的数据是私密的吗？",
        "a": "是的。无需登录、没有服务器。所有计算都在浏览器里完成，数据只保存在你的设备上。"
      }
    ]
  },
  "switcher": {
    "label": "语言"
  }
};
