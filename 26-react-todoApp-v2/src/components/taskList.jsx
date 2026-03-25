import { useState } from "react";
import TaskItem from "./taskItem";
import TaskInput from "./taskInput";

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
      <TaskInput task={task} handleTask={handleTask} addTask={addTask} />
      <ul>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
