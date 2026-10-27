# SPACE SHOP — React 쇼핑몰 예제 프로젝트 정리

React 19 + Vite 기반의 간단한 쇼핑몰 SPA입니다. 상품 목록·상세 조회, 장바구니(전역 상태 + localStorage 저장), 외부 API를 이용한 공지사항 조회/검색 기능을 포함합니다.

## 1. 기술 스택

| 구분 | 사용 기술 | 버전 |
|---|---|---|
| UI 라이브러리 | React / React DOM | ^19.2.8 |
| 라우팅 | react-router-dom | ^7.18.4 |
| HTTP 클라이언트 | axios | ^1.20.0 |
| 빌드 도구 | Vite (+ @vitejs/plugin-react) | ^8.3.0 |
| 린터 | oxlint | ^1.81.0 |

## 2. 실행 방법

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 실행 (Vite)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # oxlint 검사
```

## 3. 폴더 구조

```
react-exam-ok/
├── index.html               # 진입 HTML (#root)
├── vite.config.js           # Vite 설정 (React 플러그인)
├── package.json
├── public/                  # 정적 파일 (favicon 등)
└── src/
    ├── main.jsx             # React 루트 렌더링 (StrictMode)
    ├── App.jsx              # Provider·Router·라우트 정의
    ├── App.css              # 전역 스타일 + 반응형(768px)
    ├── components/
    │   ├── Header.jsx       # 로고·내비게이션·장바구니 수량 표시
    │   └── ProductCard.jsx  # 상품 카드 (상세 링크, 담기 버튼)
    ├── context/
    │   └── CartContext.jsx  # 장바구니 전역 상태 (Context + useReducer)
    ├── data/
    │   └── products.js      # 상품 데이터 6건 (정적)
    └── pages/
        ├── ProductList.jsx  # 상품 목록
        ├── ProductDetail.jsx# 상품 상세
        ├── CartPage.jsx     # 장바구니
        ├── Notice.jsx       # 공지사항 (axios + 검색)
        └── NotFound.jsx     # 404 페이지
```

## 4. 컴포넌트 구조

```
<CartProvider>                 장바구니 전역 상태 제공
  <BrowserRouter>
    <Header />                 모든 페이지 공통
    <main>
      <Routes> ... </Routes>   경로별 페이지
    </main>
  </BrowserRouter>
</CartProvider>
```

## 5. 라우팅

| 경로 | 컴포넌트 | 설명 |
|---|---|---|
| `/` | `ProductList` | 전체 상품 카드 목록 |
| `/product/:id` | `ProductDetail` | `useParams`로 id를 받아 상품 상세 표시 |
| `/cart` | `CartPage` | 장바구니 목록·수량 변경·총액 |
| `/notice` | `Notice` | 외부 API 공지사항 목록 + 제목 검색 |
| `*` | `NotFound` | 정의되지 않은 경로 → 404 |

## 6. 주요 기능

### 6.1 상품 목록 / 상세
- `src/data/products.js`의 정적 배열(6개 상품: id, name, category, price, desc)을 사용합니다.
- **ProductList**: `products.map()`으로 `ProductCard`를 렌더링합니다.
- **ProductCard**: 카테고리·상품명(상세 링크)·가격(`toLocaleString()`)을 표시하고, `담기` 버튼으로 장바구니에 추가합니다.
- **ProductDetail**
  - URL 파라미터 `id`를 `Number(id)`로 변환해 상품을 찾습니다.
  - 상품이 없으면 "상품을 찾을 수 없습니다." 메시지와 `목록으로` 버튼을 표시합니다.
  - `장바구니 담기`, `뒤로가기`(`navigate(-1)`) 버튼을 제공합니다.

### 6.2 장바구니 (CartContext)
`createContext` + `useReducer`로 전역 상태를 관리하고, `useCart()` 커스텀 훅으로 사용합니다.

**리듀서 액션**

| 액션 | payload | 동작 |
|---|---|---|
| `ADD` | `product` | 이미 있으면 qty +1, 없으면 `qty: 1`로 추가 |
| `INCREASE` | `id` | 해당 상품 qty +1 |
| `DECREASE` | `id` | qty −1, 0이 되면 목록에서 제거 |
| `REMOVE` | `id` | 해당 상품 삭제 |
| `CLEAR` | — | 장바구니 비우기 |

**제공 값**: `cart`, `dispatch`, `totalCount`(전체 수량 합), `totalPrice`(가격×수량 합)

**localStorage 연동**
- 초기화: `useReducer(cartReducer, [], loadCart)` — 지연 초기화 함수로 `localStorage`의 `"cart"` 값을 읽음 (파싱 실패 시 빈 배열)
- 저장: `useEffect`로 `cart`가 바뀔 때마다 `localStorage`에 저장 → 새로고침해도 장바구니 유지

**사용처**
- `Header`: `totalCount`를 "장바구니 (n)"으로 표시
- `ProductCard`, `ProductDetail`: `ADD` 디스패치
- `CartPage`: 목록 출력, `DECREASE`/`INCREASE`/`REMOVE`/`CLEAR`, 총액 표시, 비어 있을 때 안내 문구

### 6.3 공지사항 (Notice)
- `useEffect` + `async/await` + `axios.get()`으로 `https://jsonplaceholder.typicode.com/posts?_limit=10`에서 게시글 10건을 가져옵니다.
- `loading` / `error` / `posts` 세 가지 상태로 로딩 중·에러·정상 화면을 분기합니다 (`try / catch / finally`).
- 검색창(제어 컴포넌트)에 입력한 `keyword`로 제목을 `includes()` 필터링하고, 결과 건수를 표시합니다.

## 7. 스타일 (App.css)
- 전역 리셋(`*`), 헤더(`.header`) 레이아웃, 상품 카드 그리드(`.product-list`, `.card`)
- 카테고리 뱃지(`.category`), 가격(`.price`), 장바구니 행(`.cart li`), 총액(`.total`), 에러 문구(`.error`)
- `@media (max-width: 768px)` 반응형 처리

## 8. 학습 포인트 요약

| 주제 | 적용 위치 |
|---|---|
| 컴포넌트 분리 & props 전달 | `ProductList` → `ProductCard` |
| 리스트 렌더링 & key | 상품 목록, 장바구니, 공지사항 |
| 클라이언트 라우팅 (`Link`, `useParams`, `useNavigate`, 404) | `App.jsx`, `ProductDetail`, `NotFound` |
| 전역 상태 관리 (Context API + useReducer) | `CartContext.jsx` |
| 불변성 유지 업데이트 (`map`, `filter`, spread) | `cartReducer` |
| 부수 효과 & 영속화 (`useEffect` + localStorage) | `CartContext.jsx` |
| 비동기 데이터 요청 & 로딩/에러 처리 | `Notice.jsx` |
| 제어 컴포넌트 & 파생 데이터(검색 필터) | `Notice.jsx` |
| 반응형 CSS | `App.css` |

## 9. 참고 / 개선 가능 사항
- 공지사항 검색은 `includes()` 기반이라 **대소문자를 구분**합니다. (`toLowerCase()` 적용 시 개선 가능)
- 상품 데이터는 정적 배열이므로, 실제 서비스라면 API 연동으로 교체가 필요합니다.
- `README.md`는 Vite 기본 템플릿 내용 그대로입니다.
