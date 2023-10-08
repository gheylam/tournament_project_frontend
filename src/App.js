import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateTournament from './CreateTournament';
import OwnerLobby from './OwnerLobby';
import JoinTournament from './JoinTournament';
import JoinerLobby from './JoinerLobby'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
        <Route path="/owner-lobby/:key" element={<OwnerLobby />} />
        <Route path="/join/:key" element={<JoinTournament />} />
        <Route path="/joiner-lobby/:key" element={<JoinerLobby />} />
      </Routes>
    </Router>
  );
}

export default App;

