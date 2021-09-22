import {render, screen} from "@testing-library/react";
import Index from '../index'

const mockData = {
    "id": {
        "kind": "youtube#video",
        "videoId": "w7ejDZ8SWv8"
    },
    "snippet": {
        "publishedAt": "2021-01-18T19:01:11Z",
        "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
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
}

it('should render video data Successcully', async () => {
    render(<Index video={mockData}/>)
    // const imageElement = screen.getByAltText(mockData.snippet.title)
    const titleElement = screen.getByRole('heading')
    const descriptionElement = screen.getByRole('paragraph')
    expect(titleElement).toContain(mockData.snippet.title)
    expect(descriptionElement).toContain(mockData.snippet.description)
})