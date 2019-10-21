import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './Counter/Counter';
import GroupCounter from './GroupCounter/GroupCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GroupCounter defaultCounts={3}/>
      </header>
    </div>
  );
}

export default App;
