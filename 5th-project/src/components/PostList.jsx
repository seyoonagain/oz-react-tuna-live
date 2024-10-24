import { useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const axios = useAxios();
  const fetchPosts = async () => {
    try {
      const response = await axios.get('posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`posts/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </>
  );
}
