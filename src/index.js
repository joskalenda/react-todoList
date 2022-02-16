// import react from "react";
import React from 'react';
import reactDom from 'react-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

const ROOT = document.getElementById('root');
reactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  ROOT,
);
