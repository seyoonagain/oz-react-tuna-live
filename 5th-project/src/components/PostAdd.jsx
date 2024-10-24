import { useState } from 'react';
import { useAxios } from '../hooks/useAxios';

export default function PostAdd() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');
  const axios = useAxios();
  const createPost = async () => {
    const newPost = { title, body };
    const response = await axios.post('http://localhost:3000/posts', newPost);
    try {
      if (response.status === 200 || response.status === 201) {
        setStatus(response.data.status);
        console.log(response.status);
        console.log(response.data);
      }
      setTitle('');
      setBody('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = () => {
    createPost();
  };
  return (
    <>
      <h1>게시글 작성</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='title'
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='body'
      />
      <button onClick={handleAdd}>추가</button>
    </>
  );
}
