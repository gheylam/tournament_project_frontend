
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ENDPOINT = "http://localhost:8000/api/create-tournament"


function CreateTournament() {
    const { key } = useParams();
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);
    const [numOfTeams, setNumOfTeams] = useState(0);
    const [name, setName] = useState("");

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    // Function to handle the POST request

    const sendPostRequest = async () => {
        try {
            const randomKey = Math.floor(10000 + Math.random() * 90000).toString();

            const response = await axios.post(ENDPOINT, {
                "name": name,
                "numberOfTeams": numOfTeams
            });

            // Handle the response data here
            console.log(response.data);
            navigate("/lobby/" + response.data.generatedKey)
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Round Up</h1>
            <h2>Create tournament</h2>
            <form>
                <label>Name of tournament:
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
            </form>
            <Form>
                <Form.Check
                    inline
                    type="switch"
                    id="custom-switch"
                    label="Public"
                />
                <Form.Select aria-label="Team size select" onChange={(e) => setNumOfTeams(e.target.value)}>
                    <option>Select number of Teams</option>
                    <option value="2">Two</option>
                    <option value="4">Four</option>
                    <option value="8">Eight</option>
                    <option value="16">Sixteen</option>
                </Form.Select>
            </Form>
            <Button variant="primary" onClick={sendPostRequest}>Create</Button>
        </div>
    );
}

export default CreateTournament