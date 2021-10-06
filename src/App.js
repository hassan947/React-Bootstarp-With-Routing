import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";

import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Navbar,Container,Nav } from 'react-bootstrap';

function App() {
  return (

      <div>

      
{/* <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">about</Nav.Link>
      <Nav.Link href="/contact">contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}


{/* 

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  



 
   
    
  );
}

export default App;
