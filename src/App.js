import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './message'

function App() {
  let [count, setcount] = useState(1)
  let [isMorning, setMorning] = useState(false)
  return (
    <div className="App">
      <header className={`App-header ${isMorning ? 'daylight' : ''}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <h3> {isMorning ? "Good Morning Saad Ali" : "Good Night Saad Ali"}</h3>
        <Message counter={count} />
        <button onClick={() => setcount(++count)}>Increment Counter</button>
        <br />
        <button onClick={() => setMorning(!isMorning)}>Update Day & Night</button>
      </header>
    </div>
  );
}

export default App;
