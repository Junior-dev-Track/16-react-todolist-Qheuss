import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList.jsx';
import HowManyTodos from './components/HowManyTodos.jsx';
import Form from './components/Form.jsx';

const LSKEY = 'MyTodoApp';

export default function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  // Add a todo to the state
  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), todo, completed: false }]);
  }

  // Handle checkbox status
  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <section className="header">
        <h1 className="container">My Todo App</h1>
      </section>
      <section className="todoForm container">
        <Form addTodo={addTodo} />
      </section>
      <hr className="container" />
      <section className="todoList container">
        <HowManyTodos />
        <TodoList todos={todos} handleCheck={handleCheck} />
      </section>
    </>
  );
}
