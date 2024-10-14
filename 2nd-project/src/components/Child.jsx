import React from 'react';

const Child = ({ name, age, isMarried }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <div>이름: {name}</div>
      <div>나이: {age}세</div>
      {isMarried ? <div>기혼</div> : <div>미혼</div>}
    </div>
  );
};

export default Child;
