import React, { useState } from 'react';

const Task = ({ task, provided, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const saveTask = () => {
        updateTask({ ...task, title, description });
        setIsEditing(false);
    };

    return (
        <div className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button onClick={saveTask}>Save</button>
                </>
            ) : (
                <>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Task;
