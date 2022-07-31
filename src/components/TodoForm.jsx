import React, { useState } from 'react';

export default function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');

  const [idForTodo, setIdForTodo] = useState(4);

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // handles the case when user types in nothing
    if (todoInput.trim().length === 0) {
      return;
    }

    props.setTodos([
      ...props.todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => idForTodo + 1);
    setTodoInput('');
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="border w-full h-10 rounded-md mt-2 px-3 py-2"
        placeholder="What do you need to do?"
      />
    </form>
  );
}
