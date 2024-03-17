import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
     <TodoHeader/>
     <TodoList/>
     <Form/>
    </div>
  );
}

export default App;
