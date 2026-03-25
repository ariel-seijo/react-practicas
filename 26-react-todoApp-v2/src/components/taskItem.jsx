function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
}

export default TaskItem;
