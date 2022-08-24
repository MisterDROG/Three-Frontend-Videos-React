import CardVideo from './CardVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import posts from './DB';


//creating main videos of the day on the page
export default function MainVideos(props) {

    const postsSet = []

    for (let i=(posts.length-1); i>((posts.length-4)); i=i-1) {
       postsSet.unshift(posts[i])             
    }

    return (
        <Container className='text-center'>
            <h4 className="fw-bold mt-5 mb-3">Today (26.08.22) videos:</h4>
            <Row>
                {postsSet.map((object) => (
                    <Col md={4} className="mt-4 d-md-flex" key={object.id}>
                        <CardVideo id={object.id} title={object.title} embedLink={object.embedLink} youTubeLink={object.youTubeLink}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}