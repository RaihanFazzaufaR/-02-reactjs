import React, { useState } from 'react';
function TodoItem({ task, index, onDelete}) {
    return (
        <li>
        { task }
        <button onClick={() => onDelete(index)}>Delete</button>
        </li>);
}

function TodoList() {
    const [ tasks, setTasks ] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        };
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);

    };
    return (
        <div>
            <input type="text" placeholder='Add New Task' value={newTask} onChange={handleChange} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} index={index} onDelete={handleDeleteTask}/>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;