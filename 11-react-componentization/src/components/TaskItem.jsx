function TaskItem({
  item,
  index,
  editingIndex,
  editingText,
  setEditingText,
  startEdit,
  saveEdit,
  deleteTask,
  toggleTask,
}) {
  return (
    <li>
      {editingIndex === index ? (
        <>
          <input
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
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
  );
}

export default TaskItem;
