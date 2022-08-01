import React from 'react';

export default function TodoFiltres(props) {
  const { todos, setTodos, filter, setFilter } = props;

  const clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  };

  return (
    <div className="flex placeholder justify-between items-center text-xs py-4 px-3 text-gray-400">
      <div className="flex space-x-1">
        <button
          onClick={() => setFilter('All')}
          className={`rounded-md py-1 px-2 hover:text-gray-600
            ${filter === 'All' ? 'border' : ''}
          `}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Active')}
          className={`rounded-md py-1 px-2 hover:text-green-600
          ${filter === 'Active' ? 'border border-green-600' : ''}
          `}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('Completed')}
          className={`rounded-md py-1 px-2 hover:text-amber-600
            ${filter === 'Completed' ? 'border border-amber-600' : ''}
          `}
        >
          Completed
        </button>
      </div>
      <div>
        <button
          onClick={clearCompleted}
          className="border rounded-md py-1 px-2 hover:text-gray-700"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
