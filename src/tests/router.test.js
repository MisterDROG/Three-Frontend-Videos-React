import { render, screen } from '@testing-library/react'
import App from '../App'


describe('Router test', () => {

    test('Test for Help route', () => {
        render(<App/>)
        const helpLink = screen.getByText('Help')
        // userEvent.click(helpLink)
        expect(screen.getByText(`Today's videos:`)).toBeInTheDocument()
        // expect(screen.getByText('Contacts')).toBeInTheDocument()
        // userEvent.click(helpLink)
        // expect(screen.getByText(`Today's videos:`)).toBeInTheDocument()
    })
    
})