
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function TournamentBracket() {
    const currentURL = window.location.pathname;
    const parts = currentURL.split('/');
    const tournamentKey = (parts[parts.length - 1]);
    const [tournament, setTournament] = useState({});

    const FETCH_BRACKET = 'http://localhost:8000/api/tournaments/' + tournamentKey + '/overall';
    const sendGetTournamentRequest = async () => {
        try {
            const response = await axios.get(FETCH_BRACKET);
            console.log(response.data);
            setTournament(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        sendGetTournamentRequest();
    }, []); // Use an empty dependency array to run this effect only once

    const BracketMatch = ({ match }) => (
        <div className="match">
            <p>Match ID: {match.id}</p>
            <p>Date: {match.date}</p>
            <div className="participants">
                {match.participants.map((participant) => (
                    <div key={participant.id} className="participant">
                        <p>Team: {participant.teamName}</p>
                        <p>Score: {participant.score || 'N/A'}</p>
                    </div>
                ))}
            </div>
        </div>
    );


    const tournamentBracket = (tournamentData) => (
        <div className="tournament-bracket">
            <h1>Tournament: {tournamentData.name}</h1>
            {tournamentData.matches && tournamentData.matches.map((match) => (
                <BracketMatch key={match.id} match={match} />
            ))}
        </div>
    );


    return (
        <div>
            <h1>Round Up - Tournament Bracket</h1>
            <h2>{tournament.name}</h2>
            {tournamentBracket(tournament)}
        </div>
    );
}

export default TournamentBracket