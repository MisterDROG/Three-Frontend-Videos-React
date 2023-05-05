import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';

//creating main title of the main page
export default function LeadBlock(props) {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <Container fluid className="text-center">
            <h1 className="m-5">Three Frontend Videos Daily</h1>
            <p>
                Every day, we upload three of the best videos for beginner front-end developers so that they can make
                good use of their time both on the road and at lunchtime.
            </p>
            <p className="text-danger">Attention! This is a demostration version with static database for GitHub pages. Here videos update not everyday. Thank you!</p>
        </Container>
    );
}
