import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import AccordionPrev from './Components/Accordion';
import LeadBlock from './Components/LeadBlock';
import MainVideos from './Components/mainVideos';
import {api} from './utils/api'



function App() {

  const posts = api.dowloadPosts()
  console.log(posts)

  return (
    <div>
      <Header />
      <LeadBlock />
      <MainVideos />
      <AccordionPrev />
      <Footer />
    </div>
  );
}

export default App;
