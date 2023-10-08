
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import './CreateTournament.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import buttonArrow from './images/button_arrow.svg'; // Import the arrow image

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
            const response = await axios.post(ENDPOINT, {
                "name": name,
                "numberOfTeams": numOfTeams
            });

            // Handle the response data here
            console.log(response.data);
            navigate("/owner-lobby/" + response.data.generatedKey)
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        }
    };

    return (
        <div className="main-frame">
            
            <div className="logo-banner">
                <p className="roundup">
                    <span className="text-wrapper">Round</span>
                    <span className="span">up</span>
                </p>
            </div>

            <div className="heading-banner">
                <div className="text-wrapper">
                    Create a tournament
                </div>
            </div>

            <div className="form-frame">
                <div className="div-01">
                    <div className="text-wrapper">Name of tournament</div>
                    <input className="textinput" type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="div-02">
                    <div className="text-wrapper">Number of teams</div>
                    <Form>
                        <Form.Select className="select" aria-label="Team size select" onChange={(e) => setNumOfTeams(e.target.value)}>
                            <option>Select number of Teams</option>
                            <option value="2">Two</option>
                            <option value="4">Four</option>
                            <option value="8">Eight</option>
                            <option value="16">Sixteen</option>
                        </Form.Select>
                    </Form>
                </div>
            </div>
            <div className='footer-frame'>
                <Button className="button" variant="primary" onClick={sendPostRequest}>
                    <span className="button-text">Create tournament</span>
                    <img src={buttonArrow} alt="Arrow" className="button-arrow" />
                </Button>
            </div>
        </div>
    );
}

export default CreateTournament