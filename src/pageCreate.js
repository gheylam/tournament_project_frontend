
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Title() {
    return <h1>Round Up</h1>
}

function CenterBox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <h2>Create tournament</h2>
            <form>
                <label>Name of tournament:
                    <input type="text" />
                </label>
            </form>
            <Form>
                    <Form.Check
                        inline
                        type="switch"
                        id="custom-switch"
                        label="Public"
                    />
                    <Form.Select aria-label="Team size select">
                        <option>Select number of Teams</option>
                        <option value="2">Two</option>
                        <option value="4">Four</option>
                        <option value="8">Eight</option>
                        <option value="16">Sixteen</option>
                    </Form.Select>
            </Form>
            <Button variant="primary">Create</Button>
        </div>
    );
}

export { Title, CenterBox}