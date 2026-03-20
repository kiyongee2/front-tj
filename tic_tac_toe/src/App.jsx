import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// function Square() {
//   const [value, setValue] = useState(null);

//   function handleClick() {
//     // alert('You clicked on square ' + value)
//     setValue('X');
//   }

//   return (
//     <button 
//      className='square' 
//      onClick={handleClick}
//     >
//      {value}
//     </button>
//   )
// }

function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
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

function Board() {
  // xIsNext는 다음 플레이어가 'X'인지 여부를 나타내는 boolean 상태입니다. 
  // 초기값은 true로 설정되어 있습니다.
  const [xIsNext, setXIsNext] = useState(true);
  // squares는 9개의 칸을 나타내는 배열로, 초기값은 모두 null입니다. 
  // 각 칸은 null, 'X', 또는 'O'가 될 수 있습니다.
  const [squares, setSquares] = useState(Array(9).fill(null));

  // handleClick 함수는 사용자가 칸을 클릭할 때 호출됩니다.
  // i는 클릭된 칸의 인덱스입니다.
  function handleClick(i) {
    // 이미 채워진 칸을 클릭하거나 승자가 있으면 return으로 함수 종료
    if(squares[i] || calculateWinner(squares)) { 
      return;
    }
    const nextSquares = squares.slice(); // 배열의 사본
    // nextSquares[i] = 'X';
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares); 
    setXIsNext(!xIsNext);  // xIsNext의 값을 반전
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    // 승자가 존재하는 경우, 승자를 표시하는 문자열을 생성합니다.
    status = 'Winner: ' + winner;
  } else {
    // 다음 플레이어를 표시하는 문자열을 생성합니다. 
    // xIsNext가 true이면 'X'가 다음 플레이어이고, 그렇지 않으면 'O'가 다음 플레이어입니다.
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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
  )
}

export default Board
