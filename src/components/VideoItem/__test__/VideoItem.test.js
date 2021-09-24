import {render, screen, fireEvent} from "@testing-library/react";
import VideoItem from '../index'

const mockShare = jest.fn()

const mockData = {
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

    it('should render author with no share prop', async () => {
        render(<VideoItem video={mockData} noShare/>)
        const author = screen.getByText('sample Author');
        expect(author).toBeInTheDocument()
    })

    it('should render share button with no share prop', async () => {
        render(<VideoItem video={mockData} noShare/>)
        const share = screen.queryByTitle('share-button');
        expect(share).not.toBeInTheDocument()
    })

    it('should call onShare function', async () => {
        render(<VideoItem video={mockData} onShare={mockShare}/>)
        const share = screen.getByTitle('share-button');
        fireEvent.click(share)
        expect(mockShare).toBeCalled()
    })

    it('should render video preview image Successfully', async () => {
        render(<VideoItem video={mockData}/>)
        const imageElement = screen.getByAltText(mockData.snippet.title)
        expect(imageElement).toHaveAttribute('src', mockData.snippet.thumbnails.medium.url)
    })
})
