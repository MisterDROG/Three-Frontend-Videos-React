import Card from 'react-bootstrap/Card';
import { CurrentThemeContext } from '../contexts/ThemeContext';
import React from 'react';

// creating card with video
export default function CardVideo(props) {

  const theme = React.useContext(CurrentThemeContext);

  const [themeStyle, setthemeStyle] = React.useState({})

  React.useEffect(()=>{
    if (theme) {
      setthemeStyle({backgroundColor: "#E7F1FF", color: "black"})
    } else {
      setthemeStyle({backgroundColor: "#6C757D", color: "white"})
    }
  }, [theme])

    return (
        <Card className="text-center" style={themeStyle}>
          <iframe className="card-img-top" height="200" src={props.embedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>Video#{props.id}</Card.Title>
            <Card.Text>{props.title}</Card.Text>
            <a href={props.youTubeLink} className="btn btn-primary mt-auto">Go YouTube</a>
          </Card.Body>
        </Card>
    )
}