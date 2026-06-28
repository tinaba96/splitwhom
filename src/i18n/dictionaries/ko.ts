import type { Dictionary } from "../types";

export const ko: Dictionary = {
  "meta": {
    "title": "SplitWhom — 정산하고 누가 누구에게 보낼지 한눈에",
    "description": "그룹 비용을 나누고 최소 송금으로 누가 누구에게 얼마를 보낼지 정확히 보여주는 무료 노로그인 웹앱. 여행, 캠핑, 셰어하우스에 딱.",
    "keywords": [
      "더치페이 계산",
      "정산 앱",
      "1/n 계산기",
      "회비 정산",
      "여행 경비 정산",
      "누가 누구에게",
      "비용 나누기",
      "엔빵 계산기",
      "모임 비용 정산"
    ],
    "ogTitle": "SplitWhom — 정산하고 누가 누구에게 보낼지 한눈에",
    "ogDescription": "그룹 비용을 나누고 최소 송금으로 정산하세요. 가입 없이 무료로 브라우저에서 바로."
  },
  "hero": {
    "tagline": "함께 쓴 비용을 나누고 누가 누구에게 보낼지 정확히 확인하세요 — 최소 송금으로. 가입 없이 브라우저에서 바로 실행됩니다."
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
    "confirmDelete": "{name}님이 낸 결제 {count}건도 함께 삭제됩니다. 계속할까요?",
    "peopleLabel": "명"
  },
  "payments": {
    "title": "결제 내역",
    "itemsLabel": "건",
    "addMembersFirst": "먼저 참여자를 추가하세요.",
    "paidBy": "결제한 사람",
    "description": "내용",
    "descPlaceholder": "예: 식비",
    "amount": "금액",
    "splitBetween": "나눌 사람",
    "selectAll": "전체 선택",
    "clearAll": "전체 해제",
    "addPayment": "결제 추가",
    "paidFor": "결제 항목",
    "splitEveryone": "전원이 나눠 냄",
    "splitBetweenNames": "{names} 나눠 냄",
    "deleteAria": "삭제",
    "removed": "(삭제됨)",
    "fixedToggle": "금액 고정 (선택)",
    "fixedPlaceholder": "나머지 균등",
    "fixedTag": "고정",
    "splitRest": "나머지는 {names} 균등 분배",
    "fixedExceeds": "고정 금액이 총액을 초과합니다."
  },
  "results": {
    "emptyPrompt": "참여자와 결제 내역을 추가하면 정산 결과가 여기에 표시됩니다.",
    "settlementTitle": "정산 — 최소 송금",
    "total": "총 {amount}",
    "allSettled": "정산 완료 — 주고받을 돈이 없어요 🎉",
    "balancesTitle": "잔액",
    "member": "참여자",
    "paid": "결제",
    "share": "부담",
    "net": "잔액",
    "legendPositive": "양수는",
    "legendNegative": "음수는",
    "legendPositiveDesc": "= 돌려받을 금액",
    "legendNegativeDesc": "= 내야 할 금액"
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
    "heroHeading": "정산하고 누가 누구에게 보낼지 한눈에",
    "heroSub": "여러 명이 각자 다른 비용을 냈을 때, SplitWhom이 가장 간단하게 정산하는 방법을 찾아 줍니다 — 모두가 공평해지는 최소 송금 횟수로. 무료, 계정 불필요, 설치할 앱도 없어요.",
    "howItWorksTitle": "사용 방법",
    "steps": [
      {
        "title": "참여자 추가",
        "body": "비용을 함께 쓴 사람들을 적어 보세요 — 친구, 룸메이트, 캠핑 멤버까지."
      },
      {
        "title": "누가 무엇을 냈는지 입력",
        "body": "각 결제를 금액과 함께 추가하고, 누구끼리 나눌지 정확히 골라 주세요."
      },
      {
        "title": "최소 송금으로 정산",
        "body": "SplitWhom이 누가 누구에게 보내야 최소 횟수로 정산되는지 즉시 보여 줍니다."
      }
    ],
    "whyTitle": "왜 SplitWhom인가",
    "features": [
      {
        "title": "최소 송금",
        "body": "대부분의 정산 앱은 잔액만 보여 줍니다. SplitWhom은 최소한의 송금 조합을 계산해, 보내는 횟수를 최대한 줄여 줍니다."
      },
      {
        "title": "항목별 맞춤 분배",
        "body": "식비는 다 같이 냈지만 음료는 셋만 샀다면? 모든 항목마다 누가 포함될지 직접 정할 수 있어요."
      },
      {
        "title": "처음부터 안전하게",
        "body": "가입도 서버도 없습니다 — 모든 계산이 브라우저에서 이루어지고 데이터는 기기에만 남습니다."
      },
      {
        "title": "모든 통화 지원",
        "body": "USD, EUR, JPY 등에서 작동하며, 정확한 반올림으로 1원, 1엔도 새지 않습니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "여러 명이 나눠 냈을 때 정산은 어떻게 하나요?",
        "a": "각 결제와 함께 나눈 사람을 입력하세요. SplitWhom이 각자 낸 금액과 부담할 금액을 비교한 뒤, 모두가 공평해지는 최소 송금을 보여 줍니다."
      },
      {
        "q": "SplitWhom은 무료인가요?",
        "a": "네, 완전 무료입니다. 계정도, 구독도, 설치할 것도 없어요 — 웹 브라우저에서 바로 실행됩니다."
      },
      {
        "q": "한 항목을 일부 사람끼리만 나눌 수 있나요?",
        "a": "네. 결제마다 누구끼리 나눌지 정확히 고를 수 있어, 공동 비용과 일부 인원 비용 모두 올바르게 처리됩니다."
      },
      {
        "q": "여행, 캠핑, 룸메이트에도 쓸 수 있나요?",
        "a": "바로 그럴 때 쓰는 앱입니다 — 두 명 이상이 돈을 먼저 냈고 공평하게 정산해야 하는 모든 상황에 딱이에요."
      },
      {
        "q": "제 데이터는 안전한가요?",
        "a": "네. 로그인도 서버도 없습니다. 모든 계산은 브라우저에서 이루어지고 데이터는 기기에만 저장됩니다."
      }
    ]
  },
  "switcher": {
    "label": "언어"
  }
};
