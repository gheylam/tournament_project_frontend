import React from 'react';
import './App.css';
import {Title, CenterBox} from './pageCreate';

function App() {
  return [
  (
    <div className="App">
      <h1>Create Tournament</h1>
    </div>
  ),
  (<Title/>),
  (<CenterBox/>)
  ]
}

export default App;
