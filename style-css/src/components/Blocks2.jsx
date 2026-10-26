
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`

const Block = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 10px;
  cursor: pointer;
`

const Blocks2 = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (color) => {
    setClicked(color);
  }
  
  return(
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
      {clicked && <p style={{color: clicked}}>클릭한 색상: {clicked}</p>}
    </Wrapper>
  )
}

export default Blocks2;