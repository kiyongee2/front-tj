import React, { useState } from "react";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";

    setBoard(newBoard);
    setIsX(!isX);
  };

  const winner = calculateWinner(board);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>틱택토 게임</h1>
      <h2>
        {winner
          ? `승자: ${winner}`
          : `현재 턴: ${isX ? "X" : "O"}`}
      </h2>

      <div style={styles.board}>
        {board.map((value, i) => (
          <button
            key={i}
            style={styles.square}
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>

      <button onClick={() => setBoard(Array(9).fill(null))}>
        다시 시작
      </button>
    </div>
  );
}

// 승리 조건 체크 함수
function calculateWinner(board) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    justifyContent: "center",
    gap: "5px",
    margin: "20px",
  },
  square: {
    width: "100px",
    height: "100px",
    fontSize: "30px",
  },
};
