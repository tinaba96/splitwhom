import type { Dictionary } from "../types";

export const ko: Dictionary = {
  "meta": {
    "title": "SplitWhom — 더치페이 정산, 누가 누구에게 보낼지 한눈에",
    "description": "로그인 없이 무료로 쓰는 더치페이 정산 웹앱. 그룹 지출을 나누고 최소 송금 횟수로 누가 누구에게 보낼지 정확히 알려줍니다. 여행, 캠핑, 자취 셰어하우스에 딱.",
    "keywords": [
      "더치페이 계산기",
      "정산하기",
      "엔빵 계산",
      "회비 정산",
      "여행 경비 정산",
      "모임 비용 정산",
      "1/n 계산기",
      "누가 누구에게"
    ],
    "ogTitle": "SplitWhom — 더치페이 정산, 누가 누구에게 보낼지 한눈에",
    "ogDescription": "그룹 지출을 나누고 최소 송금 횟수로 깔끔하게 정산하세요. 가입 없이 무료, 브라우저에서 바로."
  },
  "hero": {
    "tagline": "함께 쓴 비용을 나누고, 누가 누구에게 보낼지 정확히 확인하세요. 최소 송금 횟수로. 가입 없이 브라우저에서 바로 실행됩니다."
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
    "addMembersFirst": "참여자를 먼저 추가하세요.",
    "paidBy": "결제한 사람",
    "description": "내용",
    "descPlaceholder": "예: 식비",
    "amount": "금액",
    "splitBetween": "나눌 사람",
    "selectAll": "전체 선택",
    "clearAll": "전체 해제",
    "addPayment": "결제 추가",
    "paidFor": "결제",
    "splitEveryone": "전원 분담",
    "splitBetweenNames": "{names} 분담",
    "deleteAria": "삭제",
    "removed": "(삭제됨)",
    "capToggle": "분담 상한 (선택)",
    "capPlaceholder": "상한 없음",
    "capTag": "최대",
    "splitRest": "나머지는 {names} 분담",
    "capsTooLow": "이 상한으로는 총액을 충당할 수 없어요."
  },
  "results": {
    "emptyPrompt": "참여자와 결제 내역을 추가하면 정산 결과가 여기에 표시됩니다.",
    "settlementTitle": "정산 — 최소 송금",
    "total": "총 {amount}",
    "allSettled": "정산 완료 — 주고받을 돈이 없어요 🎉",
    "balancesTitle": "잔액",
    "member": "참여자",
    "paid": "낸 돈",
    "share": "분담액",
    "net": "차액",
    "legendPositive": "양수",
    "legendNegative": "음수",
    "legendPositiveDesc": "= 돌려받을 돈",
    "legendNegativeDesc": "= 내야 할 돈"
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
      "지호",
      "수아",
      "도윤"
    ],
    "food": "식비",
    "drinks": "음료",
    "firewood": "장작"
  },
  "landing": {
    "heroHeading": "더치페이 정산, 누가 누구에게 보낼지 한눈에",
    "heroSub": "여러 사람이 각자 다른 걸 결제했을 때, SplitWhom이 가장 간단한 정산 방법을 찾아줍니다. 모두 공평해지는 최소한의 송금만으로요. 무료, 가입 불필요, 설치할 앱도 없습니다.",
    "howItWorksTitle": "이용 방법",
    "steps": [
      {
        "title": "참여자 추가",
        "body": "비용을 함께 쓴 사람을 모두 적어주세요. 친구, 룸메이트, 캠핑 멤버까지."
      },
      {
        "title": "누가 무엇을 냈는지 입력",
        "body": "각 결제의 금액을 적고, 누구끼리 나눌지 정확히 선택하세요."
      },
      {
        "title": "최소 송금으로 정산",
        "body": "SplitWhom이 최소한의 송금 횟수로 누가 누구에게 보낼지 바로 보여줍니다."
      }
    ],
    "whyTitle": "왜 SplitWhom인가",
    "features": [
      {
        "title": "최소 송금 횟수",
        "body": "대부분의 정산 앱은 잔액만 보여줍니다. SplitWhom은 최소한의 송금 조합을 계산해, 가능한 한 적게 보내도록 해줍니다."
      },
      {
        "title": "항목마다 원하는 대로 분담",
        "body": "식비는 다 같이 썼지만 음료는 세 명만 샀다면? 결제 하나하나마다 누가 포함될지 직접 고르세요."
      },
      {
        "title": "처음부터 프라이버시 중심",
        "body": "가입도 서버도 없습니다. 모든 계산은 브라우저에서 이루어지고, 데이터는 내 기기에만 남습니다."
      },
      {
        "title": "어떤 통화든 OK",
        "body": "USD, EUR, JPY 등 다양한 통화를 지원하며, 정확한 반올림으로 단 1원, 1엔도 새지 않습니다."
      }
    ],
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "여러 명이 각자 결제했을 때 더치페이는 어떻게 정산하나요?",
        "a": "각 결제와 함께 나눈 사람을 입력하세요. SplitWhom이 각자 낸 돈과 부담해야 할 돈을 계산해, 모두 공평해지는 최소 송금 횟수를 보여줍니다."
      },
      {
        "q": "SplitWhom은 무료인가요?",
        "a": "네, 완전히 무료입니다. 계정도, 구독도, 설치할 것도 없이 웹 브라우저에서 바로 실행됩니다."
      },
      {
        "q": "하나의 지출을 일부 사람들끼리만 나눌 수 있나요?",
        "a": "네. 결제마다 누구끼리 나눌지 정확히 선택할 수 있어서, 다 같이 쓴 비용과 일부만 쓴 비용 모두 정확히 처리됩니다."
      },
      {
        "q": "여행, 캠핑, 룸메이트 정산에도 쓸 수 있나요?",
        "a": "바로 그런 상황을 위한 앱입니다. 한 명 이상이 돈을 먼저 내고 공평하게 정산해야 하는 모든 상황에 딱이에요."
      },
      {
        "q": "제 데이터는 안전한가요?",
        "a": "네. 로그인도 서버도 없습니다. 모든 계산은 브라우저에서 이루어지고, 데이터는 내 기기에만 저장됩니다."
      }
    ]
  },
  "switcher": {
    "label": "언어"
  }
};
