import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef();

  function handleSubmit(e) {
    const inputElement = inputRef.current;
    e.preventDefault();

    // Do something with inputElement...
    console.log(inputElement.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Write a new todo"
        ref={inputRef}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
