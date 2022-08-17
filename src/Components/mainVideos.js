import CardVideo from './CardVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainVideos(props) {


    return (
        <Container className='text-center'>
            <h4 class="fw-bold mt-5 mb-3">Today (26.08.22) videos:</h4>
            <Row>
                <Col md={4} className="mt-4">
                    <CardVideo />
                </Col>
                <Col md={4} className="mt-4">
                    <CardVideo />
                </Col>
                <Col md={4} className="mt-4">
                    <CardVideo />
                </Col>
            </Row>
        </Container>
    )
}