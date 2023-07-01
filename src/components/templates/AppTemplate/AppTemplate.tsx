import React from 'react';
import './AppTemplate.css';

interface AppTemplateProps {
  children: React.ReactNode;
  // Additional props specific to the AppTemplate component, if any
}
    
const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
  return <div className="app-template">{children}</div>;
};

export default AppTemplate;
