import React from 'react';

export default function TodoList(props) {
  const deleteTodo = (id) => {
    props.setTodos([...props.todos].filter((todo) => todo.id !== id));
  };

  const markAsComplete = (id) => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  const markAsEditing = (id) => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  const cancelEdit = (id) => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  return (
    <>
      <div className="mt-4 border-b px-3 py-3">
        <ul className="space-y-3">
          {props.todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between">
              <div className="flex justify-center align-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => markAsComplete(todo.id)}
                  checked={todo.isComplete ? true : false}
                />
                {!todo.isEditing ? (
                  <span
                    className={`ml-4 text-lg text-gray-900
                      ${todo.isComplete ? 'line-through' : ''}`}
                    onDoubleClick={() => markAsEditing(todo.id)}
                  >
                    {todo.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    onBlur={(event) => updateTodo(event, todo.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        updateTodo(event, todo.id);
                      } else if (event.key === 'Escape') {
                        cancelEdit(todo.id);
                      }
                    }}
                    defaultValue={todo.title}
                    className="border w-full h-10 rounded-md px-3 py-2"
                    autoFocus
                  />
                )}
              </div>
              <div className="flex justify-center items-center mt-2">
                <button onClick={() => deleteTodo(todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center text-xs border-b text-gray-400  px-3 pt-4 pb-3">
        <button className="border rounded-md py-1 px-2 hover:text-gray-600">
          Check all
        </button>
        <div className="text-sm">4 items remaining</div>
      </div>
      <div className="flex placeholder justify-between items-center text-xs py-4 px-3 text-gray-400">
        <div className="flex space-x-1">
          <button className="border rounded-md py-1 px-2 hover:text-gray-600">
            All
          </button>
          <button className="rounded-md py-1 px-2 hover:text-gray-600">
            Active
          </button>
          <button className="rounded-md py-1 px-2 hover:text-gray-600">
            All
          </button>
        </div>
        <div>
          <button className="border rounded-md py-1 px-2 hover:text-gray-600">
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}