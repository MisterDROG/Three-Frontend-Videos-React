import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import AccordionPrev from './Components/Accordion';
import LeadBlock from './Components/LeadBlock';
import MainVideos from './Components/mainVideos';



function App() {
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
