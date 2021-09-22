import React from 'react'
import {Button} from 'antd'
import '../styles/VideoItem.scss'
import {RiExternalLinkLine} from 'react-icons/ri'

const VideoItem = ({video}) => {
    console.log(video)
    return (
        <div className="VideoItem">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>            
            <div className="info">
                <div className="text">    
                    <h3>{video.snippet.title}</h3>
                    <p title="description">{video.snippet.description}</p>
                    <strong>{video.snippet.channelTitle}</strong>
                </div>
                <div className="buttons">
                    <Button type="primary" className="button">Share</Button>
                    <Button className="button" href={`https://youtube.com/watch?v=${video.id.videoId}`} target="_blank">Open In Youtube <RiExternalLinkLine /></Button>
                </div>
            </div>
        </div>
    )
}

export default VideoItem

// {
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "w7ejDZ8SWv8"
//     },
//     "snippet": {
//         "publishedAt": "2021-01-18T19:01:11Z",
//         "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
//         "title": "React JS Crash Course 2021",
//         "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.",
//         "thumbnails": {
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
//                 "width": 120,
//                 "height": 90
//             }
//         },
//         "channelTitle": "Traversy Media",
//     }
// }