import { useEffect, useState } from "react";
import axios from "axios";

export default function Notice() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        setPosts(res.data);
      } catch (err) {
        setError("데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p className="error">{error}</p>;

  const filtered = posts.filter((post) => post.title.includes(keyword));

  return (
    <section>
      <h2>공지사항</h2>
      <input
        type="text"
        placeholder="제목 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p>{filtered.length}건</p>
      <ul>
        {filtered.map((post) => (
          <li key={post.id}>{post.id}. {post.title}</li>
        ))}
      </ul>
    </section>
  );
}
