import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodosContext';

function App() {
  return (
    <div className="App">
      <Container className="mt-4">
        <h1>Todo List</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
