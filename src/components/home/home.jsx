import '../../App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button,Navbar,Container,Nav,Carousel ,CardGroup,Card } from 'react-bootstrap';  

 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  function Home() {
    return (
    

        <div>
       
       <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#">Daraz</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="x1" to="/">Home</Link>
      <Link className="x1" to="/about">About</Link>
     <Link className="x1" to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>


  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.alicdn.com/imgextra/i4/O1CN01xr1kcR1DAC19u2Nlv_!!6000000000175-0-tps-1976-688.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.alicdn.com/imgextra/i2/O1CN01Csva6W1amQEzrJWLt_!!6000000003372-0-tps-1976-688.jpg_1200x1200.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://icms-image.slatic.net/images/ims-web/2b5d73fe-44e2-4cf3-aefe-2532125e66d6.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="container">
<br></br>
<CardGroup>
  <Card>
    <Card.Img variant="top" id="ab" src="https://static-01.daraz.pk/p/d14f4e6a3c966afd1ab2702b871b87bd.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" id="ab" src="https://static-01.daraz.pk/p/fb60dda7f681a5463b12fea370481b53.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" id="ab" src="https://static-01.daraz.pk/p/92687a890ee2e7db51efe658002c6fc2.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>

<br></br>



<Card>
  <Card.Body id="a1">@ Copy Right Reserved</Card.Body>
</Card>
          
        </div>
   
  
     
      
    );
  }
  
  export default Home;
  