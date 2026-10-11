import express from 'express'

const app = express(); // express 앱 생성

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("<h2>Hello, World!</h2>");
});

// 상품 목록
app.get("/api/products", (req, res) => {
  const products = [
    {id:1, name: "무선 마우스", price: 30000},
    {id:2, name: "유선 키보드", price: 20000},
    {id:3, name: "웹캠", price: 50000},
  ]
  res.json(products);  //json 형태로 응답
});

// 요청 본문을 JSON 형태로 파싱하기 위한 미들웨어
app.use(express.json());

// 상품 등록
// postman에서 Body - raw - JSON 선택 후 데이터 전송
app.post("/api/products", (req, res) => {
  console.log(req.body); // { id: 4, name: '모니터', price: 100000 }
  res.send('상품이 등록되었습니다.');
});

// 서버 실행
const PORT = 8000
app.listen(PORT, () => {
  console.log(`서버 실행중... http://localhost:${PORT}`);
});