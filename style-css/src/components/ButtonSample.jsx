
import styled from 'styled-components';

const Button = styled.button`
  margin: 20px;

  // props를 이용하여 스타일을 동적으로 변경
  padding: ${props => props.large ? '20px' : '10px'};
  color: ${props => props.primary ? '#f0f' : '#000'};
  
`;

const ButtonSample = () => {
  return (
    <Button large secondary>클릭</Button>
  );
};

export default ButtonSample;

