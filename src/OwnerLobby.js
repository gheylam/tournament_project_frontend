
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';


function OwnerLobby() {
    const [tournamentName, setTournamentName] = useState("N/A");
    const currentURL = window.location.pathname; 
    const parts = currentURL.split('/'); 
    const tournamentKey = (parts[parts.length-1]);

    console.log(tournamentKey);
    const joinLink = 'http://localhost:3000/join/' + tournamentKey;
    const GET_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey;
    const sendGetRequest = async () => { 
        try {
            const response = await axios.get(GET_ENDPOINT);
            console.log(response.data);
            setTournamentName(response.data.name);
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        sendGetRequest();
    }, []); // Use an empty dependency array to run this effect only once

    const handleCopyClick = () => {
        navigator.clipboard.writeText(joinLink);
    }

    return (
        <div>
            <h1>Tournament Lobby</h1>
            <h2>{tournamentName} Tournament </h2>
            <Form.Control type="text" defaultValue={joinLink} />
            <Button variant="primary" onClick={handleCopyClick}>Copy invite link</Button>
        </div>
    )
}

export default OwnerLobby