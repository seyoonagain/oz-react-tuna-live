import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ContentDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const content = queryParams.get('content');
  return (
    <>
      <p>id: {id}</p>
      <p>content: {content}</p>
    </>
  );
};

export default ContentDetail;
