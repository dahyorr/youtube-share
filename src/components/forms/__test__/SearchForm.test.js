import {render, screen, fireEvent} from "@testing-library/react";
import SearchForm from '../SearchForm'

const mockOnSubmit = jest.fn()

describe("Search Form", () => {
    beforeEach(function() {
        render(<SearchForm onSearch={mockOnSubmit}/>)
    });

    it("renders input element", () => {
        const searchInput = screen.getByPlaceholderText('Search for a video')
        expect(searchInput).toBeInTheDocument()
    })

    it("Should be able to type in input", () => {
        const searchInput = screen.getByPlaceholderText('Search for a video')
        fireEvent.change(searchInput, {target:{value: 'test'}})
        expect(searchInput.value).toBe('test')
    })

    it("Should be able to call submit function with form data", () => {
        const searchInput = screen.getByPlaceholderText('Search for a video')
        const submitButton = screen.getByRole('button')
        fireEvent.change(searchInput, {target:{value: 'test'}})
        fireEvent.click(submitButton)
        expect(mockOnSubmit).toBeCalledWith('test')
    })

})