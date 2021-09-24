import {render, screen} from "@testing-library/react";
import Nav from '..'
import {BrowserRouter} from 'react-router-dom'

const mockSignOut = jest.fn()
const mockConfig = {
    user: true,
    signOut: mockSignOut,
};

jest.mock("../../../hooks", () => ({
    useAuth: () => mockConfig,
    useDb: () => ({})
}));

const MockNav = () => (
    <BrowserRouter>
        <Nav/>
    </BrowserRouter>
)

describe('Nav With Auth', () => {

    beforeEach(() => {
        render(<MockNav />);
    });

    it("Should render button with auth", () => {
        const signOut = screen.getByTitle('sign-out')
        expect(signOut).toBeInTheDocument()
    })
//
//     it("Should check if button calls function", () => {
//         const signOut = screen.getByTitle('sign-out')
//         expect(signOut).toBeInTheDocument()
//         fireEvent.click(signOut)
//         expect(mockSignOut).toBeCalled()
//     })
})
