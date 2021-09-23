import {render, screen, fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Share from '..'
import {BrowserRouter} from 'react-router-dom'

const MockLogin = () => (
    <BrowserRouter>
        <Share/>
    </BrowserRouter>
)

describe("Login", () => {

    beforeEach(async () => {
        render(<MockLogin />);
    });
    
    it("Should render Share", () => {

    })

    it("Should be able to search for a value", async () => {
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