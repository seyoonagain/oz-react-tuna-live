import React, { useState } from 'react';

const Project = () => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([username, userAge]);
  };
  return (
    <div>
      <img src='/IMG_3477.JPG' alt='image' width='300' />
      <form>
        <p>이름</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder='이름을 입력하세요.'
        />
        <p>나이</p>
        <input
          onChange={(e) => setUserAge(e.target.value)}
          value={userAge}
          placeholder='나이를 입력하세요.'
        />
        <button onClick={handleSubmit}>사용자 추가</button>
      </form>
    </div>
  );
};

export default Project;
