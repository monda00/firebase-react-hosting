import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Table } from 'reactstrap';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <Container className="mt-4">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr key={index}>
                  <th className="text-left" style={{ textDecoration: todo.complete ? "line-through" : ""}}>
                    {todo.text}
                  </th>
                  <td className="text-right">
                    <Button
                      color={todo.complete ? "secondary" : "success"}
                      className="mr-2"
                      onClick={() => completeTodo(index)}>
                        {todo.complete ? "完了" : "未完了" }
                    </Button>
                    <Button color="danger" onClick={() => removeTodo(index)}>削除</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
