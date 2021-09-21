import React from 'react'
import {Button} from 'antd'
import '../styles/VideoItem.scss'

const VideoItem = ({video}) => {
    console.log(video)
    return (
        <div className="VideoItem">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>            
            <div className="info">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <div className="buttons">
                    <Button type="primary" className="button">Share</Button>
                    <Button className="button">Open In Youtube</Button>
                </div>
            </div>
        </div>
    )
}

export default VideoItem
