
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  background-color: lightgray;
  height: 100vh;
`;

const Block = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 8px;
  cursor: pointer;
`;

const Blocks = () => {
  // 클릭한 블록의 색상을 저장하는 상태
  const [clicked, setClicked] = useState(null);

  const handleClick = (color) => {
    setClicked(color);
  };

  return (
    <Wrapper>
      <Block 
        color="#f00" 
        onClick={() => handleClick('red')}
      />
      <Block 
        color="#0f0" 
        onClick={() => handleClick('green')}
      />
      <Block 
        color="#00f" 
        onClick={() => handleClick('blue')}
      />
      {clicked && <p>클릭한 색상: {clicked}</p>}
    </Wrapper>
  );
}

export default Blocks;