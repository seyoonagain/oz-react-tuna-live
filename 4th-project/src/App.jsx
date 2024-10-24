import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const memo = useMemo(() => {
    console.log('mount될 때, count 누를 때마다 useMemo 실행');
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]);
  const [countMemo, setCountMemo] = useState(memo);
  const ref = useRef(0);
  const [countRef, setCountRef] = useState(ref.current);

  useEffect(() => {
    console.log('깨우지 말 것');
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        count + 1 하면서 count값이 바뀌니까 useMemo 계속 실행 + 리렌더링 되면서
        countRef 값도 같이 렌더링
      </button>
      <p>useMemo로 count까지의 합 세는 중: {countMemo}</p>
      <button onClick={() => setCountMemo(memo)}>
        이거 누를 땐 useMemo 실행 안하고 이전 count 상태 업데이트 때 실행한
        useMemo에 저장된 값 가져오기
      </button>
      <p>countRef는 count 상태 업데이트되도 초기값으로 안바뀜: {countRef}</p>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        countRef + 1
      </button>
      <button onClick={() => setCountRef(ref.current)}>
        countRef 업데이트 렌더링
      </button>
    </>
  );
}

export default App;
