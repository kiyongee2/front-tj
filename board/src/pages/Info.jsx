
const nation = {
  name: "대한민국",
  population: 50000000,
  capital: "서울",
  language: "한국어"
}

const nations = [{
    name: "베트남",  
    population: 90000000,
    capital: "호치민",
    language: "베트남어"
},
{
  name: "미국",
  population: 300000000,
  capital: "워싱턴DC",
  language: "영어"
},
{
  name: "중국",
  population: 1300000000,
  capital: "뻬이징",
  language: "중국어"
}]

const Info = () => {
  return(
    <div className="info-page page">
      <h2>Info.jsx</h2>
      <p>{nation.name}, {nation.population}, {nation.capital}, {nation.language}</p>
      {/* 반복문 <p>태크 없으면 에러발생. 주의: 소괄호 사용 map(n => ()) */}
      {nations.map(n => (
        <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>
      ))}
    </div>
  );
}
export default Info;