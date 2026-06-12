
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Title = styled.h1`
  margin: 20px;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
`

const MainPage = () => {

  return(
    <Wrapper>
      <Title>Hello~ React</Title>
      <Button>Click Me</Button>
    </Wrapper>
  )
}

export default MainPage;