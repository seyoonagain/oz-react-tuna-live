import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  return (
    <>
      <p>user: {userId}</p>
      <p>name: {name}</p>
    </>
  );
};

export default User;
