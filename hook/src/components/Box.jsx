
const Box = (props) => {
  const boxStyle = {
    width: '200px',
    border: '1px solid black',
    padding: '20px',
    margin: '10px'
  }

  return (
    <div 
      style={ boxStyle }>
        {props.children}
    </div>
  )
}

export default Box