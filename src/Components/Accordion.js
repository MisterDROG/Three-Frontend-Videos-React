import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from './AccordionItem';
import Container from 'react-bootstrap/esm/Container';
import posts from './DB';

//creating container for accodions of previos days
export default function AccordionPrev(props) {
    const videosPerDay = 3
    const accordsPerPage = 3
    const videosPerPage = videosPerDay*accordsPerPage
    let counterPosts = 0
    let counterAccords = 0
    const postsSet = [[]]

    for (let i=(posts.length-1-videosPerDay); i>((posts.length-1-videosPerDay-videosPerPage)); i=i-1) {
        if ((counterPosts+1) !== videosPerDay) {
            postsSet[counterAccords].unshift(posts[i])
            counterPosts +=1
        } else {
            postsSet[counterAccords].unshift(posts[i])
            counterPosts = 0
            counterAccords += 1
            postsSet.push([])
        }         
     }

    postsSet.pop()

    console.log(postsSet)
 
    return (
        <Container className='text-center my-5'>
            <h4 className="fw-bold m-5">Previous days:</h4>
            {postsSet.map((obj, i) => (
                <Accordion key={i}>
                    <AccordionItem posts={obj} />
                </Accordion>
            ))}
        </Container>

    )
}