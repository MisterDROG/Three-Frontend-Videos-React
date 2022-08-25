import React from 'react';
import CardVideo from './CardVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//creating main videos of the day on the page
export default function MainVideos(props) {

    return (
        <Container className='text-center'>
            <h4 className="fw-bold mt-5 mb-3">Today (26.08.22) videos:</h4>
            <Row>
                {props.posts.map((object) => (
                    <Col md={4} className="mt-4 d-md-flex" key={object.id}>
                        <CardVideo id={object.id} title={object.title} embedLink={object.embedLink} youTubeLink={object.youTubeLink}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}