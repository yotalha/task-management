import React, { useState } from 'react';
import TaskList from '../../organisms/TaskList/TaskList';
import TaskForm from '../../organisms/TaskForm/TaskForm';
import AppTemplate from '../../templates/AppTemplate/AppTemplate';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]);

  const handleAddTask = (text: string) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <AppTemplate>
      <div className="home-page">
        <h1>Task Management App</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </div>
    </AppTemplate>
  );
};

export default HomePage;
