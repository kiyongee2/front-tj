const MyComponent = (props) => {
  const {name, children} = props;
  return(
    <div className="mycomp">
      <h2>나의 새롭고 멋진 컴포넌트</h2>
      <h3>
        안녕하세요, 내 이름은 {name}입니다.<br />
        children 값는 {children}입니다.
      </h3>
    </div>
  )
}

MyComponent.defaultProps = {
  name: '기본 이름'
}

export default MyComponent;