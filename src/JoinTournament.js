
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ENDPOINT = "http://localhost:8000/api/join"

function JoinTournament() {
    const { key } = useParams();
    const navigate = useNavigate();

    const [teamName, setTeamName] = useState("");
    const [email, setEmail] = useState("");
    const [tournamentKey, setTournamentKey] = useState("");
    const [tournamentName, setTournamentName] = useState("");

    // Function to handle the POST request 
    const sendPostRequest = async () => {
        try {
            const response = await axios.post(ENDPOINT, {
                "email": email,
                "teamName": teamName,
                "tournamentKey": tournamentKey
            });

            // Handle the response data here 
            console.log(response.data);
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        };
    }

    const joinCallback = () => {
        sendPostRequest(); 
        navigate("/joiner-lobby/" + tournamentKey)
    }

    useEffect(() => {
        const currentURL = window.location.pathname;
        const parts = currentURL.split('/');
        const key = parts[parts.length - 1];
        setTournamentKey(key);
        const GET_ENDPOINT = 'http://localhost:8000/api/tournaments/' + key;
        console.log(GET_ENDPOINT);
    
        // Use an async function to make the GET request
        const fetchData = async () => {
            try {
                const response = await axios.get(GET_ENDPOINT);
                console.log(response.data);
                setTournamentName(response.data.name);
            } catch (error) {
                console.error('Error', error);
            }
        };
    
        fetchData(); // Call the async function to fetch data
    
    }, []); // Use an empty dependency array to run this effect only once
    

    return (
        <div>
            <h1>Round Up - Join Tournament</h1>
            <h2>Signup for</h2>
            <h2>{tournamentName}</h2>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTeamName(e.target.value)}/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={joinCallback}>Join</Button>
        </div >

    );
}

export default JoinTournament