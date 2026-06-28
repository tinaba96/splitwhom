import type { Dictionary } from "../types";

export const ja: Dictionary = {
  "meta": {
    "title": "SplitWhom — 割り勘して、誰が誰に払うか一目でわかる",
    "description": "グループの支払いを精算して、誰が誰にいくら払えばいいかを最少の支払い回数で表示する無料の割り勘アプリ。ログイン不要。旅行・キャンプ・シェアハウスにぴったり。",
    "keywords": [
      "割り勘",
      "割り勘アプリ",
      "割り勘 計算",
      "立て替え 精算",
      "グループ 支払い 精算",
      "誰が誰に払う",
      "旅行 割り勘",
      "割り勘 計算機"
    ],
    "ogTitle": "SplitWhom — 割り勘して、誰が誰に払うか一目でわかる",
    "ogDescription": "グループの支払いを最少の回数で精算。登録不要・無料・ブラウザだけで使えます。"
  },
  "hero": {
    "tagline": "みんなの支払いを精算して、誰が誰にいくら払えばいいかが最少の回数でわかる。登録不要、ブラウザだけで完結します。"
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
    "empty": "費用を分け合った人を全員追加しましょう。",
    "removeAria": "{name}を削除",
    "confirmDelete": "{name}さんの支払い{count}件も一緒に削除されます。続けますか？",
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
    "splitBetween": "割り勘する人",
    "selectAll": "全員選択",
    "clearAll": "選択解除",
    "addPayment": "支払いを追加",
    "paidFor": "が支払い",
    "splitEveryone": "全員で割り勘",
    "splitBetweenNames": "{names}で割り勘",
    "deleteAria": "削除",
    "removed": "（削除済み）",
    "fixedToggle": "金額を指定（任意）",
    "fixedPlaceholder": "残りを割り勘",
    "fixedTag": "固定",
    "splitRest": "残りを{names}で割り勘",
    "fixedExceeds": "指定した金額の合計が総額を超えています。"
  },
  "results": {
    "emptyPrompt": "メンバーと支払いを追加すると、ここに精算結果が表示されます。",
    "settlementTitle": "精算 — 最少の支払い回数",
    "total": "合計 {amount}",
    "allSettled": "精算完了 — 誰にも貸し借りはありません 🎉",
    "balancesTitle": "収支",
    "member": "メンバー",
    "paid": "支払い",
    "share": "負担額",
    "net": "差額",
    "legendPositive": "プラス",
    "legendNegative": "マイナス",
    "legendPositiveDesc": "＝受け取る側",
    "legendNegativeDesc": "＝支払う側"
  },
  "footer": {
    "loadSample": "サンプルを読み込む",
    "reset": "すべてリセット",
    "confirmSample": "今のデータをサンプルデータに置き換えますか？",
    "confirmReset": "すべてのデータを消去しますか？この操作は元に戻せません。"
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
    "heroHeading": "割り勘して、誰が誰に払うかひと目でわかる",
    "heroSub": "みんながバラバラに支払っても、SplitWhomが一番シンプルな精算方法を計算。全員の貸し借りをゼロにする最少の支払い回数を導き出します。無料・アカウント不要・アプリのインストールも不要。",
    "howItWorksTitle": "使い方",
    "steps": [
      {
        "title": "メンバーを追加",
        "body": "費用を分け合った人をリストアップ。友だち、ルームメイト、キャンプ仲間など。"
      },
      {
        "title": "誰が何を払ったか入力",
        "body": "それぞれの支払いを金額とともに追加して、誰で割り勘するかを選びます。"
      },
      {
        "title": "最少の支払いで精算",
        "body": "SplitWhomが、最少の送金回数で精算するための「誰が誰に払うか」をすぐに表示します。"
      }
    ],
    "whyTitle": "SplitWhomを選ぶ理由",
    "features": [
      {
        "title": "最少の支払い回数",
        "body": "ほとんどの割り勘ツールは収支を出すだけ。SplitWhomは送金を最少にまとめて計算するので、支払いの手間が最小限になります。"
      },
      {
        "title": "項目ごとに自由に割り勘",
        "body": "食費はみんなで、でも飲み物は3人だけ？支払いごとに対象者を自由に選べます。"
      },
      {
        "title": "プライバシー第一の設計",
        "body": "登録もサーバーも不要。すべての計算はブラウザ内で行われ、データはあなたの端末だけに残ります。"
      },
      {
        "title": "どんな通貨でもOK",
        "body": "USD、EUR、JPYなどに対応。正確に端数処理するので、1円も1セントもズレません。"
      }
    ],
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "複数人で払ったときの割り勘はどうやるの？",
        "a": "それぞれの支払いと、誰で分け合ったかを入力するだけ。SplitWhomが各自の支払い額と負担額を計算し、全員の貸し借りをゼロにする最少の送金を表示します。"
      },
      {
        "q": "SplitWhomは無料ですか？",
        "a": "はい、完全無料です。アカウントもサブスクも不要、インストールも一切なし。ブラウザだけで使えます。"
      },
      {
        "q": "一部の人だけで1つの支払いを割り勘できますか？",
        "a": "できます。支払いごとに割り勘の対象者を選べるので、全員での費用も一部メンバーだけの費用も正しく処理できます。"
      },
      {
        "q": "旅行・キャンプ・ルームシェアでも使える？",
        "a": "まさにそのためのツールです。誰かが立て替えてあとで公平に精算したい、そんな場面ならどんなときでも使えます。"
      },
      {
        "q": "データのプライバシーは守られますか？",
        "a": "はい。ログインもサーバーもありません。すべての計算はブラウザ内で行われ、データはあなたの端末だけに保存されます。"
      }
    ]
  },
  "switcher": {
    "label": "言語"
  }
};
