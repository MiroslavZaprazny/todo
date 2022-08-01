import React, { useState } from 'react';
import CheckAllTodos from './CheckAllTodos';
import TodoFiltres from './TodoFilters';

export default function TodoList(props) {
  const [filter, setFilter] = useState('All');

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

  const todosFilter = (filter) => {
    if (filter === 'All') {
      return props.todos;
    } else if (filter === 'Active') {
      return props.todos.filter((todo) => !todo.isComplete);
    } else if (filter === 'Completed') {
      return props.todos.filter((todo) => todo.isComplete);
    }
  };

  return (
    <>
      <div className="mt-4 border-b px-3 py-3">
        <ul className="space-y-3">
          {todosFilter(filter).map((todo) => (
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

      <CheckAllTodos 
        todos={props.todos} 
        setTodos={props.setTodos} />
      
      <TodoFiltres
        todos={props.todos}
        setTodos={props.setTodos}
        filter={filter}
        setFilter={setFilter}
      />

    </>
  );
}
