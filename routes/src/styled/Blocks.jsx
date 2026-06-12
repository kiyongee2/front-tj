
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const Block = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 8px;
  cursor: pointer;
`

const Blocks = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (color) => {
    setClicked(color);
  }

  return (
    <div className="blocks">
      <Wrapper>
        <Block 
          color="red" 
          onClick={() => handleClick('red')}
        />
        <Block 
          color="green"
          onClick={() => handleClick('green')}
        />
        <Block 
          color="blue"
          onClick={() => handleClick('blue')}
        />
        {clicked && <p>클릭한 색상: {clicked}</p>}
      </Wrapper>
    </div>
  );
};

export default Blocks;