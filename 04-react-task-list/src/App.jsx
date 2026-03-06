import { useState } from "react";
import "./App.css";
export default App;

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setList((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <>
      <h1>LISTA DE TAREAS</h1>
      <input value={task} onChange={enterTask}></input>
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
