import Accordion from 'react-bootstrap/Accordion';
import CardVideo from './CardVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AccordionItem(props) {


    return (
        <Container>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col md={4} className="d-flex align-items-center">
                            <CardVideo />
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
        </Container>
    )
}