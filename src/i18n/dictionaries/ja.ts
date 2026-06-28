import type { Dictionary } from "../types";

export const ja: Dictionary = {
  "meta": {
    "title": "SplitWhom — 割り勘＆誰が誰にいくら払うかが一目でわかる",
    "description": "ログイン不要・無料のWebアプリ。グループの立替をまとめて、最小回数の精算で誰が誰にいくら払えばいいかを正確に表示します。旅行・キャンプ・ルームシェアにぴったり。",
    "keywords": [
      "割り勘",
      "割り勘 計算",
      "立替 精算",
      "誰が誰に いくら払う",
      "グループ 割り勘",
      "旅行 割り勘",
      "割り勘 アプリ 無料",
      "精算 まとめ",
      "立替金 清算"
    ],
    "ogTitle": "SplitWhom — 割り勘＆誰が誰にいくら払うかが一目でわかる",
    "ogDescription": "グループの立替を最小回数で精算。登録不要・無料、ブラウザだけで使えます。"
  },
  "hero": {
    "tagline": "みんなの立替をまとめて、誰が誰にいくら払えばいいかを最小回数で表示。登録不要、すべてブラウザで完結します。"
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
    "confirmDelete": "{name}さんの支払い{count}件もあわせて削除されます。続けますか？",
    "peopleLabel": "人"
  },
  "payments": {
    "title": "支払い",
    "itemsLabel": "件",
    "addMembersFirst": "先にメンバーを追加してください。",
    "paidBy": "支払った人",
    "description": "内容",
    "descPlaceholder": "例：食費",
    "amount": "金額",
    "splitBetween": "分担する人",
    "selectAll": "全員選択",
    "clearAll": "選択解除",
    "addPayment": "支払いを追加",
    "paidFor": "が支払い",
    "splitEveryone": "全員で分担",
    "splitBetweenNames": "{names}で分担",
    "deleteAria": "削除",
    "removed": "（削除済み）",
    "capToggle": "上限額（任意）",
    "capPlaceholder": "上限なし",
    "capTag": "上限",
    "splitRest": "残りを{names}で分担",
    "capsTooLow": "この上限では合計金額をまかなえません。"
  },
  "results": {
    "emptyPrompt": "メンバーと支払いを追加すると、ここに精算結果が表示されます。",
    "settlementTitle": "精算 — 最小回数",
    "total": "合計 {amount}",
    "allSettled": "精算完了 — 貸し借りはありません 🎉",
    "balancesTitle": "収支",
    "member": "メンバー",
    "paid": "支払い",
    "share": "負担",
    "net": "差引",
    "legendPositive": "プラス",
    "legendNegative": "マイナス",
    "legendPositiveDesc": "＝受け取り",
    "legendNegativeDesc": "＝支払い"
  },
  "footer": {
    "loadSample": "サンプルデータを読み込む",
    "reset": "すべてリセット",
    "confirmSample": "現在のデータをサンプルデータに置き換えますか？",
    "confirmReset": "すべてのデータを消去しますか？この操作は取り消せません。"
  },
  "sample": {
    "title": "キャンプ旅行",
    "names": [
      "ハルト",
      "ユウタ",
      "サクラ",
      "ダイキ",
      "アオイ"
    ],
    "food": "食費",
    "drinks": "ドリンク",
    "firewood": "薪"
  },
  "landing": {
    "heroHeading": "割り勘で誰が誰にいくら払うかが一目でわかる",
    "heroSub": "何人かが別々に支払ったとき、SplitWhomが一番シンプルな精算方法を計算します。全員の貸し借りを最小回数の支払いでゼロに。無料、アカウント不要、アプリのインストールも不要です。",
    "howItWorksTitle": "使い方",
    "steps": [
      {
        "title": "メンバーを追加",
        "body": "費用を分担した人をリストに。友だち、ルームメイト、キャンプ仲間など。"
      },
      {
        "title": "誰が何を払ったか入力",
        "body": "それぞれの支払いを金額とともに追加し、誰で分担するかを選びます。"
      },
      {
        "title": "最小回数の精算を表示",
        "body": "SplitWhomが、最小回数の送金で精算できるよう、誰が誰に払えばいいかを即座に表示します。"
      }
    ],
    "whyTitle": "SplitWhomが選ばれる理由",
    "features": [
      {
        "title": "最小回数で精算",
        "body": "ほとんどの割り勘アプリは収支を出すだけ。SplitWhomは送金を最小限の組み合わせで計算するので、支払い回数を最小にできます。"
      },
      {
        "title": "項目ごとに自由に分担",
        "body": "食事はみんなで、ドリンクは3人だけ？すべての費用について、対象に含める人を自由に選べます。"
      },
      {
        "title": "プライバシーを最優先",
        "body": "登録不要、サーバーなし。すべての計算はブラウザ内で行われ、データは端末から外に出ません。"
      },
      {
        "title": "どんな通貨にも対応",
        "body": "USD、EUR、JPYなどに対応。端数も正確に処理するので、1円・1セントもズレません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "何人かが立て替えたとき、どう割り勘するの？",
        "a": "それぞれの支払いと、誰で分担したかを入力します。SplitWhomが各自の支払額と負担額を計算し、全員の貸し借りをゼロにする最小回数の送金を表示します。"
      },
      {
        "q": "SplitWhomは無料ですか？",
        "a": "はい、完全無料です。アカウントもサブスクも不要、インストールも不要で、Webブラウザだけで動きます。"
      },
      {
        "q": "1つの費用を一部の人だけで分担できますか？",
        "a": "はい。支払いごとに分担する人を選べるので、全員での共通費用も一部だけの費用も正しく処理できます。"
      },
      {
        "q": "旅行・キャンプ・ルームシェアでも使えますか？",
        "a": "まさにそのためのアプリです。複数の人がお金を立て替えて、公平に精算したいあらゆる場面で使えます。"
      },
      {
        "q": "データは外部に漏れませんか？",
        "a": "はい。ログインもサーバーもありません。すべての計算はブラウザ内で完結し、データは端末にのみ保存されます。"
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
    "invalid": "この共有リンクは無効か、データがありません。",
    "ctaTitle": "自分たちのグループ費用を割り勘する",
    "ctaButton": "SplitWhomを開く"
  }
};
