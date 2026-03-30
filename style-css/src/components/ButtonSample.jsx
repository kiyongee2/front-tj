
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5; // 버튼의 높이를 텍스트의 높이에 맞게 조정

  // props를 이용하여 스타일을 동적으로 변경
  color: ${props => props.color || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};

  // primary prop이 true일 때 추가 스타일 적용
  ${props => props.primary && `
    color: white;
    background-color: purple;
  `}
`;

const ButtonSample = () => {
  return (
    <>
      <Button>기본 버튼</Button>
      {/* props를 이용하여 스타일을 동적으로 변경 */}
      <Button color="green" backgroundColor="yellow">
        녹색 버튼
      </Button>
      {/* primary prop이 true일 때 추가 스타일 적용 */}
      <Button primary>보라 버튼</Button>
    </>
  );
};

export default ButtonSample;

  