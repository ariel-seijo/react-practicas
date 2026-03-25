import { useState } from "react";

function TaskList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

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

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => id !== task.id));
  };

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <>
      <h1>Task List</h1>

      <input
        type="text"
        value={task}
        onChange={handleTask}
        placeholder="Add a new task"
      />
      <button type="submit" onClick={addTask}>
        Add Task
      </button>

      <ul>
        {taskList.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
