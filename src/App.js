import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateTournament from './CreateTournament';
import Lobby from './Lobby';
import JoinTournament from './JoinTournament';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
        <Route path="/lobby/:key" element={<Lobby />} />
        <Route path="/join/:key" element={<JoinTournament />} />
        
      </Routes>
    </Router>
  );
}

export default App;

