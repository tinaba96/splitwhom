import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — 分账神器，一眼看清谁该还谁多少",
    "description": "免费、免注册的网页版分账工具，自动均摊聚会、旅行、合租的共同开销，用最少的转账次数算清谁付给谁。旅行、露营、合租都好用。",
    "keywords": [
      "分账",
      "AA制计算器",
      "均摊费用",
      "谁付给谁",
      "聚会分账",
      "旅行分账",
      "合租分摊",
      "账单均摊",
      "费用分摊计算器"
    ],
    "ogTitle": "SplitWhom — 分账神器，一眼看清谁该还谁多少",
    "ogDescription": "均摊聚会开销，用最少转账次数一键算清。免注册、免费，浏览器里直接用。"
  },
  "hero": {
    "tagline": "均摊共同开销，用最少的转账次数算清谁付给谁。免注册，全程在浏览器里运行。"
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
    "empty": "把一起分摊开销的人都加进来吧。",
    "removeAria": "移除 {name}",
    "confirmDelete": "此操作会同时删除 {name} 的 {count} 笔付款，确定继续吗？",
    "peopleLabel": "人",
    "notePlaceholder": "邮箱 / 电话 / 收款账号（选填）",
    "contactsTitle": "成员与收款信息",
    "copy": "复制",
    "copied": "已复制！"
  },
  "payments": {
    "title": "付款",
    "itemsLabel": "笔",
    "addMembersFirst": "请先添加成员。",
    "paidBy": "付款人",
    "description": "说明",
    "descPlaceholder": "例如：餐费",
    "amount": "金额",
    "splitBetween": "分摊给",
    "selectAll": "全选",
    "clearAll": "清空",
    "addPayment": "添加付款",
    "paidFor": "支付了",
    "splitEveryone": "所有人均摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）",
    "capToggle": "分摊上限（选填）",
    "capPlaceholder": "无上限",
    "capTag": "上限",
    "splitRest": "余额由 {names} 分摊",
    "capsTooLow": "这些上限不足以覆盖总额。"
  },
  "results": {
    "emptyPrompt": "添加成员和付款，这里就会显示结算方案。",
    "settlementTitle": "结算方案 — 最少转账",
    "total": "合计 {amount}",
    "allSettled": "已结清 — 谁都不欠谁 🎉",
    "balancesTitle": "收支明细",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正数",
    "legendNegative": "负数",
    "legendPositiveDesc": "= 应收回",
    "legendNegativeDesc": "= 应付出"
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
    "heroHeading": "分账算清谁付给谁",
    "heroSub": "几个人各付了不同的账，SplitWhom 帮你算出最省事的结算方式——用最少的转账让大家两清。免费、免注册、无需下载App。",
    "howItWorksTitle": "使用方法",
    "steps": [
      {
        "title": "添加所有人",
        "body": "把一起分摊开销的人都列出来——朋友、室友、露营的小伙伴。"
      },
      {
        "title": "录入谁付了什么",
        "body": "添加每笔付款的金额，再选好这笔账具体由谁分摊。"
      },
      {
        "title": "得出最少转账方案",
        "body": "SplitWhom 即时算出谁付给谁，用最少的转账次数让大家两清。"
      }
    ],
    "whyTitle": "为什么选 SplitWhom",
    "features": [
      {
        "title": "最少转账次数",
        "body": "大多数分账工具只列出余额。SplitWhom 会算出最精简的转账方案，让你尽可能少转几笔账。"
      },
      {
        "title": "每笔账自由分摊",
        "body": "餐费大家平摊，但饮料只有三个人买？每一笔开销都能自己选谁参与分摊。"
      },
      {
        "title": "隐私无忧",
        "body": "免注册、无服务器——所有计算都在你的浏览器里完成，数据始终留在你的设备上。"
      },
      {
        "title": "支持任意货币",
        "body": "支持人民币、美元、日元等多种货币，精确取整，一分一厘都不会漏算。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "几个人都付了钱，账要怎么分？",
        "a": "录入每笔付款以及由谁分摊，SplitWhom 会算出每个人付了多少、又该摊多少，再给出最少的转账方案让大家两清。"
      },
      {
        "q": "SplitWhom 是免费的吗？",
        "a": "是的，完全免费。无需注册、无需订阅、无需安装——在浏览器里直接用。"
      },
      {
        "q": "某笔开销能只让部分人分摊吗？",
        "a": "可以。每笔付款都能精确指定由谁分摊，所以共同开销和小范围开销都能正确处理。"
      },
      {
        "q": "旅行、露营、合租都能用吗？",
        "a": "正是为这些场景而生——只要不止一个人垫了钱、需要公平结算，都能用得上。"
      },
      {
        "q": "我的数据安全吗？",
        "a": "安全。无需登录、没有服务器，所有计算都在浏览器中完成，数据只保存在你的设备上。"
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
    "ctaTitle": "分摊你自己的团队开销",
    "ctaButton": "打开 SplitWhom"
  }
};
