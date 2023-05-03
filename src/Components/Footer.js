import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import rLogo from '../images/React.png';
import logo from '../images/favicon.svg';
import reactBootstrap from '../images/react-bootstrap.png';
import reactRouter from '../images/react-router.png';

//creating footer
export default function Footer() {


    return (
        <Container fluid id ='footer' className="bg-dark text-white mt-5 mx-0 px-5 py-4">
            <Row>
                <Col md={3} className="d-flex align-items-center">
                    <img className="me-2" src={logo} width = "50" alt='logo'/>
                    <h4 className="my-2">Three Frontend Videos Daily</h4>
                </Col>
                <Col md={3} className="">

                </Col>
                <Col md={3} className="">
                    <p className="my-2">Developed with:</p>
                    <div className="d-flex align-items-center my-2">
                        <img className="me-2" src={rLogo} width = "20" alt='logo'/>
                        <p className="my-0">React</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <img className="me-2" src={reactBootstrap} width = "20" alt='logo'/>
                        <p className="my-0">React-Bootstrap</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <img className="me-2" src={reactRouter} width = "20" alt='logo'/>
                        <p className="my-0">React-Router</p>
                    </div>
                </Col>
                <Col md={3} className="">
                    <p className="my-2">For feedback:</p>
                    <p className="my-2">tf_videos_daily@gmail.com</p>
                    <p className="my-2">Developer:</p>
                    <p className="my-2">©MR.Drog 2022</p>
                </Col>
            </Row>
        </Container>
    )
}