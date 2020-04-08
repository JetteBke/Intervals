import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Intervalle</h1>
        <form className="input-form">
            <label>Interval 1 (sek.)</label>
            <input className="input" type="text" name="intervalOne" />
            <label>Wiederholungen</label>
            <input className="input" type="text" name="intervalOne" />
            <br/>
            <input type="submit" value="Los" onClick={startTimer()}/>
        </form>
    </div>
  );
}

export default App;
