import './App.css';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NameContainer from './components/NameContainer';
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  return (
    <div className="App">
      <div className="bg-white w-100 shadow-md rounded-md mx-auto my-12 px-4 py-6">
        <div className="todo">
          {/* <NameContainer todos={todos} /> */}
          <h3 className="font-semibold text-lg">Todo app</h3>

          <TodoForm todos={todos} setTodos={setTodos} />
          {todos.length > 0 ? (
            <TodoList todos={todos} setTodos={setTodos} />
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
