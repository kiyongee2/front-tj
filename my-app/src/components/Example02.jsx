
const Example02 = () => {
  // 리스트 랜더링
  const items = ['사과', '바나나', '체리'];

  return (
    <div>
      <h2>Example 02</h2>
      {/* 리스트 랜더링 */}
      <ul>
        {items.map((item, index) => (
          // key prop을 사용하여 각 항목에 고유한 키를 부여합니다.
          // 리스트가 동적으로 변할 가능성이 있으면 필수
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Example02

