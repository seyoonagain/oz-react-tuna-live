import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: '정세윤',
    age: 100,
    isMarried: false,
  });

  return (
    <>
      <div>이름: {data.name}</div>
      <div>나이: {data.age}세</div>
      {data.isMarried ? <div>기혼</div> : <div>미혼</div>}
    </>
  );
}

export default App;
