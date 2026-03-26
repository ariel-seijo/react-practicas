import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

function TaskList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleTask = (e) => setTask(e.target.value);

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    setTask("");
  };

  const deleteTask = (id) =>
    setTaskList((prev) => prev.filter((task) => task.id !== id));

  const toggleTask = (id) =>
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

  const editTask = (id, newText) => {
    setTaskList((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
    setEditingId(null);
  };

  const filteredTasks =
    filter === "all"
      ? taskList
      : filter === "completed"
        ? taskList.filter((task) => task.completed)
        : taskList.filter((task) => !task.completed);

  const completedCount = taskList.filter((task) => task.completed).length;

  return (
    <>
      <h1>Task List</h1>
      <h2>
        {completedCount}/{taskList.length} tareas completadas
      </h2>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>

      <TaskInput task={task} handleTask={handleTask} addTask={addTask} />

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
