import React from 'react';
import './App.css';
import TodoList from './todo-list/TodoList';
import TitleSheet from './TitleSheet';

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleSheet />
      <TodoList />
    </div>
  );
}

export default App;
