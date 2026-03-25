function TaskInput({ task, handleTask, addTask }) {
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={handleTask}
        placeholder="Add a new task"
      />
      <button type="submit" onClick={addTask}>
        Add Task
      </button>
    </>
  );
}

export default TaskInput;
