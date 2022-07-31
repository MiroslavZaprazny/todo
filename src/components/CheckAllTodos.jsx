import React from 'react';

export default function CheckAllTodos(props) {
  const { todos, setTodos} = props;

  const remainingTodos = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const completeAllTodos = () => {
    const todostoUpdate = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(todostoUpdate);
  };

  return (
    <div className="flex justify-between items-center text-xs border-b text-gray-400  px-3 pt-4 pb-3">
      <button
        onClick={completeAllTodos}
        className="border rounded-md py-1 px-2 hover:text-gray-600"
      >
        Check all
      </button>
      <div className="text-sm">
        {remainingTodos() === 1 ? (
          <>{remainingTodos()} todo remaining</>
        ) : (
          <>{remainingTodos()} todos remaining</>
        )}
      </div>
    </div>
  );
}
