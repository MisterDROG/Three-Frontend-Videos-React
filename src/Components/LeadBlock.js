import Container from "react-bootstrap/esm/Container"

//creating main title of the main page
export default function LeadBlock(props) {

    return (
        <Container fluid className="text-center">
            <h1 className="m-5">Three Frontend Videos Daily</h1>
            <p>Every day, we upload three of the best videos for beginner front-end developers so that they can make good use of their time both on the road and at lunchtime.</p>
        </Container>
    )
}