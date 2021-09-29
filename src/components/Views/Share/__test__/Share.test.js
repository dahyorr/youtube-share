import {render, screen, fireEvent} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Share from '..'
import {BrowserRouter} from 'react-router-dom'
import YoutubeApi from '../../../../helpers/YoutubeApi'

jest.mock("../../../../helpers/YoutubeApi");

const mockData = { 
    items: [
        {
          "kind": "youtube#searchResult",
          "etag": "iR-gAPrJK7QkaVJ7CP2C2VnraEg",
          "id": {
            "kind": "youtube#video",
            "videoId": "523zm1VjVY4"
          },
          "snippet": {
            "publishedAt": "2021-09-15T15:56:54Z",
            "channelId": "UCFz9Bw97E3IS_THodWWLfqQ",
            "title": "Test &quot; Fo Sho &quot; (Official Video)",
            "description": "Test drops off a new visual to his song \" Fo Sho \" from his latest project release \" Stop Playin Wit Me \" directed by @flyleeinc Don't forget to subscribe for more ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/523zm1VjVY4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/523zm1VjVY4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/523zm1VjVY4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Test410",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-15T15:56:54Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "Ra9I-ty2H45O4OunH6bOi-1uqWs",
          "id": {
            "kind": "youtube#video",
            "videoId": "GhOF-rSDArQ"
          },
          "snippet": {
            "publishedAt": "2020-11-14T06:00:06Z",
            "channelId": "UCJplp5SjeGSdVdwsfb9Q7lQ",
            "title": "Nastya and dad got into a mysterious test",
            "description": "Nastya must find a key to open her dad, who is sitting in a mysterious house. Subscribe to Like Nastya - https://is.gd/gdv8uX ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/GhOF-rSDArQ/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/GhOF-rSDArQ/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/GhOF-rSDArQ/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Like Nastya",
            "liveBroadcastContent": "none",
            "publishTime": "2020-11-14T06:00:06Z"
          }
        },
    ]
}


const MockLogin = () => (
    <BrowserRouter>
        <Share/>
    </BrowserRouter>
)

describe("Share", () => {

    beforeEach(async () => {
        render(<MockLogin />);
    });
    
    it("Should render Share", () => {

    })

    it("Should be able to search for a value", async () => {
        YoutubeApi.get.mockResolvedValueOnce({data: mockData})

        const searchInput = screen.getByPlaceholderText('Search for a video')
        const submitButton = screen.getByRole('button')
        fireEvent.change(searchInput, {target:{value: 'test'}})
        await act(async () => fireEvent.click(submitButton));
        const shareButton = await screen.findAllByText('Share')

        expect(shareButton.length).toBe(2)
    })
})