import '../../App.css';

 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button,Navbar,Container,Nav ,Card} from 'react-bootstrap';  
 
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
  function Contact() {
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
  <Card.Header as="h5">Contact Details</Card.Header>
  <Card.Body>
    <Card.Title>24/ Support Avalible</Card.Title>
    <Card.Text>
     phone : 0213377833
     <br />
     cell : +923353253272 <br />
     Emal : Draz.shopping@gmail.com
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
   
  
  
  
     
      
    );
  }
  
  export default Contact;
  