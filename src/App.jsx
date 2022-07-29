import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Another from './component';

function App() {
  const [count, setCount] = useState(0);
 
  const increment =  () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Another name="Mirek"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <span>
            {count}
          </span>
          <button onClick={increment}>
            +
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
