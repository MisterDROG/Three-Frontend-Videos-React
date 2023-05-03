import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';
import AccordionItem from './AccordionItem';

//creating container for accodions of previos days
export default function AccordionPrev(props) {
 
    return (
        <Container className='text-center my-5'>
            <h4 className="fw-bold m-5">Previous days:</h4>
            {props.posts.map((obj, i) => (
                <Accordion key={i}>
                    <AccordionItem posts={obj} />
                </Accordion>
            ))}
        </Container>

    )
}