
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

const app = express();
const PORT = 8000;

// multer 설정 - 업로드 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'jsuser',
  password: 'pwjs',
  database: 'jsdb'
});

// MySQL 연결 확인
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL에 연결되었습니다.');
});

// CORS 설정 - 리엑트와 통신하기 위해 필요
app.use(cors({
  origin: 'http://localhost:5173', // 리엑트 앱이 실행되는 주소
}));

// 업로드된 이미지 정적 파일 서빙
app.use('/uploads', express.static('uploads'));

// JSON 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(express.json());

//상품 목록 조회 라우트 설정
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM product2';
  db.query(sql, (err, results) => {
    if (err) {
      // 에러 발생 시 500 상태 코드와 에러 메시지 반환
      console.error('상품 조회 에러:', err);
      res.status(500).send('상품 조회 중 오류가 발생했습니다.');
      return; // 즉시 종료
    }
    res.json(results); // 성공 시 상품 목록을 JSON 형식으로 반환
  });
});

// 상품 등록 라우트 설정 (multer로 파일 업로드 처리)
app.post('/products', upload.single('image'), (req, res) => {
  const { productName, price } = req.body;
  const imageFile = req.file ? `/uploads/${req.file.filename}` : null;
  const sql = 'INSERT INTO product2 (product_name, price, image_file) VALUES (?, ?, ?)';
  
  console.log(req.body, req.file) // 업로드된 파일 정보 로그로 확인
  
  db.query(sql, [productName, price, imageFile], (err, results) => {
    if (err) {
      console.error('상품 등록 에러:', err);
      res.status(500).send('상품 등록 중 오류가 발생했습니다.');
      return;
    }
    res.status(201).send('상품이 성공적으로 등록되었습니다.'); 
  });
});

// 상품 상세 조회 라우트 설정
app.get('/products/:id', (req, res) => {
  const productId = req.params.id; // URL 경로에서 상품 ID 추출
  const sql = 'SELECT * FROM product2 WHERE id = ?';
  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.error('상품 조회 에러:', err);
      res.status(500).send('상품 조회 중 오류가 발생했습니다.');
      return;
    }
    res.json(results[0]);
  });
});

// 상품 삭제 라우트 설정
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id; // URL 경로에서 상품 ID 추출
  const sql = 'DELETE FROM product2 WHERE id = ?';
  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.error('상품 삭제 에러:', err);
      res.status(500).send('상품 삭제 중 오류가 발생했습니다.');
      return;
    }
    res.send('상품이 성공적으로 삭제되었습니다.');
  });
});

// 상품 수정 라우트 설정 (multer로 파일 업로드 처리)
app.put('/products/:id', upload.single('image'), (req, res) => {
  const productId = req.params.id;
  const { productName, price } = req.body;

  if (req.file) {
    // 새 이미지가 업로드된 경우
    const imageFile = `/uploads/${req.file.filename}`;
    const sql = 'UPDATE product2 SET product_name = ?, price = ?, image_file = ? WHERE id = ?';
    db.query(sql, [productName, price, imageFile, productId], (err, results) => {
      if (err) {
        console.error('상품 수정 에러:', err);
        res.status(500).send('상품 수정 중 오류가 발생했습니다.');
        return;
      }
      res.send('상품이 성공적으로 수정되었습니다.');
    });
  } else {
    // 이미지 변경 없이 상품명, 가격만 수정
    const sql = 'UPDATE product2 SET product_name = ?, price = ? WHERE id = ?';
    db.query(sql, [productName, price, productId], (err, results) => {
      if (err) {
        console.error('상품 수정 에러:', err);
        res.status(500).send('상품 수정 중 오류가 발생했습니다.');
        return;
      }
      res.send('상품이 성공적으로 수정되었습니다.');
    });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
