import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onIncrement }) => {
  console.log('Child rendered');
  return <button onClick={onIncrement}>Increment Count</button>;
});

const Practise = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Theme: {theme}</h2>

      <button
        onClick={() =>
          setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        Change Theme
      </button>

      <Child onIncrement={increment} />
    </div>
  );
};

export default Practise;