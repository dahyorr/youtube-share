import React, {useEffect, useState} from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import './Home.scss'
import {useDb} from '../../../hooks'
import VideoItem from '../../../components/VideoItem'

const Home = () => {
    const {getShares} = useDb()
    const [videos, setVideos] = useState({})


    useEffect(() => {
        getShares(setVideos)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const content = videos 
    ? Object.keys(videos).reverse().map(key => <VideoItem video={videos[key]} key={key} noShare/>)
    : <h3>No Videos have been shared yet</h3>


    return (
        <div className="Home">
            <Link to='/share' >
                <Button type="primary" className='share-button'>Share a video</Button>
            </Link>
            <h2>Shared Recently</h2>
            <div className="video-list">
                {content}
            </div>
        </div>
    )
}

export default Home
