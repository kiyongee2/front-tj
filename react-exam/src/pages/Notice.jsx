import axios from 'axios'
import { useEffect, useState } from 'react';

const Notice = () => {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        setPosts(res.data);
      }catch(error){
        console.error("데이터를 불러오지 못했습니다.", error);
      }
    }
    fetchPosts();
  },[])

  const filtered = posts.filter((post) => 
            post.title.includes(keyword));

  return(
    <div className="notice">
      <h2>공지 사항</h2>
      <input
        type="text"
        className="search"
        placeholder="제목 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p>{filtered.length}건</p>
      <ul className="notice-list">
        {filtered.map(post => (
          <li key={post.id}>
            <span className="notice-id">{post.id}.</span>
            <span className="notice-title">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notice;