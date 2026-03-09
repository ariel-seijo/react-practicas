import TaskItem from "./TaskItem";

function TaskList({
  list,
  editingIndex,
  editingText,
  setEditingText,
  startEdit,
  saveEdit,
  deleteTask,
  toggleTask,
}) {
  return (
    <ul>
      {list.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          index={index}
          editingIndex={editingIndex}
          editingText={editingText}
          setEditingText={setEditingText}
          startEdit={startEdit}
          saveEdit={saveEdit}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
