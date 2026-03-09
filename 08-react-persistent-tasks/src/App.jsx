import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task.trim()) return;
    setList((prev) => [...prev, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setList((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

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

export default App;
