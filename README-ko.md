<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://user-images.githubusercontent.com/68415905/175806255-6da4861b-2f7d-437c-9990-a679f11acdfa.png" alt="Logo" width="80" >
  <h1>노들 마켓 (Nodeul Market)</h1>
  <p>
    <a href="https://nodeulmarket.netlify.app">배포 주소 바로가기</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#프로젝트-소개">프로젝트 소개</a></div>
    <div><a href="#기술-스택">기술 스택</a></div>
    <div><a href="#프로젝트-구현-사항">프로젝트 구현 사항</a></div>
    <div><a href="#커밋-컨벤션">커밋 컨벤션</a></div>
</details>

## 프로젝트 소개

> 구매한(혹은 구매예정인) 과일, 야채, 냉동식품, 유제품 등의 식료품을 근처 유저들에게 저렴하게 되팔 수 있도록 만들어진 공유 로컬 마켓 웹사이트

혼자 사는 자취생이나 1인가구 직장인이라면 누구나 공감할 냉장고 속 골칫거리, 사두고 먹지못해 상해버린 야채와 과일들.. 소량으로 구매하면 비싸고 많이 사두면 결국 골칫거리가 되기 일쑤인데 zero-waste 운동이 한창인 요즘, 이런 식재료 낭비도 최소화할 수 없을까하는 의문이 들었습니다. 그러다 중고물품을 파는 '당근마켓' 서비스에서 아이디어를 얻어 식료품 전용의 또다른 마켓이 있으면 좋겠다는 생각에 프로젝트를 시작하게 되었습니다.

- 제작 기간 : 2021.04.01 - 2021.04.21

<br/>

## 기술 스택

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/sass-CF649A?style=for-the-badge&logo=sass&logoColor=white">&nbsp;&nbsp;

<br/>

## 프로젝트 구현 사항

### 주로 어떤 상품들이 판매되나요?

주요 판매 상품은 **1) 보관 기간이 짧은** 과일, 야채, **2) 소량 구매가 힘든**(배송비 문제 등) 두유, 냉동 식품 등이 있습니다. 구매하고자 하는 상품이 있다면 **ADD TO CART** 버튼을 눌러 카트에 추가합니다.

<img src="https://user-images.githubusercontent.com/68415905/175806043-b374865f-bcbf-4915-b8fd-f956909e12c3.png" alt="img" width="70%" >

<br/>

### 상품 구매 / 문의는 어떻게 하나요?

상품을 장바구니에 담았다면 사이트 상단의 **MY CART** 버튼을 눌러 장바구니 내역을 확인합니다. 구매를 원한다면 **BUY THIS** 버튼을 눌러 판매자에게 구매의사를 밝힙니다. 구매를 원하지 않으면 **DELETE THIS** 버튼으로 상품을 삭제합니다.

<img src="https://user-images.githubusercontent.com/68415905/175806097-aff687d4-6369-42db-9881-9e26ca25dab2.png" alt="img" width="280px" >

✅ 장바구니 UI 살펴보기

- 상단 오른쪽 X 버튼 : 장바구니 닫기
- current stock : 현재 재고 상태
- 가격 태그 : 개당 가격 / total 가격 표시
- ➖, ➕ 버튼 : 수량 조절
  (재고 수량을 넘을 경우 경고창 띄우기)
- **BUY THIS** : 판매자와 채팅하기
- **DELETE THIS** : 상품 삭제

<br/>

### **상품 추가는 어떻게 하나요?**

사이트 상단, 혹은 배너 중앙의 **ADD ITEM** 버튼을 눌러 나누고자 하는 상품을 추가합니다. 폼 형식의 모달창이 나타나면 물품의 정보를 입력 후 **ADD TO INVENTORY** 버튼을 클릭하여 저장합니다.

<img src="https://user-images.githubusercontent.com/68415905/175806095-d82d7820-2273-4c80-9582-ef87694b5720.png" alt="img" width="280px" >

✅ 아이템 추가창 UI 살펴보기

- 상단 오른쪽 X 버튼 : 폼 닫기
- **물품명** Title : 판매하고자 하는 물품
- **분류** Category : 과일, 야채 등의 카테고리
- **수량** Quantity : 판매 수량 입력
- **가격** Price : 판매 가격(개당) 입력
- **상세설명** Descripttion : 상품 상세 정보
- **사진** Image : 직접 촬영한 상품사진
- **ADD TO INVENTORY** : 메인에 추가

<br/>

### 판매 지역 설정도 가능한가요?

아직 구상중인 서비스라 UI 요소는 추가하지 않았지만 대략적인 아이디어는 아래와 같습니다.

1. 불특정 다수에게 판매 하는 경우

OO대학교, △△거리 등 1인가구가 밀집된 구역을 중심으로 마켓이 열리며 현재 위치 정보를 바탕으로 마켓을 이용할 수 있습니다..

2. 본인이 속한 특정 그룹에게 판매 하는 경우

☆☆컴퍼니, ◇◇쉐어하우스 등 함께 생활하는 사람들과 함께 마켓을 열어 나눔을 실천할 수 있습니다. 이 경우, 마켓을 직접 오픈할 수 있고 보안이 필요하다면 비밀번호를 설정해 링크를 공유하는 멤버들만 이용이 가능합니다. 아파트 단지 주민들끼리, 쉐어하우스 내부에서, 혹은 회사 사람들간에 물품 공유가 가능하고, 공동구매도 가능합니다.

<p align="right">(<a href="#top">back to top</a>)</p>
