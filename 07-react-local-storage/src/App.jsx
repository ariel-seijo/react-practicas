import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(() => {
  const saved = localStorage.getItem("count");
  return saved ? parseInt(saved) : 0;
});

  const addCount = () => {
    setCount((prev) => prev + 1);
  }
  
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  
  return (
    <>
      <h1>CONTADOR CON LOCAL STORAGE</h1>
      <button onClick={addCount}>Sumar 1</button>
      <h2>{count}</h2>
    </>
  )
};

export default App
