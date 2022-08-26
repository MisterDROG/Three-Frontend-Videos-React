import { CurrentThemeContext } from '../contexts/ThemeContext';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/favicon.svg'


//creating header
export default function Header(props) {
    
    const theme = React.useContext(CurrentThemeContext);

    const [themeStyle, setthemeStyle] = React.useState({})
  
    React.useEffect(()=>{
      if (theme) {
        setthemeStyle({ backgroundColor: "#212529", borderRadius: "15px"})
      } else {
        setthemeStyle({backgroundColor: "#01CBFD", color: "black", borderRadius: "15px"})
      }
    }, [theme])

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
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#home">Randomize!</Nav.Link>
                        <Nav.Link onClick={props.onChange} style={themeStyle}>Night-mode</Nav.Link>
                        <Nav.Link href="/help" eventKey="help">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }


