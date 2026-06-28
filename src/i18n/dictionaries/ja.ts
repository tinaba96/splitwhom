import type { Dictionary } from "../types";

export const ja: Dictionary = {
  "meta": {
    "title": "SplitWhom — 割り勘して誰が誰に払うかが一目でわかる",
    "description": "グループの支払いを割り勘して、誰が誰にいくら払えばいいかを最少の送金回数で表示する無料・ログイン不要のWebアプリ。旅行・キャンプ・シェアハウスにぴったり。",
    "keywords": [
      "割り勘",
      "割り勘 計算",
      "立て替え 精算",
      "旅行 割り勘",
      "割り勘 アプリ",
      "割り勘 計算機",
      "グループ 支払い 精算",
      "誰が誰に払う"
    ],
    "ogTitle": "SplitWhom — 割り勘して誰が誰に払うかが一目でわかる",
    "ogDescription": "グループの支払いを最少の送金回数で精算。登録不要・無料・ブラウザだけで使えます。"
  },
  "hero": {
    "tagline": "みんなの立て替えを割り勘して、誰が誰に払えばいいかを最少の送金回数で表示。登録不要、ブラウザだけで完結します。"
  },
  "setup": {
    "eventName": "イベント名",
    "eventPlaceholder": "例: キャンプ旅行",
    "currency": "通貨"
  },
  "members": {
    "title": "メンバー",
    "addPlaceholder": "名前を追加",
    "add": "追加",
    "empty": "費用を分け合う人を全員追加しましょう。",
    "removeAria": "{name}を削除",
    "confirmDelete": "{name}さんの支払い{count}件もまとめて削除されます。続けますか？",
    "peopleLabel": "人"
  },
  "payments": {
    "title": "支払い",
    "itemsLabel": "件",
    "addMembersFirst": "先にメンバーを追加してください。",
    "paidBy": "支払った人",
    "description": "内容",
    "descPlaceholder": "例: 食費",
    "amount": "金額",
    "splitBetween": "割り勘する人",
    "selectAll": "全員選択",
    "clearAll": "すべて解除",
    "addPayment": "支払いを追加",
    "paidFor": "が立て替え",
    "splitEveryone": "全員で割り勘",
    "splitBetweenNames": "{names}で割り勘",
    "deleteAria": "削除",
    "removed": "(削除済み)",
    "capToggle": "上限金額（任意）",
    "capPlaceholder": "上限なし",
    "capTag": "上限",
    "splitRest": "残りは{names}で割り勘",
    "capsTooLow": "この上限では合計をまかなえません。"
  },
  "results": {
    "emptyPrompt": "メンバーと支払いを追加すると、ここに精算結果が表示されます。",
    "settlementTitle": "精算 — 最少の送金回数",
    "total": "合計 {amount}",
    "allSettled": "精算完了 — 貸し借りはありません 🎉",
    "balancesTitle": "収支",
    "member": "メンバー",
    "paid": "支払額",
    "share": "負担額",
    "net": "差額",
    "legendPositive": "プラス",
    "legendNegative": "マイナス",
    "legendPositiveDesc": "= 受け取る",
    "legendNegativeDesc": "= 支払う"
  },
  "footer": {
    "loadSample": "サンプルデータを読み込む",
    "reset": "すべてリセット",
    "confirmSample": "今のデータをサンプルデータに置き換えますか？",
    "confirmReset": "すべてのデータを消去しますか？この操作は取り消せません。"
  },
  "sample": {
    "title": "キャンプ旅行",
    "names": [
      "ハルト",
      "ユウキ",
      "サクラ",
      "ダイキ",
      "アオイ"
    ],
    "food": "食費",
    "drinks": "飲み物",
    "firewood": "薪"
  },
  "landing": {
    "heroHeading": "割り勘して誰が誰に払うかが一目でわかる",
    "heroSub": "何人かがそれぞれ別のものを支払ったとき、SplitWhomが一番シンプルな精算方法を計算します。全員の貸し借りをチャラにする最少の送金回数を提案。無料・アカウント不要・アプリのインストールもいりません。",
    "howItWorksTitle": "使い方",
    "steps": [
      {
        "title": "メンバーを追加",
        "body": "費用を分け合う人をリストに追加します。友達、ルームメイト、キャンプ仲間など。"
      },
      {
        "title": "誰が何を払ったか入力",
        "body": "支払いごとに金額を入力し、誰で割り勘するかを選びます。"
      },
      {
        "title": "最少の送金回数を表示",
        "body": "SplitWhomが、最少の送金回数で精算するために誰が誰に払えばいいかをすぐに表示します。"
      }
    ],
    "whyTitle": "SplitWhomが選ばれる理由",
    "features": [
      {
        "title": "最少の送金回数",
        "body": "多くの割り勘アプリは収支を出すだけ。SplitWhomは送金の組み合わせを最小化するので、できるだけ少ない回数で精算できます。"
      },
      {
        "title": "項目ごとに自由に割り勘",
        "body": "食費はみんなで、飲み物は3人だけ？支払いごとに対象者を自由に選べます。"
      },
      {
        "title": "プライバシー重視の設計",
        "body": "登録不要・サーバーなし。計算はすべてブラウザ内で行われ、データは端末の中だけに残ります。"
      },
      {
        "title": "どんな通貨にも対応",
        "body": "USD・EUR・JPYなどに対応。端数もきっちり処理するので、1円・1セントも狂いません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "複数人が支払ったとき、どうやって割り勘するの？",
        "a": "支払いごとに金額と割り勘する人を入力します。SplitWhomが各自の支払額と負担額を集計し、全員の貸し借りをチャラにする最少の送金回数を表示します。"
      },
      {
        "q": "SplitWhomは無料ですか？",
        "a": "はい、完全無料です。アカウントもサブスクも不要で、インストールも必要ありません。ブラウザだけで使えます。"
      },
      {
        "q": "1つの支払いを一部の人だけで割り勘できますか？",
        "a": "はい。支払いごとに割り勘する対象者を選べるので、全員の共有費用も一部だけの費用も正しく計算できます。"
      },
      {
        "q": "旅行・キャンプ・ルームシェアでも使えますか？",
        "a": "まさにそのためのアプリです。誰かが立て替えてフェアに精算したい場面なら、どんなときでも使えます。"
      },
      {
        "q": "私のデータは守られますか？",
        "a": "はい。ログインもサーバーもありません。計算はすべてブラウザ内で行われ、データは端末の中だけに保存されます。"
      }
    ]
  },
  "switcher": {
    "label": "言語"
  }
};
