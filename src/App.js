import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CreateTournament from './CreateTournament';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
      </Routes>
    </Router>
  );
}

export default App;

