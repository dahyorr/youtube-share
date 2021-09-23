import {render, screen} from "@testing-library/react";
import VideoItem from '../index'

const mockData = {
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
}

describe("Video item", () =>{
    it('should render video metadata Successfully', async () => {
        render(<VideoItem video={mockData}/>)
        const titleElement = screen.getByText(mockData.snippet.title)
        const descriptionElement = screen.getByText(mockData.snippet.description)
        const channelNameElement = screen.getByText(mockData.snippet.channelTitle);
        // const shareButton = 
        expect(channelNameElement).toBeInTheDocument()
        expect(descriptionElement).toBeInTheDocument()
        expect(titleElement).toBeInTheDocument()
    })
    
    it('should render link Successfully', async () => {
        render(<VideoItem video={mockData}/>)
        const openInYoutubeLink = screen.getByTitle('open-in-youtube');
        expect(openInYoutubeLink).toHaveAttribute('href', `https://youtube.com/watch?v=${mockData.id.videoId}`)
    
    })
    
    it('should render video preview image Successfully', async () => {
        render(<VideoItem video={mockData}/>)
        const imageElement = screen.getByAltText(mockData.snippet.title)
        expect(imageElement).toHaveAttribute('src', mockData.snippet.thumbnails.medium.url)
    })
})