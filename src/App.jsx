// import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import HowManyTodos from './components/HowManyTodos.jsx';

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section className="header">
        <h1 className="container">My Todo App</h1>
      </section>
      <section className="container">
        {/* <h2 onClick={() => setCount((count) => count + 1)}>
          There are {count} todos that needs to be done
        </h2> */}
        <input placeholder="Type a new todo" type="text" />
        <button type="submit">Add Todo</button>
      </section>
      <hr className="container" />
      <section className="container">
        <HowManyTodos />
        <TodoList />
      </section>
    </>
  );
}
