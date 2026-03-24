import { useState } from 'react';

function TaskList() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleTask = (e) => {
        setTask([e.target.value]);
    };

    const addTask = () => {
        setTaskList((prev) => [...prev, task]);
        setTask("");
    }

    const deleteTask = (index) => {
        setTaskList((prev) => prev.filter((_, i) => i !== index));
    }

    return(
        <>
            <h1>Task List</h1>

                <input type="text" value={task} onChange={handleTask} placeholder='Add a new task' />
                <button type="submit" onClick={addTask}>Add Task</button>

            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList;