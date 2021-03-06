import React, { useState, useEffect } from 'react';

type Props = {
  count: number;
};

type WeakMap = {
  [k: string]: any;
};

function Component({ count }: Props) {
  return <div className="App">Page has been open for {count} seconds.</div>;
}

export default function Container({ startTime = 0 }) {
  const [count, setCount] = useState(startTime);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return <Component count={count} />;
}
