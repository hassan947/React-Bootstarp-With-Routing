import '../../App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button,Navbar,Container,Nav,Card } from 'react-bootstrap';  
 
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  
  function About() {
    return (
    
  
  
        <div>
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link className="x1" to="/">Home</Link>
      <Link className="x1" to="/about">About</Link>
     <Link className="x1" to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>

     <br />     
  <Card>
  <Card.Header as="h5">Daraz Information</Card.Header>
  <Card.Body>
    <Card.Title>Online Shopping History</Card.Title>
    <Card.Text>
    Daraz was originally founded as an online fashion retailer in Pakistan in 2012 by Muneeb Maayr and Farees Shah. Daraz's initial funding came from Rocket Internet and focused on the fashion sector, but was changed to a general e-commerce marketplace in 2015.

Daraz Group was formed in 2015 as the parent company of Daraz’s operations in Pakistan, Bangladesh and Myanmar.[4] In July 2016, Daraz acquired Kaymu, a consumer-to-consumer online marketplace in South Asia. With this acquisition, it began operations in Nepal and Sri Lanka.[5][6]

In September 2015, Daraz secured €50 million in its Series B funding to support the expansion of operations across its markets. CDC Group, a state-owned Development Finance Institution (DFI) in the UK, invested €20 million alongside a €30 million investment from Daraz's existing majority shareholder, Asia Internet Holdings.[7][8]

In May 2018, Daraz announced it was acquired as a wholly owned subsidiary of Alibaba Group for an undisclosed amount, as part of Alibaba’s expansion into South Asia.[9] Following the acquisition, Daraz Express (DEX), Daraz’s in-house digitalised logistics arm was launched in September 2018[10] to support its growth into key markets. Today, DEX delivers over 60 per cent of all Daraz orders.[11]

In 2021, Daraz expanded into the food delivery and hyper-local grocery sector through the acquisition of Bangladeshi startup HungryNaki.[12]
    </Card.Text>

  </Card.Body>
</Card>





        </div>
   
  
  
  
     
      
    );
  }
  
  export default About;
  