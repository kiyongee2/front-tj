
import styled from 'styled-components';

const DynamicButton = styled.button`
  // props를 이용하여 스타일을 동적으로 변경
  padding: ${props => props.large ? '20px' : '10px'};
  color: ${props => props.primary ? '#f0f' : '#000'};
  
`;

const ButtonSample2 = () => {
  return (
    <>
      <DynamicButton large secondary>클릭</DynamicButton>
    </>
  );
};

export default ButtonSample2;

