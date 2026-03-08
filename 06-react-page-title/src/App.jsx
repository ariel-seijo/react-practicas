import { useEffect, useState } from 'react'
import './App.css'
export default App

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  }
  
  useEffect(() => {
    document.title = `Contador: ${count}`}, 
    [count]);

  return (
    <>
      <h1>CONTADOR: </h1>
      <button onClick={addCount}>Aumentar contador</button>
      <h2>{count}</h2>
    </>
  )
}

