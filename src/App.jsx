import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-white w-100 shadow-md rounded-md mx-auto my-12 px-4 py-6">
        <div className="todo ">
          <h3 className="font-semibold text-lg">Todo app</h3>

          <form action="#">
            <input
              type="text"
              className="border w-full h-10 rounded-md mt-2 px-3 py-2"
              placeholder="What do you need to do?"
            />
          </form>
          <div className="mt-4 border-b px-3 py-3">
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <div>
                  <input type="checkbox" />
                  <span className="ml-4 text-lg text-gray-900">
                    Finish a book
                  </span>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
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
