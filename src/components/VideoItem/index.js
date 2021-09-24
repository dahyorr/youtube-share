import React from 'react'
import {Button} from 'antd'
import './VideoItem.scss'
import {RiExternalLinkLine} from 'react-icons/ri'
import {FiShare} from 'react-icons/fi'

const Index = ({video, onShare, noShare}) => {
    return (
        <div className="VideoItem">
            <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>            
            </div>
            <div className="info">
                <div className="text">    
                    <h3>{video.snippet.title}</h3>
                    <p title="description" className="metadata">{video.snippet.description}</p>
                    <p title='channel' className="metadata"><strong>Channel: </strong>{video.snippet.channelTitle}</p>
                    {noShare && <p title='shared-by'><strong>Shared By: </strong>{video.author}</p>}
                </div>
                <div className="buttons">
                    {!noShare && <Button type="primary" className="button" onClick={() => onShare(video)} title={'share-button'}>Share <FiShare className={'icon'}/></Button>}
                    <Button title="open-in-youtube" className="button" href={`https://youtube.com/watch?v=${video.id.videoId}`} target="_blank">Open In Youtube <RiExternalLinkLine className={'icon'}/></Button>
                </div>
            </div>
        </div>
    )
}

export default Index
