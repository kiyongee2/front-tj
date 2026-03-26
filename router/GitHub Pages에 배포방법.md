# React Todo 앱을 GitHub Pages에 배포하는 방법

## 📋 개요
Vite + React로 만든 Todo 앱을 GitHub Pages에 배포하는 완전한 가이드입니다.

---

## 🚀 1단계: 프로젝트 초기 설정

### 1.1 필수 패키지 설치
```bash
npm install
npm install gh-pages --save-dev
```

### 1.2 프로젝트 구조
```
todo-app/
├── index.html          # entry HTML
├── package.json        # 프로젝트 설정
├── vite.config.js      # Vite 설정
├── src/
│   ├── main.jsx        # React 진입점
│   ├── App.jsx         # 메인 컴포넌트
│   ├── App.css         # 스타일
│   └── components/     # 컴포넌트 폴더
│       ├── AddTodo.jsx
│       ├── TodoList.jsx
│       └── DeleteTodo.jsx
└── dist/               # 빌드 결과 (배포용)
```

---

## 📝 2단계: package.json 설정

### 필수 설정:
```json
{
  "name": "todo-app",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "homepage": "https://username.github.io/repository-name/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "gh-pages": "^6.3.0",
    "vite": "^4.3.9"
  }
}
```

**중요 포인트:**
- `homepage`: GitHub Pages 배포 URL (username과 repository-name 수정 필수)
  - 예: `https://kiyongee2.github.io/my_site/`
- `predeploy`: `npm run deploy` 실행 시 자동으로 빌드
- `deploy`: `dist/` 폴더를 `gh-pages` 브랜치에 푸시

---

## ⚙️ 3단계: vite.config.js 설정

### 필수 설정:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',    // GitHub Pages 경로
  server: {
    port: 5173
  }
})
```

**중요 포인트:**
- `base`: repository 이름으로 설정 (슬래시로 감싸기)
  - 예: `/my_site/` (repository 이름이 `my_site`인 경우)
- `homepage`와 `base`의 경로가 일치해야 함

---

## 🔗 4단계: index.html 설정

### 필수 설정 (상대 경로 사용):
```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>할 일 관리 앱</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- ✅ 상대 경로 사용 (절대 경로 X) -->
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

**⚠️ 주의:**
- ❌ **잘못된 방법**: `src="/src/main.jsx"` (절대 경로)
- ✅ **올바른 방법**: `src="./src/main.jsx"` (상대 경로)

---

## 💻 5단계: 로컬 테스트

### 개발 서버 실행:
```bash
npm run dev
```
- http://localhost:5173 에서 접속
- 실시간 핫 리로드 제공

### 프로덕션 빌드 테스트:
```bash
npm run build
npm run preview
```
- `dist/` 폴더가 생성됨
- 빌드 결과를 테스트할 수 있음

---

## 🌐 6단계: GitHub 저장소 설정

### 6.1 원격 저장소 추가:
```bash
git remote add origin https://github.com/username/repository-name.git
```

### 6.2 GitHub Pages 활성화:
1. GitHub 저장소 접속
2. **Settings** → **Pages**
3. **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**를 선택
   - Folder: **/ (root)** 선택 ✅ (gh-pages 브랜치의 루트 폴더)
4. Save

**이유:** `npm run deploy` 실행 시 `dist/` 폴더의 내용이 gh-pages 브랜치의 루트에 직접 배포되므로, **root 폴더**를 선택해야 합니다.

---

## 📤 7단계: 배포하기

### 배포 명령어:
```bash
npm run deploy
```

**자동 실행 순서:**
1. `npm run build` - 코드 최적화 후 `dist/` 생성
2. `gh-pages -d dist` - `dist/` 폴더를 `gh-pages` 브랜치에 푸시

### 소스 코드도 GitHub에 저장 (선택):
```bash
git add .
git commit -m "할 일 관리 앱 배포"
git push origin main
```

---

## ✅ 8단계: 배포 확인

### 웹사이트 접속:
- URL: `https://username.github.io/repository-name/`
- 예: `https://kiyongee2.github.io/my_site/`

### GitHub 저장소 확인:
1. GitHub 저장소 접속
2. **Branches** 탭에서 `gh-pages` 브랜치 확인
3. 최근 푸시 시간 확인

---

## 🐛 트러블슈팅

### 문제 1: "404 Not Found" 에러

**원인:** `index.html`의 script 경로가 잘못됨

**해결책:**
```html
<!-- ❌ 틀린 방법 -->
<script src="/my_site/src/main.jsx"></script>

<!-- ✅ 올바른 방법 -->
<script src="./src/main.jsx"></script>
```

---

### 문제 2: 빌드 실패

**원인:** `vite.config.js`의 `base` 경로가 잘못됨

**해결책:**
```javascript
// ❌ 틀린 방법
base: '/todos/',  // repository 이름이 my_site인데 /todos/로 설정

// ✅ 올바른 방법
base: '/my_site/',  // repository 이름과 일치
```

---

### 문제 3: 화면이 비어있음

**체크리스트:**
- [ ] `package.json`의 `homepage` URL이 올바른가?
- [ ] `vite.config.js`의 `base` 경로가 올바른가?
- [ ] `index.html`의 script src가 상대 경로인가?
- [ ] `npm run deploy` 명령어를 실행했는가?
- [ ] GitHub Pages가 `gh-pages` 브랜치에서 배포되도록 설정되었는가?

---

## 📋 배포 체크리스트

```
□ Node.js 설치 확인
□ package.json 설정 (homepage, scripts)
□ vite.config.js 설정 (base)
□ index.html 설정 (script 경로)
□ gh-pages 패키지 설치
□ npm run dev로 로컬 테스트
□ npm run build로 빌드 테스트
□ git push origin main (선택)
□ npm run deploy로 배포
□ GitHub Pages 브랜치 설정 (gh-pages)
□ https://username.github.io/repository-name/ 접속 확인
□ 웹사이트 정상 작동 확인
```

---

## 🔄 업데이트 시 배포

코드 수정 후 다시 배포:

```bash
# 1. 로컬 변경사항 커밋 & 푸시 (선택)
git add .
git commit -m "변경사항 설명"
git push origin main

# 2. 배포
npm run deploy
```

---

## 📚 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [GitHub Pages 공식 문서](https://pages.github.com/)
- [gh-pages npm 패키지](https://www.npmjs.com/package/gh-pages)

---

**작성일**: 2026년 3월 19일
