import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import CardVideo from './CardVideo';

//creating main videos of the day on the page
export default function MainVideos(props) {
    const history = useHistory();

    return (
        <Container className="text-center">
            <h4 className="fw-bold mt-5 mb-3">Today's videos:</h4>
            <Row>
                {props.posts.map((object) => (
                    <Col md={4} className="mt-4 d-md-flex" key={object.id}>
                        <CardVideo
                            id={object.id}
                            title={object.title}
                            embedLink={object.embedLink}
                            youTubeLink={object.youTubeLink}
                        />
                    </Col>
                ))}
            </Row>
            {/* <Button
                onClick={() => {
                    history.push('/help');
                }}
            >
                Hello
            </Button> */}
        </Container>
    );
}
