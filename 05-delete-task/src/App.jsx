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

  const deleteTask = (indexToDelete) => {
    setList((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <h1>LISTA DE TAREAS</h1>
      <input value={task} onChange={enterTask}></input>
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
