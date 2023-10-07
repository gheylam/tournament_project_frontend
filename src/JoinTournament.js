
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

const ENDPOINT = "http://localhost:8000/api/join"

function JoinTournament() {

    const [teamName, setTeamName] = useState("");
    const [email, setEmail] = useState("");

    // Function to handle the POST request 

    const sendPostRequest = async () => {
        try {
            const response = await axios.post(ENDPOINT, {
                "teamName": teamName,
                "email": email
            });

            // Handle the response data here 
            console.log(response.data);
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        };
    }

    return (
        <div>
            <h1>Round Up - Join Tournament</h1>
            <h2>Signup for</h2>
            <h2>Tournament name</h2>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={sendPostRequest}>Join</Button>
        </div >

    );
}

export default JoinTournament