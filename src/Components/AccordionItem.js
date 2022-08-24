import Accordion from 'react-bootstrap/Accordion';
import CardVideo from './CardVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//creating accordion with previos days videos
export default function AccordionItem(props) {

    return (
        <Container>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.posts[0].date}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {(props.posts).map((object) => (
                                <Col md={4} className="mt-4 d-md-flex" key={object.id}>
                                    <CardVideo id={object.id} title={object.title} embedLink={object.embedLink} youTubeLink={object.youTubeLink}/>
                                </Col>
                            ))}
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
        </Container>
    )
}

