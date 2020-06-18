
import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [toDoList, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();

  const handleChanges = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h1>To Do Application Using React</h1>
      <TodoForm 
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
      <TodoList 
        toDoList={toDoList} 
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;