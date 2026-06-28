import type { Dictionary } from "../types";

export const ko: Dictionary = {
  "meta": {
    "title": "SplitWhom — 더치페이 정산, 누가 누구에게 줄지 한눈에",
    "description": "로그인 없이 무료로 쓰는 더치페이 정산 앱. 여럿이 쓴 비용을 나누고 누가 누구에게 얼마를 줘야 하는지 최소 송금 횟수로 알려줘요. 여행, 캠핑, 자취 공동생활에 딱.",
    "keywords": [
      "더치페이 계산기",
      "정산 나누기",
      "회비 정산",
      "여행 경비 정산",
      "n분의 1 계산",
      "더치페이 정산",
      "공동 경비 나누기",
      "누가 누구에게 송금"
    ],
    "ogTitle": "SplitWhom — 더치페이 정산, 누가 누구에게 줄지 한눈에",
    "ogDescription": "여럿이 쓴 비용을 나누고 최소 송금으로 정산하세요. 가입 없이 무료로 브라우저에서 바로."
  },
  "hero": {
    "tagline": "함께 쓴 비용을 나누고 누가 누구에게 줄지 최소 송금 횟수로 정확히 알려드려요. 가입 없이 브라우저에서 바로 실행."
  },
  "setup": {
    "eventName": "이벤트 이름",
    "eventPlaceholder": "예: 캠핑 여행",
    "currency": "통화"
  },
  "members": {
    "title": "참여자",
    "addPlaceholder": "이름 추가",
    "add": "추가",
    "empty": "비용을 함께 쓴 사람을 모두 추가하세요.",
    "removeAria": "{name} 삭제",
    "confirmDelete": "{name} 님이 낸 결제 {count}건도 함께 삭제됩니다. 계속할까요?",
    "peopleLabel": "명",
    "notePlaceholder": "이메일 / 전화 / 송금 정보 (선택)",
    "contactsTitle": "참여자 및 송금 정보",
    "copy": "복사",
    "copied": "복사됨!"
  },
  "payments": {
    "title": "결제 내역",
    "itemsLabel": "건",
    "addMembersFirst": "참여자를 먼저 추가하세요.",
    "paidBy": "결제자",
    "description": "항목",
    "descPlaceholder": "예: 식비",
    "amount": "금액",
    "splitBetween": "나눌 사람",
    "selectAll": "전체 선택",
    "clearAll": "전체 해제",
    "addPayment": "결제 추가",
    "paidFor": "지불 항목:",
    "splitEveryone": "전원이 나눔",
    "splitBetweenNames": "{names} 나눔",
    "deleteAria": "삭제",
    "removed": "(삭제됨)",
    "capToggle": "상한 금액 (선택)",
    "capPlaceholder": "상한 없음",
    "capTag": "최대",
    "splitRest": "나머지는 {names} 나눔",
    "capsTooLow": "이 상한 금액으로는 총액을 충당할 수 없습니다."
  },
  "results": {
    "emptyPrompt": "참여자와 결제 내역을 추가하면 정산 결과가 여기에 표시됩니다.",
    "settlementTitle": "정산 — 최소 송금",
    "total": "총 {amount}",
    "allSettled": "정산 완료 — 줄 돈도 받을 돈도 없어요 🎉",
    "balancesTitle": "잔액",
    "member": "참여자",
    "paid": "낸 금액",
    "share": "부담액",
    "net": "차액",
    "legendPositive": "양수",
    "legendNegative": "음수",
    "legendPositiveDesc": "= 돌려받음",
    "legendNegativeDesc": "= 줘야 함"
  },
  "footer": {
    "loadSample": "샘플 데이터 불러오기",
    "reset": "전체 초기화",
    "confirmSample": "현재 데이터를 샘플 데이터로 바꿀까요?",
    "confirmReset": "모든 데이터를 지울까요? 되돌릴 수 없습니다."
  },
  "sample": {
    "title": "캠핑 여행",
    "names": [
      "민준",
      "서연",
      "지호",
      "예은",
      "도윤"
    ],
    "food": "식비",
    "drinks": "음료",
    "firewood": "장작"
  },
  "landing": {
    "heroHeading": "더치페이 정산, 누가 누구에게 줄지 한눈에",
    "heroSub": "여러 사람이 각자 다른 걸 결제했을 때, SplitWhom이 가장 간단한 정산 방법을 찾아드려요 — 모두가 공평해지는 최소 송금 횟수로. 무료, 계정 불필요, 설치할 앱도 없어요.",
    "howItWorksTitle": "이용 방법",
    "steps": [
      {
        "title": "참여자 추가",
        "body": "비용을 함께 쓴 사람을 입력하세요 — 친구, 룸메이트, 캠핑 멤버까지."
      },
      {
        "title": "누가 무엇을 냈는지 입력",
        "body": "각 결제의 금액을 입력하고 누구끼리 나눌지 정확히 골라요."
      },
      {
        "title": "최소 송금으로 정산",
        "body": "SplitWhom이 최소 송금 횟수로 누가 누구에게 줘야 할지 바로 보여줍니다."
      }
    ],
    "whyTitle": "왜 SplitWhom일까요",
    "features": [
      {
        "title": "최소 송금 횟수",
        "body": "대부분의 정산 앱은 잔액만 보여줘요. SplitWhom은 최소한의 송금 조합을 계산해 송금 횟수를 최대한 줄여줍니다."
      },
      {
        "title": "항목별로 자유롭게 나누기",
        "body": "식비는 다 같이, 음료는 셋이서만 샀나요? 결제마다 누구를 포함할지 직접 고를 수 있어요."
      },
      {
        "title": "처음부터 프라이버시 우선",
        "body": "가입도 서버도 없어요 — 모든 계산은 브라우저에서 실행되고 데이터는 기기에만 남습니다."
      },
      {
        "title": "모든 통화 지원",
        "body": "USD, EUR, JPY 등 어떤 통화든 OK. 정확한 반올림으로 1원, 1엔도 빠지지 않아요."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "여러 명이 나눠 냈을 때 정산은 어떻게 하나요?",
        "a": "각 결제와 함께 나눈 사람을 입력하세요. SplitWhom이 각자 낸 금액과 부담할 금액을 계산한 뒤, 모두가 공평해지는 최소 송금 방법을 보여줍니다."
      },
      {
        "q": "SplitWhom은 무료인가요?",
        "a": "네, 완전 무료예요. 계정도, 구독도, 설치할 것도 없이 웹 브라우저에서 바로 실행됩니다."
      },
      {
        "q": "한 결제를 일부 사람끼리만 나눌 수 있나요?",
        "a": "네. 결제마다 누구끼리 나눌지 정확히 고를 수 있어서, 함께 쓴 비용도 일부만 쓴 비용도 모두 올바르게 처리됩니다."
      },
      {
        "q": "여행, 캠핑, 룸메이트 정산에도 쓸 수 있나요?",
        "a": "바로 그럴 때 쓰는 앱이에요 — 두 명 이상이 먼저 돈을 내고 공평하게 정산해야 하는 모든 상황에 딱이죠."
      },
      {
        "q": "제 데이터는 안전한가요?",
        "a": "네. 로그인도 서버도 없어요. 모든 계산은 브라우저에서 이뤄지고 데이터는 기기에만 저장됩니다."
      }
    ]
  },
  "switcher": {
    "label": "언어"
  },
  "share": {
    "share": "공유",
    "copied": "링크 복사됨!",
    "edit": "편집",
    "readonlyNote": "공유된 결과 · 보기 전용",
    "invalid": "이 공유 링크가 유효하지 않거나 비어 있습니다.",
    "ctaTitle": "우리 모임 비용도 정산해 보세요",
    "ctaButton": "SplitWhom 열기"
  }
};
