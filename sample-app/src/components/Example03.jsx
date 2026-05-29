
const Example03 = () => {
  const handleMyAbs = (x) => {
    if(x < 0){
      console.log(-x);
    }else{
      console.log(x);
    }
  }

  return(
    <div>
      <h2>이벤트 핸들러</h2>
      <button 
        onClick={() => handleMyAbs(-5)}
      >
        절대값
      </button>
    </div>
  )
}

export default Example03;