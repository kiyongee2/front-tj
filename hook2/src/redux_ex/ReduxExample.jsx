
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, RESET, ADD_CUSTOM } from './counterStore';

const ReduxExample = () => {
  // Redux Store에서 상태 가져오기
  const count = useSelector(state => state.count);
  
  // dispatch 함수 가져오기
  const dispatch = useDispatch();
  
  return (  
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Redux 예제 (카운터)</h2>
      
      {/* 현재 상태 표시 */}
      <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '20px 0', color: '#0066cc' }}>
        Count: {count}
      </div>

      {/* 버튼들 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => dispatch({ type: INCREMENT })}
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}
        >
          +1
        </button>
        
        <button 
          onClick={() => dispatch({ type: DECREMENT })}
          style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', cursor: 'pointer' }}
        >
          -1
        </button>
        
        <button 
          onClick={() => dispatch({ type: RESET })}
          style={{ padding: '10px 20px', backgroundColor: '#FF9800', color: 'white', cursor: 'pointer' }}
        >
          Reset
        </button>
        
        <button 
          onClick={() => dispatch({ type: ADD_CUSTOM, payload: 5 })}
          style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer' }}
        >
          +5
        </button>
      </div>

      {/* Redux 개념 설명 */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
        <h3>Redux 개념</h3>
        <ul>
          <li><strong>Action:</strong> 상태를 변경하기 위한 객체 (type 필수)</li>
          <li><strong>Reducer:</strong> 이전 상태와 액션을 받아 새로운 상태를 반환</li>
          <li><strong>Dispatch:</strong> 액션을 발생시키는 함수</li>
          <li><strong>useSelector:</strong> Redux Store에서 상태를 가져오기</li>
          <li><strong>useDispatch:</strong> 액션을 dispatch하기</li>
        </ul>
      </div>
    </div>
  );
}

export default ReduxExample;