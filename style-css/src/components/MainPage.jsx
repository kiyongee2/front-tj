
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // 화면 전체 높이(viewport height) : 100 * 8 = 800px
  height: 100vh; 
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

/* RoundedButton 컴포넌트는 Button 컴포넌트를  
   상속받아 border-radius를 50px로 설정*/
const RoundedButton = styled(Button)`
  border-radius: 50px;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Title>Hello~ React!</Title>
      <Button>Click Me</Button>
      <RoundedButton>Click Me</RoundedButton>
    </Wrapper>
  );
}

export default MainPage;