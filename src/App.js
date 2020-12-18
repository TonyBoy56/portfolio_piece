import React from 'react';
import { BrowserRouter as Router, 
Route, 
Link } from 'react-router-dom';
import { Container as Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Antonio Cruz',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "Title",
        subTitle: "Projects that make a difference",
        text: "Come see my work!"
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: "Contact Me"
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className="p-1" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Antonio Cruz</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link">Home</Link>
                <Link className="nav-link">About</Link>
                <Link className="nav-link">contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;