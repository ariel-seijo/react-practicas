import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task.trim()) return;
    setList((prev) => [...prev, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setList((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditingText(list[index].text);
  };

  const saveEdit = () => {
    setList((prev) =>
      prev.map((item, index) =>
        index === editingIndex ? { ...item, text: editingText } : item,
      ),
    );

    setEditingIndex(null);
    setEditingText("");
  };

  const toggleTask = (index) => {
    setList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <>
      <h1>LISTA</h1>
      <input value={task} onChange={enterTask}></input>
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                ></input>
                <button onClick={saveEdit}>save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <button onClick={() => startEdit(index)}>edit</button>
                <button onClick={() => deleteTask(index)}>delete</button>
                <button onClick={() => toggleTask(index)}>completar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
