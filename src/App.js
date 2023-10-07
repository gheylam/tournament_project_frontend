import React from 'react';
import './App.css';
import {NewCar, NewGarage} from './Car.js';

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
)

const myElement02 = (<h1> I Love JSX!</h1>);

const myElement03 = (<h1>React is {5 + 5} time better with JSX</h1>);


// The HTML code must be wrapped in ONE top level element: using <div></div>
const myElement04 = (
  <div>
    <p>I am a paragraph. </p>
    <p>I am a second paragraph inside a div!</p>
  </div>
);

// The HTML code must be wrapped in ONE top level element: using fragment <></>
const myElement05 = (
  <>
    <p>I am a paragraph. BB</p>
    <p>I am a paragraph too. Bao Bey</p>
  </>
);

const myInput01 = (<input type="text" />);

let x = 12;
const myIfElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

function App() {
  return [(
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  ), 
  myelement, 
  myElement02, 
  myElement03, 
  myElement04, 
  myElement05, 
  myInput01, 
  myIfElement, 
  (<CarClassReact />), 
  (<CarFunction color="orange"/>),
  (<Garage />),
  (<NewGarage />), 
  (<NewCar />)];
}

class Car{
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class CarClassReact extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
function CarFunction(props) {
  return <h2>Hi, I am a {props.color} Car function!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Whoe lives in my butt butt</h1>
      <CarFunction color="Orange"/> 
    </>
  )
}

const mycar = new Car("Ford");
mycar.present();
export default App;
