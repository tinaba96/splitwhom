import type { Dictionary } from "../types";

export const zh: Dictionary = {
  "meta": {
    "title": "SplitWhom — 分账神器，清楚算出谁该还谁钱",
    "description": "免登录免费网页工具，自动拆分团体开销，用最少的转账笔数算出谁该付给谁多少钱。旅行、露营、合租必备。",
    "keywords": [
      "AA制算账",
      "分账",
      "多人分账",
      "旅行分摊",
      "如何分账",
      "谁该还谁钱",
      "拆账软件",
      "聚餐AA计算",
      "合租分摊费用",
      "团体开销分摊"
    ],
    "ogTitle": "SplitWhom — 分账神器，清楚算出谁该还谁钱",
    "ogDescription": "用最少的转账笔数拆分团体开销、一键结清。免注册、免费、浏览器即开即用。"
  },
  "hero": {
    "tagline": "拆分共同开销，用最少的转账笔数清楚算出谁该付给谁。免注册，所有计算都在你的浏览器中完成。"
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
    "confirmDelete": "这将同时删除 {name} 的 {count} 笔付款。确定继续吗？",
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
    "splitEveryone": "所有人平摊",
    "splitBetweenNames": "由 {names} 分摊",
    "deleteAria": "删除",
    "removed": "（已移除）",
    "fixedToggle": "固定金额（可选）",
    "fixedPlaceholder": "分摊余额",
    "fixedTag": "固定",
    "splitRest": "余额由 {names} 分摊",
    "fixedExceeds": "固定金额已超过总额。"
  },
  "results": {
    "emptyPrompt": "添加成员和付款后，这里会显示结算方案。",
    "settlementTitle": "结算方案 — 最少转账",
    "total": "合计 {amount}",
    "allSettled": "全部结清，谁也不欠谁 🎉",
    "balancesTitle": "余额明细",
    "member": "成员",
    "paid": "已付",
    "share": "应摊",
    "net": "净额",
    "legendPositive": "正数",
    "legendNegative": "负数",
    "legendPositiveDesc": "= 应收回钱",
    "legendNegativeDesc": "= 应付钱"
  },
  "footer": {
    "loadSample": "加载示例数据",
    "reset": "全部重置",
    "confirmSample": "用示例数据替换当前数据吗？",
    "confirmReset": "清除所有数据？此操作无法撤销。"
  },
  "sample": {
    "title": "露营之旅",
    "names": [
      "伟",
      "芳",
      "明",
      "丽",
      "强"
    ],
    "food": "餐费",
    "drinks": "饮料",
    "firewood": "柴火"
  },
  "landing": {
    "heroHeading": "AA制分账，一键算出谁该还谁钱",
    "heroSub": "当几个人各自付了不同的钱，SplitWhom 会算出最简单的结清方式——用最少的转账笔数让每个人都两不相欠。免费、无需账号、无需安装。",
    "howItWorksTitle": "使用步骤",
    "steps": [
      {
        "title": "添加所有人",
        "body": "列出一起分摊费用的人——朋友、室友，或你的露营小队。"
      },
      {
        "title": "录入谁付了什么",
        "body": "添加每一笔付款及金额，并精确选择该由谁来分摊。"
      },
      {
        "title": "获得最少转账方案",
        "body": "SplitWhom 即时算出谁该付给谁，用最少的转账笔数完成结清。"
      }
    ],
    "whyTitle": "为什么选 SplitWhom",
    "features": [
      {
        "title": "最少转账",
        "body": "大多数分账工具只显示余额。SplitWhom 会算出最精简的转账组合，让你尽可能少转几笔。"
      },
      {
        "title": "每笔费用任你拆",
        "body": "餐费大家一起，饮料只有三个人买？每一笔开销都能自由选择由谁分摊。"
      },
      {
        "title": "隐私优先设计",
        "body": "无需注册、没有服务器——所有计算都在浏览器中完成，数据只留在你的设备上。"
      },
      {
        "title": "支持任意货币",
        "body": "支持人民币、美元、日元等多种货币，精确进位，一分一厘都不会算错。"
      }
    ],
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "几个人都付了钱，要怎么分账？",
        "a": "录入每一笔付款及分摊人。SplitWhom 会算出每个人付了多少、应摊多少，再给出最少的转账方案让大家两不相欠。"
      },
      {
        "q": "SplitWhom 是免费的吗？",
        "a": "是的，完全免费。无需账号、无需订阅、无需安装——直接在浏览器中使用。"
      },
      {
        "q": "一笔费用可以只让部分人分摊吗？",
        "a": "可以。每一笔付款你都能精确选择由谁分摊，无论是大家共摊还是部分人分摊，都能正确处理。"
      },
      {
        "q": "适合旅行、露营和合租用吗？",
        "a": "正是为这些场景而生——只要不止一个人垫了钱、需要公平结清，都能用它搞定。"
      },
      {
        "q": "我的数据安全吗？",
        "a": "安全。没有登录、没有服务器。所有计算都在你的浏览器中完成，数据只保存在你的设备上。"
      }
    ]
  },
  "switcher": {
    "label": "语言"
  }
};
