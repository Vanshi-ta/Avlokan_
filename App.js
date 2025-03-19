import React, { useState, useEffect } from 'react';
import TaskBoard from './TaskBoard';
import TaskForm from './TaskForm';
import { loadTasks, saveTasks } from './taskStorage';

const App = () => {
    const [tasks, setTasks] = useState(loadTasks());
  
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };
  
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const reorderTasks = (newTasks) => {
        setTasks(newTasks);
    };
  
    return (
        <div className="app">
            <h1>Task Management Application</h1>
            <TaskForm addTask={addTask} />
            <TaskBoard tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} reorderTasks={reorderTasks} />
        </div>
    );
};
export default App;
