import logo from './logo.svg';
import './App.css';

import Name from './Components/Name';
import Price from './Components/Price';
import Image from './Components/Image';
import Description from './Components/Description';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product'

let firstName = 'Lord'
function App() {
  return (

    <div data-bs-theme="dark">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Image></Image>
        <Card.Title>  <Name></Name>  </Card.Title>
        <Card.Text>

          <Price></Price>

          <br/>

          
          
          <Description></Description>
        </Card.Text>
      </Card.Body>
    </Card>

        <h3>Hello, {firstName}!</h3>

</div>


  );
}


export default App;
