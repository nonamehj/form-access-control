# 📌 폼 기반 회원 관리 프로젝트

## 폼 기능을 중심으로 로그인 상태 및 조건에 따라 데이터 노출 범위를 제어하는 React 프로젝트입니다.

단순 폼 UI를 넘어 **라우터**와 **API**를 결합하여 회원 전용 기능과 비회원 제한 기능을 구현했습니다.

## 📖 프로젝트 소개

이 프로젝트는 회원 관리와 데이터 접근 제어를 주 목적으로 제작되었습니다.

- **비회원**: 제한된 데이터만 열람 가능
- **회원**: 전체 데이터 열람 및 페이지 이동 가능
- API 데이터는 로그인 상태와 조건에 따라 다르게 노출
- 폼 기능: 로그인, 회원가입, 개인정보 수정, 회원탈퇴, 아이디/비밀번호 찾기, 문의하기, 약관 동의(체크 UI)

---

## 🚀 주요 기능 및 흐름

### 주요 기능

- 회원가입 / 로그인 / 로그아웃
- 개인정보 수정 / 회원탈퇴 / 문의하기
- 아이디, 비밀번호 찾기 및 재설정
- 약관 동의 UI(필수/선택 체크 제어)
- API 데이터 조회 (로그인 상태별 차등 제공)
- 페이지네이션 (회원 전용)
- 검색 (디바운스 적용)
- 로딩/에러 UI 제공

### 사용자 흐름

1. 메인 페이지에서 비회원은 일부 데이터만 열람
2. 회원가입 및 로그인 시 전체 데이터와 기능 활성화
3. 로그인 후 개인정보 페이지에서 문의, 수정, 탈퇴 가능
4. 검색, 페이지 이동 시 API 호출 및 결과 반영

---

## 📁 폴더 구조 (src/)

```js
src/
├── components/
│   ├── button/
│   │   ├── Button.js
│   │   └── ButtonStyle.css
│   ├── error/
│   │   ├── EmprtySearch.js
│   │   └── EmprtySearchStyle.css
│   ├── form/
│   │   ├── account/
│   │   │   ├── contact/
│   │   │   │   ├── Contact.js/
│   │   │   │   └── ContactStyle.css/
│   │   │   ├── delete/
│   │   │   │   ├── DeleteUserForm.js/
│   │   │   │   └── DeleteUserFormStyle.css/
│   │   │   ├── edit/
│   │   │   │   ├── EditUserForm.js/
│   │   │   │   └── EditUserFormStyle.css/
│   │   │   └── index.js
│   │   ├── agree/
│   │   │   ├── TermsAgreement.js/
│   │   │   └── TermsAgreementStyle.css/
│   │   ├── login/
│   │   │   ├── Login.js/
│   │   │   └── LoginStyle.css/
│   │   ├── recovery/
│   │   │   ├── FindId.js/
│   │   │   ├── FindPassword.js/
│   │   │   ├── ResetPassword.js/
│   │   │   ├── index.js/
│   │   │   └── SharedStyle.css/
│   │   ├── register/
│   │   │   ├── Register.js/
│   │   │   └── RegisterStyle.css/
│   │   └── index.js
│   ├── home/
│   │   ├── Stories.js
│   │   └── StoriesStyle.css
│   ├── loading/
│   │   ├── Loading.js
│   │   ├── LoadingStyle.css
│   ├── nav/
│   │   ├── Navbar.js
│   │   └── NavbarStyle.css
│   ├── search/
│   │   ├── SearchForm.js
│   │   └── SearchFormStyle.css
│   │── user/
│   │   ├── UserInfoPage.js
│   │   └── UserInfoPageStyle.css
│   └── index.js
├── pages/
│   ├── AgreementPage.js
│   ├── ContactPage.js
│   ├── DeleteUserPage.js
│   ├── EditUserPage.js
│   ├── FindIdPage.js
│   ├── FindPasswordPage.js
│   ├── HomePage.js
│   ├── LoginPagePage.js
│   ├── RegisterPage.js
│   ├── ResetPasswordPage.js
│   ├── UserPage.js
│   └── index.js
├── sharedLayout/
│   ├── ProtectedLayout.js
│   ├── SharedLayout.js
│   ├── SharedLayoutFindPages.js
│   ├── SharedLayoutPages.js
│   └── index.js
├── utils/
│   ├── deleteFormatFormData.js
│   ├── formatFormData.js
│   ├── icons.js
│   ├── regex.js
│   ├── resetFormatFormData.js
│   ├── validateContactForm.js
│   ├── validateDeleteForm.js
│   ├── validateFindData.js
│   ├── validateFindIdData.js
│   ├── validateFindPwData.js
│   ├── validateResetForm.js
│   ├── validateUserData.js
│   └── index.js
├── actions.js
├── apiContext.js
├── formContext.js
├── reducer.js
├── index.js
├── App.js
└── index.css

```

---

## 🧩 컴포넌트 설명

### **button/**

- **Button**: API 목록에서 이전/다음 페이지로 이동하는 버튼 (로그인 시만 표시)

### **error/**

- **EmptySearch**: 검색 결과 없음 또는 API 리스트가 모두 삭제되었을 때 메시지 및 새로고침 버튼 표시

### **form/**

- **account/**
  - **Contact**: 문의 폼
  - **DeleteUserForm**: 계정 삭제 폼
  - **EditUserForm**: 개인정보 수정 폼
- **agree/**
  - **TermsAgreement**: 약관 동의 UI (필수 체크 시 다음 페이지 이동 가능)
- **login/**
  - **Login**: 아이디·비밀번호 입력 및 관련 페이지 이동 링크
- **recovery/**
  - **FindId**: 아이디 찾기 폼
  - **FindPassword**: 비밀번호 찾기 폼
  - **ResetPassword**: 비밀번호 재설정 폼
- **register/**
  - **Register**: 회원가입 폼

### **home/**

- **Stories**: 메인 화면 리스트 (비회원 최소 데이터, 회원 전체 데이터 + 페이지 버튼)

### **loading/**

- **Loading**: API 호출 전 로딩 UI

### **nav/**

- **Navbar**: 로그인 전(로고+로그인 버튼) / 로그인 후(닉네임, 개인정보 페이지, 로그아웃 아이콘)

### **search/**

- **SearchForm**: 디바운스 기반 검색 폼 (0.5초 대기 후 자동 검색)

### **user/**

- **UserInfoPage**: 닉네임, 문의/수정/탈퇴 메뉴 리스트

---

## 📄 페이지(Page) 구성

- **AgreementPage** → `TermsAgreement`
- **ContactPage** → `Contact`
- **DeleteUserPage** → `DeleteUserForm`
- **EditUserPage** → `EditUserForm`
- **FindIdPage** → `FindId`
- **FindPasswordPage** → `FindPassword`
- **HomePage** → `Stories`
- **LoginPage** → `Login`
- **RegisterPage** → `Register`
- **ResetPasswordPage** → `ResetPassword`
- **UserPage** → `UserInfoPage`

---

## 🗂 라우터 구조

- `/` → `HomePage`
- `/login` → (중첩) `/agree`, `/signup`, `/find-id`, `/find-password`, `/reset-password`
- `/user` → (중첩, 로그인·조건 충족 시) `/edit`, `/contact`, `/delete`

---

## 🏗 Shared Layout

- **ProtectedLayout**: 로그인·조건 충족 시 접근 허용
- **SharedLayout** / **SharedLayoutFindPages** / **SharedLayoutPages**: 중첩 라우팅 시 공통 UI 제공

---

## 🛠️ 사용 기술 및 라이브러리

- **React**
  - Hooks: `useState`, `useEffect`, `useCallback`, `useReducer`, `useRef`, `createContext`, `useContext`
- **React Router**
  - `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate`, `useLocation`, `Outlet`
- **Custom Hooks / Context**
  - `useFormContext`, `useApiContext`
- **기타**
  - Context API, Reducer, LocalStorage
  - fetch API / async-await
  - 일반 CSS

## ⚙️ Utils

- **icons**: 공통 아이콘 관리
- **regex**: 폼 입력 검증용 정규표현식
- **데이터 포맷 함수**: `deleteFormatFormData`, `formatFormData`, `resetFormatFormData`
- **검증 함수**: `validateContactForm`, `validateDeleteForm`, `validateFindData`, `validateFindIdData`, `validateFindPwData`, `validateResetForm`, `validateUserData`

---

## 🎯 개발 목적 및 계기

- 폼 기반 기능 개발 역량 강화
- 로그인 상태별 데이터 접근 제어 구현
- API 연동과 라우터 중첩 구조 학슴

## 💭 개발하며 느낀 점

- 처음에는 단순 폼 기능만 구현했지만, 실제로 사용해보니 너무 간단하게 가입이 가능하여 조건 검증의 중요성을 느꼈습니다.
- 이후 조건에 맞는 정규표현식을 찾아 적용하며 폼 유효성 검증을 강화했습니다.
- 로그인 상태와 조건에 따른 데이터 접근 제어, 라우터 중첩 구조를 다루며 React Router와 Context 활용 능력을 향상시켰습니다.
- 여러 폼에서 중복되는 로직과 UI 요소를 관리하면서 재사용 가능한 컴포넌트 설계의 중요성을 깨달았습니다.
- 이용자가 불편함 없이 입력할 수 있으면서 개발자가 관리하기 편리한 폼 구조를 설계하는 것이 많은 고민이 필요하다는 점을 느꼈습니다.

## 🔧 개선점 및 향후 계획

- 폼 기능 중 중복되는 로직과 UI 요소를 최대한 재활용 가능한 컴포넌트로 리팩토링
- 이용자가 입력할 때 불편함이 없도록 UX 개선 (자동 포커스, 에러 메시지, 유효성 안내 등)
- 폼 상태 관리 및 데이터 흐름 최적화로 코드 가독성 및 유지보수성 향상
- 반응형 UI 개선 및 접근성 향상

## 📸 프로젝트 데모 및 기타

📸 프로젝트 데모
👉 [https://nonamehj.github.io/form-access-control](\https://nonamehj.github.io/form-access-control)

💻 GitHub 코드
👉 [https://github.com/nonamehj/form-access-control](https://github.com/nonamehj/form-access-control)
