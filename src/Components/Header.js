import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/favicon.svg'

//creating header
export default function Header(props) {
    return (
        <Navbar  variant="dark" bg="dark" expand="md">
            <Container fluid className="mx-0">
                <div className='d-flex align-items-center px-0 mx-0'>
                    <img
                    src={logo}
                    height="50"
                    className="me-2"
                    alt="logo"
                    />
                    <Navbar.Brand href="#home" className="text-wrap">Three Frontend <br/> Videos Daily</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-center">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Videos</Nav.Link>
                    <Nav.Link href="#link">Help</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }