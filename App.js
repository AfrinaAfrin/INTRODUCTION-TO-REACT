import React from 'react';
import './App.css';

function App() {
  // Hardcoded list of items
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div className="App">
      <h1>List of Technologies</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
