import {render, screen, fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Login from '..'
import {AuthProvider} from '../../../../context/AuthContext'
import {BrowserRouter} from 'react-router-dom'

const MockLogin = () => (
    <AuthProvider>
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    </AuthProvider>
)

describe("Login", () => {

    beforeEach(async () => {
        await act(async () => {
            render(<MockLogin />);
            });
        });
    
    it("Should render login", () => {

    })

    it("Should be able to validate invalid email", async () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const submitButton = screen.getByRole('button')
        fireEvent.change(emailInput, {target:{value: 'test@test'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        await act(async () => fireEvent.click(submitButton));
        const error = screen.getByTitle('error')
        expect(error).toBeInTheDocument()
    })

    // it("Should be able to login", async () => {
    //     const emailInput = screen.getByLabelText('Email')
    //     const passwordInput = screen.getByLabelText('Password')
    //     const submitButton = screen.getByRole('button')
    //     fireEvent.change(emailInput, {target:{value: 'test@test.com'}})
    //     fireEvent.change(passwordInput, {target:{value: 'testtest'}})
    //     await act(async () => fireEvent.click(submitButton));
    //     expect(screen.getByText('Home')).toBeInTheDocument()
    // })
})