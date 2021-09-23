import React from 'react'
import {Button} from 'antd'
import './VideoItem.scss'
import {RiExternalLinkLine} from 'react-icons/ri'

const Index = ({video}) => {
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
                    <Button title="open-in-youtube" className="button" href={`https://youtube.com/watch?v=${video.id.videoId}`} target="_blank">Open In Youtube <RiExternalLinkLine /></Button>
                </div>
            </div>
        </div>
    )
}

export default Index
