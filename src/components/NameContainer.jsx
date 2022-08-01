import React, { useEffect, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


export default function NameContainer(props) {
  const { todos } = props;
  const [name, setName] = useLocalStorage('name', '')
  const nameInputEl = useRef(null);

  useEffect(() => {
    nameInputEl.current.focus();

    // setName(JSON.parse(localStorage.getItem('name')) ?? '');
  }, []);

  const handleNameInput = (event) => {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value));
  };

  return (
    <div className="name-container mb-6">
      <h3 className="font-semibold text-lg">What is your name</h3>
      <button onClick={() => nameInputEl.current.focus()}>Get Ref</button>
      <form action="#">
        <input
          type="text"
          value={name}
          ref={nameInputEl}
          onChange={handleNameInput}
          className="border w-full h-10 rounded-md mt-2 px-3 py-2"
          placeholder="What is your name?"
        />
      </form>
      {name && <p className="text-center mt-4 text-sm">Hello {name}!</p>}
    </div>
  );
}
