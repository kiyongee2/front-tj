
import React, { useState, useEffect } from "react";
import axios from "axios";

// JSONPlaceholder에서 사용자 데이터를 삭제하는 예시
const AxiosDelete = () => {
    
    const handleDelete = () => {
        // JSONPlaceholder API에서 할 일 데이터를 삭제합니다.
        axios.delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => { 
            console.log("삭제된 데이터:", response.data);
            alert("삭제 완료!");
        }) 
        .catch((error) => console.error(error));
    }

    return (
        <div>
          <h2>할 일(To-do) 삭제</h2>
            <span>1번 할 일 </span>
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}

export default AxiosDelete;

