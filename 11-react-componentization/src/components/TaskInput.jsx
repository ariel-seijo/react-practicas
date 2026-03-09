function TaskInput({ task, enterTask, addTask }) {
  return (
    <>
      <input
        value={task}
        onChange={enterTask}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Nueva tarea"
      />

      <button onClick={addTask}>Agregar tarea</button>
    </>
  );
}

export default TaskInput;
