
{/*
  카드 형태의 UI를 만들어주는 컴포넌트입니다. 
  props로 children을 받아서, children을 카드 컴포넌트의 
  내용으로 보여줍니다.
*/}
export default function Card({children}){

  return(
    <div className="card">
      { /* 카드 컴포넌트의 모든 내용 */ }
      {children}
    </div>
  )
}

