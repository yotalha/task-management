import React from 'react';
import './TaskItem.css';

interface TaskItemProps {
  text: string;
  completed: boolean;
  // Additional props specific to the TaskItem component, if any
}

const TaskItem: React.FC<TaskItemProps> = ({ text, completed }) => {
  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} readOnly />
      <span className="task-text">{text}</span>
    </div>
  );
};

export default TaskItem;
