import { render, screen } from '@testing-library/react';
import PageNotFound from 'Components/Page404';
import { Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';


describe('Router test', () => {

    // test('Test for Help route', () => {
    //     render(<App/>)
    //     const helpLink = screen.getByText('Help')
    //     userEvent.click(helpLink)
    //     expect(screen.getByText(`Today's videos:`)).toBeInTheDocument()
    //     userEvent.click(helpLink)
    //     expect(screen.getByText('Contacts')).toBeInTheDocument()
    // })

    test('Test for Error route', () => {
        render(
            <MemoryRouter initialEntries={['/wrongPath']}> 
                <Switch>
                    <Route exact path="/Three-Frontend-Videos-React/">
                        <p>Test route</p>
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </MemoryRouter>)
        screen.debug()
        expect(screen.getByText(`Page not found 404 =/`)).toBeInTheDocument()
    })
    
})