import React, { useState, useEffect } from 'react';

type Props = {
  count: number;
};

function Component({ count }: Props) {
  return <div>{count}</div>;
}

export default function Container({ startTime = 0 }) {
  const [count, setCount] = useState(startTime);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return <Component count={count} />;
}
