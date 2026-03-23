
export default function Flower() {
  let flower = '장미';

  function changeFlower() {
    flower = (flower === '장미') ? '개나리' : '장미';
    console.log(flower);
    document.getElementById('name').innerText = flower;
  }

  return (
    <div>
      <h2>꽃 이름 변경</h2>
      <h3 id="name">{flower}</h3>
      <button onClick={changeFlower}>변경</button>
    </div>
  )
}
