import {render, screen, fireEvent} from "@testing-library/react";
import SignupForm from '../SignupForm'

const mockOnSubmit = jest.fn()

describe("Signup Form", () => {
    beforeEach(function() {
        render(<SignupForm onSubmit={mockOnSubmit}/>)
    });

    it("renders input elements", () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(confirmPasswordInput).toBeInTheDocument()
    })

    it("Should be able to type in input", () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')

        fireEvent.change(emailInput, {target:{value: 'test@test.com'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        fireEvent.change(confirmPasswordInput, {target:{value: 'testtest'}})

        expect(emailInput.value).toBe('test@test.com')
        expect(passwordInput.value).toBe('testtest')
        expect(confirmPasswordInput.value).toBe('testtest')
    })

    it("Should be able to call submit function with form data", () => {
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const confirmPasswordInput = screen.getByLabelText('Confirm Password')
        const submitButton = screen.getByRole('button')
        fireEvent.change(emailInput, {target:{value: 'test@test.com'}})
        fireEvent.change(passwordInput, {target:{value: 'testtest'}})
        fireEvent.change(confirmPasswordInput, {target:{value: 'testtest'}})
        fireEvent.click(submitButton)
        expect(mockOnSubmit).toBeCalledWith({email: 'test@test.com', password: 'testtest', confirmPassword: 'testtest'})
    })

})