import { useState } from 'react';
import './App.css';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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

  return (
    <div className="App">
      <div className="bg-white w-100 shadow-md rounded-md mx-auto my-12 px-4 py-6">
        <div className="todo">
          <h3 className="font-semibold text-lg">Todo app</h3>

         <TodoForm 
          todos={todos}
          setTodos={setTodos}
         />
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              setTodos={setTodos}
             />
          ) : (
           <NoTodos />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
