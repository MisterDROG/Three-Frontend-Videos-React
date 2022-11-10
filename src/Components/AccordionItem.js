import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CurrentThemeContext } from '../contexts/ThemeContext';
import CardVideo from './CardVideo';

//creating accordion with previos days videos
export default function AccordionItem(props) {
    const theme = React.useContext(CurrentThemeContext);

    const [themeStyle, setthemeStyle] = React.useState({});

    React.useEffect(() => {
        if (theme) {
            setthemeStyle({ backgroundColor: 'white', color: 'black' });
        } else {
            setthemeStyle({ backgroundColor: '#383D42', color: 'white' });
        }
    }, [theme]);

    return (
        <Container className="mt-3">
            <Accordion.Item eventKey="0" style={themeStyle}>
                <Accordion.Header>
                    <span className="fw-bold">{props.posts[0].date}</span>
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        {props.posts.map((object) => (
                            <Col md={4} className="mt-4 d-md-flex" key={object._id}>
                                <CardVideo
                                    id={object._id}
                                    title={object.title}
                                    embedLink={object.embedLink}
                                    youTubeLink={object.youTubeLink}
                                />
                            </Col>
                        ))}
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Container>
    );
}
