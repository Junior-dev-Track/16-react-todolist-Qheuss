import { useState } from 'react';

export default function TodoList() {
  // const typeNewTodo = document.getElementById('typeNewTodo');
  // const sendNewTodo = document.getElementById('sendNewTodo');

  const initialTodos = [
    {
      id: 1,
      name: 'My first todo',
      done: false,
    },
    {
      id: 2,
      name: 'My second todo',
      done: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.name}
            checked={todo.done}
            onChange={() => handleCheck(todo.id)}
          />
          {' "'}
          {todo.name}
          {'"'}
        </li>
      ))}
    </ul>
  );
}
