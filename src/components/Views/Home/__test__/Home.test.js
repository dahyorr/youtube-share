import {render, screen, fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Home from '../'

const mockData = {
    data1: {
        "author": "sample Author",
        "id": {
            "videoId": "w7ejDZ8SWv8"
        },
        "snippet": {
            "title": "React JS Crash Course 2021",
            "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.",
            "thumbnails": {
                "medium": {
                    "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
                    "width": 120,
                    "height": 90
                }
            },
            "channelTitle": "Traversy Media",
        }
    },
    data2: {
        "author": "sample Author",
        "id": {
            "videoId": "w7ejDZ8SWv8"
        },
        "snippet": {
            "title": "A sample Video",
            "description": "A sample description",
            "thumbnails": {
                "medium": {
                    "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
                    "width": 120,
                    "height": 90
                }
            },
            "channelTitle": "Traversy Media",
        }
    }
}

jest.mock("../../../../hooks/useDb", () => ({
    useDb: () => ({
        shares: mockData
    })
}));

const historyMock = { push: jest.fn() }

describe("Home Screen", () => {
    it('should render VideoItem for each Video Successfully', async () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        const titleElement1 = screen.getByText(mockData.data1.snippet.title)
        const descriptionElement1 = screen.getByText(mockData.data1.snippet.description)
        const titleElement2 = screen.getByText(mockData.data2.snippet.title)
        const descriptionElement2 = screen.getByText(mockData.data2.snippet.description)
        expect(titleElement1).toBeInTheDocument()
        expect(titleElement2).toBeInTheDocument()
        expect(descriptionElement1).toBeInTheDocument()
        expect(descriptionElement2).toBeInTheDocument()
    })

    it('should redirect on share a video click', async () => {
        render(<BrowserRouter><Home history={historyMock} /></BrowserRouter>)
        const button = screen.getByTitle("share-a-video")
        expect(button).toBeInTheDocument()
        fireEvent.click(button)
        expect(historyMock.push).toBeCalled()

    })
})
