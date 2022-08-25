import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/favicon.svg'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

//creating header
export default function Header(props) {
    
    return (
        <Navbar variant="dark" bg="dark" expand="md">
            <Container fluid className="mx-0">
                <div className='d-flex align-items-center px-0 mx-0'>
                    <img
                    src={logo}
                    height="50"
                    className="me-2"
                    alt="logo"
                    />
                    <Navbar.Brand href="/" className="text-wrap">Three Frontend <br/> Videos Daily</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey="/help" className="ms-auto text-center">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Videos</Nav.Link>
                        <Nav.Link href="/help" eventKey="help">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }


