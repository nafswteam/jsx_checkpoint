import logo from './logo.svg';
import './App.css';

import Name from './Components/Name';
import Price from './Components/Price';
import Image from './Components/Image';
import Description from './Components/Description';

//import boostrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// set firstname variable
let firstName = 'Lord'
function App() {
  return (

    <div data-bs-theme="dark">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* display image */}
        <Image></Image>
        <Card.Title>  <Name></Name>  </Card.Title>
        <Card.Text>
{/* display price */}
          <Price></Price>

          <br/>

          
          {/* display description */}
          <Description></Description>
        </Card.Text>
      </Card.Body>
    </Card>


{/* display firstname */}
        <h3>Hello, {firstName}!</h3>

</div>


  );
}


export default App;
