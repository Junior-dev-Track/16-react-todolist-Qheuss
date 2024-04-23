// import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import HowManyTodos from './components/HowManyTodos.jsx';
import Form from './components/Form.jsx';

export default function App() {
  return (
    <>
      <section className="header">
        <h1 className="container">My Todo App</h1>
      </section>
      <section className="todoForm container">
        <Form />
      </section>
      <hr className="container" />
      <section className="todoList container">
        <HowManyTodos />
        <TodoList />
      </section>
    </>
  );
}
