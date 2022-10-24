import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import questionMan from '../images/questionMan.png';
import reactBootstrap from '../images/react-bootstrap.png';
import reactRouter from '../images/react-router.png';
import rLogo from '../images/React.png';

export default function Help(props) {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <Container className="text-center">
            <h1 className="m-5">Help</h1>
            <h4 className="fw-bold mt-5 mb-3">How it works? - Just follow simple rules:</h4>
            <Row className="d-md-flex justify-content-center align-items-center">
                <Col sm={6} className="mt-4">
                    <img className="" src={questionMan} width="200" height="260" alt="logo" />
                </Col>
                <Col sm={6} className="mt-4">
                    <ul className="text-start mb-0">
                        <li>You are visiting our website.</li>
                        <li>Every day we add three of the best videos on front-end development.</li>
                        <li>You study them and come back for new ones the next day.</li>
                        <li>We also have an archive of videos from the last three days under today's videos.</li>
                        <li>
                            If you've watched all the videos, just hit randomize at the top and you'll get three random
                            videos from our library.
                        </li>
                        <li>Click again to return to the standard version.</li>
                        <li>When you repeat the randomize, new videos will drop out.</li>
                        <li>We also have a dark theme and support for mobile devices.</li>
                    </ul>
                </Col>
            </Row>
            <h4 className="fw-bold mt-5 mb-3">Technologies</h4>
            <Row className="text-center my-3">
                <Col sm={4} className="d-flex flex-column justify-content-end align-items-center mt-3">
                    <img className="" src={rLogo} width="100" alt="logo" />
                    <p className="fw-bold  mb-0">React</p>
                </Col>
                <Col sm={4} className="d-flex flex-column justify-content-end align-items-center mt-3">
                    <img className="" src={reactRouter} width="100" alt="logo" />
                    <p className="fw-bold mb-0 mt-4">React-Router</p>
                </Col>
                <Col sm={4} className="d-flex flex-column justify-content-end align-items-center mt-3">
                    <img className="" src={reactBootstrap} width="100" alt="logo" />
                    <p className="fw-bold  mb-0">React-Bootstrap</p>
                </Col>
            </Row>
            <p>
                Our site is powered by React and uses React-Bootstrap styles. We use React Router to navigate through
                pages.
            </p>
            <h4 className="fw-bold mt-5 mb-3">Contacts</h4>
            <p>For your questions, suggestions, coloboration, please, contact:</p>
            <p className="fw-bold">example@email.com</p>
        </Container>
    );
}
