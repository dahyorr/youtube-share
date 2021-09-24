import {render, screen, fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Signup from '..'
import {AuthProvider} from '../../../../context/AuthContext'
import {BrowserRouter} from 'react-router-dom'

const mockSignup = jest.fn()
jest.mock("../../../../hooks", () => ({
    useAuth: () => ({signUp: mockSignup}),
    useDb: () => ({})
}));

const MockLogin = () => (
    <AuthProvider>
        <BrowserRouter>
            <Signup/>
        </BrowserRouter>
    </AuthProvider>
)

describe("Signup", () => {

    beforeEach(async () => {
        await act(async () => {
            render(<MockLogin />);
            });
        });

    it("Should render Signup", () => {

    })

    it("Should be able to validate invalid email", async () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')
        const submitButton = screen.getByRole('button')
        fireEvent.change(emailInput, {target:{value: 'test@test'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        fireEvent.change(confirmPasswordInput, {target:{value: 'testtest'}})
        await act(async () => fireEvent.click(submitButton));
        const error = screen.getByTitle('error')
        expect(error).toBeInTheDocument()
    })

    it("Should be able to validate when passwords dont match", async () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')
        const submitButton = screen.getByRole('button')
        fireEvent.change(emailInput, {target:{value: 'test@test.com'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        fireEvent.change(confirmPasswordInput, {target:{value: 'testtes'}})
        await act(async () => fireEvent.click(submitButton));
        const error = screen.getByTitle('error')
        expect(error).toBeInTheDocument()
    })

    it("Should be able to signup", async () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')
        const submitButton = screen.getByRole('button')
        fireEvent.change(emailInput, {target:{value: 'test@test.com'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        fireEvent.change(confirmPasswordInput, {target:{value: 'testtest'}})
        await act(async () => fireEvent.click(submitButton));
        expect(mockSignup).toBeCalledWith('test@test.com', 'testtest')
    })
})