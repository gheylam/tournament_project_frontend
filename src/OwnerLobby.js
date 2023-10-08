
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';


function OwnerLobby() {
    const [tournamentName, setTournamentName] = useState("N/A");
    const [participants, setParticipants] = useState([]);
    const currentURL = window.location.pathname;
    const parts = currentURL.split('/');
    const tournamentKey = (parts[parts.length - 1]);

    console.log(tournamentKey);
    const joinLink = 'http://localhost:3000/join/' + tournamentKey;
    const GET_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey;
    const GET_PARTICIPANT_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey + '/participants';
    const DELETE_PARTICIPANT_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey + '/participants/';
    const GENERATE_ENDPOINT = 'http://localhost:8000/api/tournaments/' + tournamentKey + '/generate';
    const sendGetTournamentRequest = async () => {
        try {
            const response = await axios.get(GET_ENDPOINT);
            console.log(response.data);
            setTournamentName(response.data.name);
        } catch (error) {
            console.error('Error', error);
        }
    }
    const sendGetParticipantRequest = async () => {
        try {
            const response = await axios.get(GET_PARTICIPANT_ENDPOINT);
            console.log(response.data);
            setParticipants(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }
    const onRemove = async (participantId) => {
        try {
            const response = await axios.delete(DELETE_PARTICIPANT_ENDPOINT + participantId);
            console.log(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }

    const sendPostGenerateMatches = async () => {
        try {
            const response = await axios.post(GENERATE_ENDPOINT);
            console.log(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        sendGetTournamentRequest();
    }, []); // Use an empty dependency array to run this effect only once

    useEffect(() => {
        sendGetParticipantRequest();
    }, []);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(joinLink);
    }
    const handleGenerateClick = () => {
        sendPostGenerateMatches();
    }

    const TableList = ({ data }) => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.participant_id}>
                            <td>{item.team_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => onRemove(item.participant_id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>Tournament Lobby</h1>
            <h2>{tournamentName} Tournament </h2>
            <Form.Control type="text" defaultValue={joinLink} />
            <Button variant="primary" onClick={handleCopyClick}>Copy invite link</Button>
            <TableList data={participants} />
            <Button variant="primary" onClick={handleGenerateClick}>Generate Matches</Button>
        </div>
    )
}

export default OwnerLobby