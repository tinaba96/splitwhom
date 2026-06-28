import type { Dictionary } from "../types";

export const ja: Dictionary = {
  "meta": {
    "title": "SplitWhom — 割り勘して、誰が誰に払うか一目でわかる",
    "description": "ログイン不要・完全無料の割り勘アプリ。グループの立替を入力するだけで、最小回数の送金で誰が誰にいくら払えばいいかを自動計算。旅行・キャンプ・シェアハウスにぴったり。",
    "keywords": [
      "割り勘",
      "割り勘 アプリ",
      "立替 精算",
      "誰が誰に払う",
      "精算 計算",
      "旅行 割り勘",
      "割り勘 計算機",
      "費用 精算"
    ],
    "ogTitle": "SplitWhom — 割り勘して、誰が誰に払うか一目でわかる",
    "ogDescription": "グループの立替を最小回数の送金でスッキリ精算。登録不要・無料・ブラウザだけで完結。"
  },
  "hero": {
    "tagline": "みんなで立て替えた費用を割り勘して、誰が誰にいくら払えばいいかを最小回数で表示。登録不要、ブラウザだけで完結します。"
  },
  "setup": {
    "eventName": "イベント名",
    "eventPlaceholder": "例：キャンプ旅行",
    "currency": "通貨"
  },
  "members": {
    "title": "メンバー",
    "addPlaceholder": "名前を追加",
    "add": "追加",
    "empty": "費用を分担する人を全員追加してください。",
    "removeAria": "{name}を削除",
    "confirmDelete": "{name}が支払った{count}件の立替も削除されます。続けますか？",
    "peopleLabel": "人",
    "notePlaceholder": "メール / 電話 / 送金先（任意）",
    "contactsTitle": "メンバーと送金先情報",
    "copy": "コピー",
    "copied": "コピーしました！"
  },
  "payments": {
    "title": "立替",
    "itemsLabel": "件",
    "addMembersFirst": "先にメンバーを追加してください。",
    "paidBy": "支払った人",
    "description": "内容",
    "descPlaceholder": "例：食料",
    "amount": "金額",
    "splitBetween": "分担する人",
    "selectAll": "全員選択",
    "clearAll": "選択解除",
    "addPayment": "立替を追加",
    "paidFor": "が支払い",
    "splitEveryone": "全員で分担",
    "splitBetweenNames": "{names}で分担",
    "deleteAria": "削除",
    "removed": "（削除済み）",
    "capToggle": "上限金額（任意）",
    "capPlaceholder": "上限なし",
    "capTag": "上限",
    "splitRest": "残りは{names}で分担",
    "capsTooLow": "この上限では合計をカバーできません。"
  },
  "results": {
    "emptyPrompt": "メンバーと立替を追加すると、ここに精算結果が表示されます。",
    "settlementTitle": "精算 — 最小回数の送金",
    "total": "合計 {amount}",
    "allSettled": "精算完了 — 誰も貸し借りなしです 🎉",
    "balancesTitle": "収支",
    "member": "メンバー",
    "paid": "支払額",
    "share": "負担額",
    "net": "差引",
    "legendPositive": "プラス",
    "legendNegative": "マイナス",
    "legendPositiveDesc": "＝受け取る",
    "legendNegativeDesc": "＝支払う"
  },
  "footer": {
    "loadSample": "サンプルデータを読み込む",
    "reset": "すべてリセット",
    "confirmSample": "現在のデータをサンプルデータに置き換えますか？",
    "confirmReset": "すべてのデータを消去しますか？この操作は元に戻せません。"
  },
  "sample": {
    "title": "キャンプ旅行",
    "names": [
      "太郎",
      "健太",
      "さくら",
      "大輔",
      "美咲"
    ],
    "food": "食料",
    "drinks": "飲み物",
    "firewood": "薪"
  },
  "landing": {
    "heroHeading": "割り勘して、誰が誰に払うか一目でわかる",
    "heroSub": "複数人がバラバラに支払っても、SplitWhomがいちばんシンプルな精算方法を自動計算。最小回数の送金でみんなの貸し借りをゼロにします。無料・アカウント不要・アプリのインストールも不要。",
    "howItWorksTitle": "使い方",
    "steps": [
      {
        "title": "メンバーを追加",
        "body": "費用を分担した人を入力します。友達、ルームメイト、キャンプ仲間など、誰でもOK。"
      },
      {
        "title": "誰が何を払ったか入力",
        "body": "立替ごとに金額を入力し、その費用を分担する人を選ぶだけ。"
      },
      {
        "title": "最小回数で精算",
        "body": "SplitWhomが、最少の送金回数で誰が誰に払えばいいかを瞬時に表示します。"
      }
    ],
    "whyTitle": "SplitWhomが選ばれる理由",
    "features": [
      {
        "title": "送金回数は最小に",
        "body": "多くの割り勘アプリは収支を出すだけ。SplitWhomは送金の最小パターンを計算するので、支払い回数をぐっと減らせます。"
      },
      {
        "title": "項目ごとに自由に分担",
        "body": "食事はみんなで、でも飲み物は3人だけ？立替ごとに誰が含まれるかを自由に選べます。"
      },
      {
        "title": "プライバシー重視の設計",
        "body": "登録もサーバーも不要。すべての計算はブラウザ内で完結し、データは端末の中だけに保存されます。"
      },
      {
        "title": "どんな通貨でもOK",
        "body": "USD・EUR・JPYなど多通貨に対応。端数も正確に処理するので、1円・1セントも消えません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "複数人で立て替えた割り勘はどう計算する？",
        "a": "立替ごとに金額と分担する人を入力するだけ。SplitWhomが各自の支払額と負担額を集計し、最小回数の送金でみんなの貸し借りをゼロにする方法を表示します。"
      },
      {
        "q": "SplitWhomは無料ですか？",
        "a": "はい、完全無料です。アカウント登録も月額料金もインストールも一切不要。ブラウザだけで動きます。"
      },
      {
        "q": "一部の人だけで1つの費用を分担できますか？",
        "a": "はい。立替ごとに分担する人を選べるので、全員で割る費用も一部のメンバーだけの費用も正しく計算できます。"
      },
      {
        "q": "旅行・キャンプ・ルームシェアでも使えますか？",
        "a": "まさにそのためのアプリです。誰かが先に立て替えて、あとで公平に精算したい場面なら何でもOK。"
      },
      {
        "q": "自分のデータは守られますか？",
        "a": "はい。ログインもサーバーもありません。すべての計算はブラウザ内で行われ、データは端末の中だけに保存されます。"
      }
    ]
  },
  "switcher": {
    "label": "言語"
  },
  "share": {
    "share": "共有",
    "copied": "リンクをコピーしました！",
    "edit": "編集",
    "readonlyNote": "共有された結果・閲覧のみ",
    "invalid": "この共有リンクは無効か、内容がありません。",
    "ctaTitle": "自分のグループの割り勘もしてみる",
    "ctaButton": "SplitWhomを開く"
  }
};
