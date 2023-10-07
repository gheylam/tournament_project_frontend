import React from 'react';
import './App.css';
import {Title, CenterBox, SwitchExample} from './pageCreate';

function App() {
  return [
  (
    <div className="App">
      <h1>Create Tournament</h1>
    </div>
  ),
  (<Title/>),
  (<CenterBox/>),
  (<SwitchExample/>)
  ]
}

export default App;
