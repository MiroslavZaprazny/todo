import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Precitat knihu',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Vysrat sa',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'no hej',
      isComplete: false,
      isEditing: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4);

  const addTodo = (e) => {
    e.preventDefault();

    // handles the case when user types in nothing
    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput('');
    setIdForTodo((prevIdForTodo) => idForTodo + 1);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const markAsComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const markAsEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map((todo) => {
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
    setTodos(updatedTodos);
  };

  const cancelEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div className="App">
      <div className="bg-white w-100 shadow-md rounded-md mx-auto my-12 px-4 py-6">
        <div className="todo">
          <h3 className="font-semibold text-lg">Todo app</h3>

          <form action="#" onSubmit={addTodo}>
            <input
              type="text"
              value={todoInput}
              onChange={handleInput}
              className="border w-full h-10 rounded-md mt-2 px-3 py-2"
              placeholder="What do you need to do?"
            />
          </form>
          <div className="mt-4 border-b px-3 py-3">
            <ul className="space-y-3">
              {todos.map((todo) => (
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
                          }else if(event.key === 'Escape')
                          {
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
        </div>
      </div>
    </div>
  );
}

export default App;
