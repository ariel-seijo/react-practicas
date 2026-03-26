import { useState, useEffect } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleTask,
  editingId,
  setEditingId,
  editTask,
}) {
  const [editText, setEditText] = useState(task.text);

  // Sincroniza el input cuando entras en edición o cambia la tarea
  useEffect(() => {
    if (editingId === task.id) {
      setEditText(task.text);
    }
  }, [editingId, task.text, task.id]);

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {editingId === task.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") editTask(task.id, editText);
              if (e.key === "Escape") setEditingId(null);
            }}
            autoFocus
          />
          <button onClick={() => editTask(task.id, editText)}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setEditingId(task.id)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
}

export default TaskItem;
