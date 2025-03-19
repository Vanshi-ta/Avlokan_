import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const TaskBoard = ({ tasks, updateTask, deleteTask, reorderTasks }) => {
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedTasks = Array.from(tasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        reorderTasks(reorderedTasks);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="task-board">
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                {(provided) => (
                                    <Task
                                        task={task}
                                        provided={provided}
                                        updateTask={updateTask}
                                        deleteTask={deleteTask}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskBoard;
