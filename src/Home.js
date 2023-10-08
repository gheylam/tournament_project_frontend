
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <h1>Round Up - Homepage</h1>
            <h2>Available endpoints</h2>
            <ul>
                <li>Home page - "/" </li>
                <li>Create tournament - "/create-tournament"</li>
                <li>Owner lobby - "/owner-lobby/:key"</li>
                <li>Join - "/join/:key"</li>
                <li>Joiner lobby - "/joiner-lobby/:key"</li>
                <li>Brackets - "/tournament/:key"</li>
            </ul>
        </div >
    );
}

export default Home