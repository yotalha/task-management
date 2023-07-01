import React from 'react';
import TaskItem from '../../molecules/TaskItem/TaskItem';
import './TaskList.css';

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  // Additional props specific to the TaskList component, if any
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} text={task.text} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
