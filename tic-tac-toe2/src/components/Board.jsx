
import { useState } from 'react';

function Square({value, onClick}) {

  return (
    <button 
      className="square" 
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  // 승리 조건을 정의하는 배열입니다. 각 요소는 세 개의 인덱스로 구성되어 있으며,
  // 이 인덱스들은 squares 배열에서 같은 값이 있는지 확인하는 데 사용됩니다.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // a, b, c에 각각 lines[i]의 요소를 할당
    // squares[a]가 null이 아니고, squares[a], squares[b], squares[c]가 
    // 모두 같은 값인 경우 승자가 존재한다고 판단하여 해당 값을 반환합니다.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
     // 이미 채워진 칸을 클릭하거나 승자가 있으면 return으로 함수 종료
    if(squares[i] || calculateWinner(squares)) { 
      return;
    }
    const nextSquares = squares.slice(); // copy array

    // nextSquares[i] = 'X';
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);  // update state
    setXIsNext(!xIsNext); // toggle player
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />  
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <button 
        className='reset'
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXIsNext(true);
        }}>
        다시 시작
      </button>
    </>
  );
}
