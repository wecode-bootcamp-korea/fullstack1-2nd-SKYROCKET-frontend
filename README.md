# SKYROCKET Front-end 소개

### 세상의 모든 펀딩이 SKYROCKET하는 날까지!

크라우드 펀딩 사이트 <a href="https://tumblbug.com/" target="_blank">tumblbug</a>을 모티브로 한 펀딩 사이트 개발 팀 프로젝트입니다.

서비스명인 `SKYROCKET`은 `급등하다`라는 뜻을 가진 동사로,<br />
`SKYROCKET` 서비스와 팀원 개개인이 끊임없이 발전하기를 원하는 마음💖을 담았습니다.

<br />

## 🎬 프로젝트 DEMO 영상

[SKYROCKET Demo 영상](https://vimeo.com/585886529)

<br />

## 💁‍♀️💁‍♂️ 팀원 구성

- [감하영 (FE, BE)](https://github.com/iamhayoung)
- [신수호 (FE)](https://github.com/realsuhoman)
- [박미정 (BE)](https://github.com/undefinedP)

<br />

## 📆 프로젝트 기간

2021.07.26 ~ 2021.8.10 (16일간)

<br />

## 🔑 Skills

- **FrontEnd**

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/React_Hooks-61DAFB?style=flat-square&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=ReactRouter&logoColor=black"/></a>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=StyledComponents&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

- **BackEnd**

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Bcrypt-003A70?style=flat-square&logo=LetsEncrypt&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JSONWebTokens-000000?style=flat-square&logo=JSONWebTokens&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Jest-c21325?style=flat-square&logo=Jest&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white"/></a>

- **Common**

<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></a>

- **Tools**

<img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/></a>

<br />

## Back-end Repository

[SKYROCKET Back-end Repository Link](https://github.com/wecode-bootcamp-korea/fullstack1-2nd-SKYROCKET-backend)

<br />

## Front-end 구현 기능 상세

### 1. 공통 구현 사항

- 공용 Header
  - 레이아웃 구현
  - 공용 Header가 일부 페이지에서는 렌더링 되지 않도록 동적 라우팅 구현
  - 유저가 로그인했을 시에만 나타나는, 로그아웃 버튼 및 로그아웃 기능 구현
- Footer
  - 레이아웃 구현
  - 공용 Footer가 일부 페이지에서는 렌더링 되지 않도록 동적 라우팅 구현
- `utils.js`에 공용 모듈을 분리
  - 금액 세 자리 단위마다 콤마 추가하는 함수
  - 프로젝트 달성률을 계산하고, 소숫점을 제거하여 출력하는 함수
  - 프로젝트 남은 날짜를 계산하는 함수
- `Axios` 인스턴스를 생성하여 Request의 공통 부분을 통합화
- `styled-components`와 `props.children`을 활용하여 Container Component 구현
- `flex`와 같이 자주 사용하는 CSS를 모듈화, `ThemeProvider`를 사용하여 컬러 변수를 Global화

### 2. 메인 페이지

- 레이아웃 구현
- 메인 상단의 Carousel 구현
- 상품 리스트 API와 연계하여, 해당 카테고리 상품을 동적으로 출력

### 3. 상품 리스트 페이지

- 레이아웃 구현
- 상품 리스트 API와 연계하여, 모든 상품 정보를 동적으로 출력
- 프로젝트의 진행률을 나타내는 Progress Bar 구현
- 프로젝트의 남은 기간을 나타내는 Indicator 출력

### 4. 상세 페이지

- 레이아웃 구현
- 상품의 ID에 따른 동적 라우팅 구현
- 상품 상세 API와 연계하여, 상품 정보를 동적으로 출력
- 결제일을 한국시각(년, 월, 일)으로 표시
- 선물 선택의 옵션 클릭 시, 추가 후원금 선택 박스를 Toggle
- 추가 후원금 금액 선택에 따라 후원금 금액 변화
- 상세 페이지에서 API의 Fetch가 완료되지 않았을 때, 각종 금액 및 숫자 지표를 0으로 표시

### 5. 로그인/회원가입

- 레이아웃 구현
- 로그인/회원가입 페이지에서 공용으로 사용되는 요소를 공용 컴포넌트로 분리하여 재사용
  - `styled-components`를 활용하여, 공용 컴포넌트의 Default 스타일과 더불어, 수취한 props을 통해 추가로 스타일을 동적으로 부여
- 카카오 API와 연계하여 소셜 로그인/회원가입 기능 구현
  - 소셜 로그인/회원가입 로직을 Custom Hook으로 분리해, 로그인/회원가입 페이지 등 여러 컴포넌트에서 함께 재사용할 수 있도록 구현
  - 백엔드에게 카카오로부터 받은 토큰을 전달하며 카카오 측에 카카오 토큰의 복호화를 요구하고, DB 정보를 확인한 뒤 토큰을 받아 `LocalStorage`에 저장
  - 소셜 로그인/회원가입이 완료되면 환영 메시지와 함께 메인으로 Redirect
- 일반 로그인/회원가입 기능 구현
  - 로그인
    - 일반 로그인 API와 연계
    - 로그인 성공 시 환영 메시지와 함께 발급받은 토큰을 `LocalStorage`에 저장 후, 메인으로 Redirect
    - 아이디 또는 비밀번호가 일치하지 않을 시, Alert로 안내
  - 회원가입
    - 회원가입 API와 연계
    - 회원가입 성공 시 환영 메시지와 함께 로그인 페이지로 Redirect
- 회원가입 폼의 약관 동의 Checkbox 전체 선택/해제 기능 구현
  - 전체 선택 & 해제
  - 전체 선택 후, 한 항목이라도 checkbox가 false이면 전체 선택 해제
  - "전체 동의" checkbox를 제외한 싱글 checkbox를 모두 선택 시, "전체 동의" checkbox 활성화
- 로그인/회원가입 폼의 Input값을 취득하는 로직을 Custom Hook으로 분리하여, 재사용성을 높이고 중복 코드를 배제
- 로그인/회원가입 페이지 전용 Header 구현

### 6. 후원 현황 페이지

- 레이아웃 구현
- mock data를 활용하여 후원 현황 데이터를 출력

<br />

## ☕️ Reference

- 이 프로젝트는 [tumblbug](https://tumblbug.com/) 사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
- 이 프로젝트에서 사용하고 있는 사진은 [unsplash](https://unsplash.com/)에서 공유받은 Free 이미지이므로, 해당 프로젝트 외부인이 사용할 수 없습니다.
