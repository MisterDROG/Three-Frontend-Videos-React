import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import AccordionPrev from './Components/Accordion';
import LeadBlock from './Components/LeadBlock';
import MainVideos from './Components/MainVideos';
import Help from './Components/Help';
import PageNotFound from './Components/Page404';
import {api} from './utils/api'
import { postsFilter } from './utils/postsFilter'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';



function App() {

  const [mainVideos, setmainVideos] = React.useState([]);
  const [accordionVideos, setAccordionVideos] = React.useState([])
  // const { path, url } = useRouteMatch();


  React.useEffect(() => {
    api
    .dowloadPosts()
    .then((res) => {
      console.log(res)
      setmainVideos(postsFilter.filterMainVideos(res).slice())
      setAccordionVideos(postsFilter.filterAccordionVideos(res).slice())

    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div>
      <Header url={'url'}/>
      {/* <p>{JSON.stringify(url)}</p> */}
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <LeadBlock />
            <MainVideos posts={mainVideos}/>
            <AccordionPrev posts={accordionVideos}/>
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
