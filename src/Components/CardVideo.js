import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardVideo(props) {


    return (
        <Card className="text-center" bg="light">
        <iframe className="card-img-top" height="200" src="https://www.youtube.com/embed/oUCbeRf_xwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="https://www.youtube.com/watch?v=oUCbeRf_xwA&ab_channel=WebDeveloperBlog" className="btn btn-primary mt-auto">Go YouTube</a>
        </Card.Body>
      </Card>
    )
}