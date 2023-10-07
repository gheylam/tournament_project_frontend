
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useRef } from 'react';


function Lobby() {
    const [teamName, setTeamName] = useState("N/A");
    const currentURL = window.location.pathname; 
    const parts = currentURL.split('/'); 
    const tournamentKey = (parts[parts.length-1]);

    const inputRef = useRef(null);

    console.log(tournamentKey);
    const joinLink = 'http://localhost:3000/join/' + tournamentKey;
    const GET_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey;
    const sendGetRequest = async () => { 
        try {
            const response = await axios.get(GET_ENDPOINT);
            console.log(response.data);
            setTeamName(response.data.name);
        } catch (error) {
            console.error('Error', error);
        }
    }

    sendGetRequest();

    const handleCopyClick = () => {
        navigator.clipboard.writeText(joinLink);
    }

    return (
        <div>
            <h1>Tournament Lobby</h1>
            <h2>{teamName} Tournament</h2>
            <Form.Control type="text" defaultValue={joinLink} ref={inputRef} />
            <Button variant="primary" onClick={handleCopyClick}>Copy invite link</Button>
        </div>
    )
}

export default Lobby