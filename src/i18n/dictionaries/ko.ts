import type { Dictionary } from "../types";

export const ko: Dictionary = {
  "meta": {
    "title": "SplitWhom — 더치페이 정산하고 누가 누구에게 보낼지 한눈에",
    "description": "로그인 없이 무료로 쓰는 더치페이 정산 웹앱. 모임 비용을 나누고 누가 누구에게 얼마를 보내면 되는지 최소 송금 횟수로 보여줘요. 여행, 캠핑, 셰어하우스에 딱.",
    "keywords": [
      "더치페이 계산기",
      "n분의 1 정산",
      "모임 비용 정산",
      "여행 경비 정산",
      "정산 계산기",
      "회비 정산",
      "더치페이 정산",
      "누가 누구에게 송금"
    ],
    "ogTitle": "SplitWhom — 더치페이 정산하고 누가 누구에게 보낼지 한눈에",
    "ogDescription": "모임 비용을 나누고 최소 송금 횟수로 정산하세요. 가입 없이 무료, 브라우저에서 바로 실행."
  },
  "hero": {
    "tagline": "함께 쓴 비용을 나누고, 누가 누구에게 보내면 되는지 최소 송금 횟수로 정확히 보여줘요. 가입 없이 브라우저에서 바로 실행됩니다."
  },
  "setup": {
    "eventName": "모임 이름",
    "eventPlaceholder": "예: 캠핑 여행",
    "currency": "통화"
  },
  "members": {
    "title": "참여자",
    "addPlaceholder": "이름 추가",
    "add": "추가",
    "empty": "비용을 함께 쓴 사람을 모두 추가하세요.",
    "removeAria": "{name} 삭제",
    "confirmDelete": "{name}님이 결제한 내역 {count}건도 함께 삭제됩니다. 계속할까요?",
    "peopleLabel": "명"
  },
  "payments": {
    "title": "결제 내역",
    "itemsLabel": "건",
    "addMembersFirst": "참여자를 먼저 추가하세요.",
    "paidBy": "결제한 사람",
    "description": "내용",
    "descPlaceholder": "예: 식비",
    "amount": "금액",
    "splitBetween": "나눌 사람",
    "selectAll": "전체 선택",
    "clearAll": "전체 해제",
    "addPayment": "결제 추가",
    "paidFor": "결제:",
    "splitEveryone": "전원이 나눔",
    "splitBetweenNames": "{names} 나눔",
    "deleteAria": "삭제",
    "removed": "(삭제됨)",
    "capToggle": "부담 한도 (선택)",
    "capPlaceholder": "한도 없음",
    "capTag": "최대",
    "splitRest": "나머지는 {names}이(가) 나눔",
    "capsTooLow": "이 한도로는 총액을 충당할 수 없습니다."
  },
  "results": {
    "emptyPrompt": "참여자와 결제 내역을 추가하면 정산 결과가 여기에 표시됩니다.",
    "settlementTitle": "정산 — 최소 송금",
    "total": "총 {amount}",
    "allSettled": "정산 완료 — 주고받을 돈이 없어요 🎉",
    "balancesTitle": "잔액",
    "member": "참여자",
    "paid": "결제액",
    "share": "부담액",
    "net": "정산액",
    "legendPositive": "양수",
    "legendNegative": "음수",
    "legendPositiveDesc": "= 돌려받음",
    "legendNegativeDesc": "= 보내야 함"
  },
  "footer": {
    "loadSample": "샘플 데이터 불러오기",
    "reset": "전체 초기화",
    "confirmSample": "현재 데이터를 샘플 데이터로 바꿀까요?",
    "confirmReset": "모든 데이터를 삭제할까요? 되돌릴 수 없습니다."
  },
  "sample": {
    "title": "캠핑 여행",
    "names": [
      "민준",
      "서연",
      "지후",
      "하은",
      "도윤"
    ],
    "food": "식비",
    "drinks": "음료",
    "firewood": "장작"
  },
  "landing": {
    "heroHeading": "더치페이 정산, 누가 누구에게 보낼지 한눈에",
    "heroSub": "여러 사람이 각자 다른 걸 결제했을 때, SplitWhom이 가장 간단한 정산 방법을 계산해 드려요 — 모두가 공평해지는 최소 송금 횟수로요. 무료, 가입 불필요, 앱 설치도 없습니다.",
    "howItWorksTitle": "사용 방법",
    "steps": [
      {
        "title": "참여자 추가",
        "body": "비용을 함께 쓴 사람을 적어 주세요 — 친구, 룸메이트, 캠핑 멤버 누구든."
      },
      {
        "title": "누가 무엇을 냈는지 입력",
        "body": "각 결제 내역을 금액과 함께 추가하고, 누구끼리 나눌지 정확히 선택하세요."
      },
      {
        "title": "최소 송금으로 정산",
        "body": "SplitWhom이 가장 적은 송금 횟수로 누가 누구에게 보내면 되는지 바로 보여줘요."
      }
    ],
    "whyTitle": "왜 SplitWhom인가",
    "features": [
      {
        "title": "최소 송금 횟수",
        "body": "대부분의 정산 앱은 잔액만 보여줘요. SplitWhom은 최소한의 송금 조합을 계산해, 가능한 한 적게 송금하도록 해 줍니다."
      },
      {
        "title": "항목마다 원하는 대로 분할",
        "body": "식비는 다 같이, 음료는 셋이서만 샀나요? 항목 하나하나마다 포함될 사람을 직접 고를 수 있어요."
      },
      {
        "title": "설계부터 프라이빗하게",
        "body": "가입도 서버도 없어요 — 모든 계산은 브라우저에서 이루어지고 데이터는 기기에만 남습니다."
      },
      {
        "title": "모든 통화 지원",
        "body": "USD, EUR, JPY 등 어떤 통화든 지원하며, 정확한 반올림으로 1원, 1엔도 새지 않아요."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "여러 명이 결제했을 때 더치페이는 어떻게 정산하나요?",
        "a": "각 결제 내역과 함께 나눈 사람을 입력하세요. SplitWhom이 각자 낸 금액과 부담할 금액을 계산해, 모두가 공평해지는 최소 송금 횟수를 보여줍니다."
      },
      {
        "q": "SplitWhom은 무료인가요?",
        "a": "네, 완전 무료입니다. 가입도, 구독도, 설치할 것도 없어요 — 웹 브라우저에서 바로 실행됩니다."
      },
      {
        "q": "한 항목을 일부 사람끼리만 나눌 수 있나요?",
        "a": "네. 결제마다 누구끼리 나눌지 정확히 선택할 수 있어, 다 같이 쓴 비용과 일부만 쓴 비용 모두 올바르게 처리됩니다."
      },
      {
        "q": "여행, 캠핑, 룸메이트 정산에도 쓸 수 있나요?",
        "a": "바로 그런 상황을 위한 앱이에요 — 두 명 이상이 돈을 먼저 내고 공평하게 나눠야 하는 어떤 상황이든요."
      },
      {
        "q": "제 데이터는 안전한가요?",
        "a": "네. 로그인도 서버도 없습니다. 모든 계산은 브라우저에서 이루어지고 데이터는 내 기기에만 저장돼요."
      }
    ]
  },
  "switcher": {
    "label": "언어"
  },
  "share": {
    "share": "공유",
    "copied": "링크 복사 완료!",
    "edit": "편집",
    "readonlyNote": "공유된 결과 · 보기 전용",
    "invalid": "공유 링크가 잘못되었거나 비어 있습니다.",
    "ctaTitle": "우리 모임 비용도 정산해 보세요",
    "ctaButton": "SplitWhom 열기"
  }
};
