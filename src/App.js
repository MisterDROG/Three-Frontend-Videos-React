import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AccordionPrev from './Components/Accordion';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Help from './Components/Help';
import LeadBlock from './Components/LeadBlock';
import MainVideos from './Components/MainVideos';
import PageNotFound from './Components/Page404';
import { CurrentThemeContext } from './contexts/ThemeContext';
import { api } from './utils/api';
import { postsFilter } from './utils/postsFilter';

function App() {
    const [mainVideos, setmainVideos] = React.useState([]);
    const [accordionVideos, setAccordionVideos] = React.useState([]);
    const [randomPosts, setRandomPosts] = React.useState([]);
    const [theme, setcolorTheme] = React.useState(true);
    const [themeStyle, setthemeStyle] = React.useState({});
    const [helpPage, setHelpPage] = React.useState(true);
    const [randomPostsSet, setRandomPostsSet] = React.useState(false);

    function handleThemeChange() {
        setcolorTheme(!theme);
    }

    function handleHelpPage() {
        setHelpPage(!helpPage);
    }

    function handleRandom() {
        setRandomPostsSet(!randomPostsSet);
    }

    React.useEffect(() => {
        if (theme) {
            setthemeStyle({ backgroundColor: 'white', color: 'black' });
        } else {
            setthemeStyle({ backgroundColor: '#383D42', color: 'white' });
        }
    }, [theme]);

    React.useEffect(() => {
        api.dowloadPosts()
            .then((res) => {
                console.log(res);
                setAccordionVideos(postsFilter.filterAccordionVideos(res).slice());
                if (randomPostsSet) {
                    setRandomPosts(postsFilter.randomMainVideos(res).slice());
                } else {
                    setmainVideos(postsFilter.filterMainVideos(res).slice());
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [randomPostsSet]);

    return (
        <BrowserRouter>
            <CurrentThemeContext.Provider value={theme}>
                <div className={'body'} style={themeStyle}>
                    <Header
                        helpState={helpPage}
                        randomState={randomPostsSet}
                        onChange={handleThemeChange}
                        onRandom={handleRandom}
                    />
                    <Switch>
                        <Route exact path="/Three-Frontend-Videos-React/">
                            <LeadBlock onChange={handleHelpPage} />
                            <MainVideos posts={randomPostsSet ? randomPosts : mainVideos} />
                            <AccordionPrev posts={accordionVideos} />
                        </Route>
                        <Route path="/Three-Frontend-Videos-React/help">
                            <Help onChange={handleHelpPage} />
                        </Route>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </CurrentThemeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
