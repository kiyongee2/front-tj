import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  padding: 8px 16px;
  font-size: 1em;

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  ${props => props.primary && `
      color: white;
      background-color: purple;
    `}
`


const ButtonSample = () => {

  return(
    <div>
      <Button> 기본 버튼</Button>
      <Button color='green' backgroundColor='yellow'> 녹색 버튼</Button>
      <Button primary>보라 버튼</Button>
    </div>
  )
}

export default ButtonSample;