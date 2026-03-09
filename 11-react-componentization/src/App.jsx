import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const pendingTasks = list.filter((task) => !task.completed).length;

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
      <TaskInput task={task} enterTask={enterTask} addTask={addTask} />
      <p>Tareas pendientes: {pendingTasks}</p>
      <TaskList
        list={list}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        startEdit={startEdit}
        saveEdit={saveEdit}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  );
}

export default App;
