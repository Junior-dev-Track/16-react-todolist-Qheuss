// import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import HowManyTodos from './components/HowManyTodos.jsx';

export default function App() {
  return (
    <>
      <section className="header">
        <h1 className="container">My Todo App</h1>
      </section>
      <section className="container">
        <input id="typeNewTodo" placeholder="Type a new todo" type="text" />
        <button id="sendNewTodo" type="submit">
          Add Todo
        </button>
      </section>
      <hr className="container" />
      <section className="container">
        <HowManyTodos />
        <TodoList />
      </section>
    </>
  );
}
