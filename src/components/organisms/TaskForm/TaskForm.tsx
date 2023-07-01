import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
  onAddTask: (text: string) => void;
  // Additional props specific to the TaskForm component, if any
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
