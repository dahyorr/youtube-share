import {render, screen} from "@testing-library/react";
import Nav from '..'
import {BrowserRouter} from 'react-router-dom'

const MockNav = () => (
    <BrowserRouter>
        <Nav/>
    </BrowserRouter>
)

describe('Nav Without Auth', () => {

    beforeEach(() => {
        render(<MockNav />);
    });

    it("Should render Nav text", () => {
        const navText = screen.getByText('Youtube Share')
        expect(navText).toBeInTheDocument()
    })

    it("Should render links with no auth", () => {  
        const signIn = screen.getByTitle('sign-in')
        const signUp = screen.getByTitle('sign-up')
        expect(signIn).toBeInTheDocument()
        expect(signUp).toBeInTheDocument()
    })
    
    it("Should have href tags with right links", () => {
        const signIn = screen.getByTitle('sign-in')
        const signUp = screen.getByTitle('sign-up')
        expect(signIn).toHaveAttribute('href', '/login')
        expect(signUp).toHaveAttribute('href', '/signup')
    })
})
