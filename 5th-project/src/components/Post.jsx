import { useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const axios = useAxios();
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </div>
    </>
  );
}
