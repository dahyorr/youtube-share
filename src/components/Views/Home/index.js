import React from 'react'
import {Button} from 'antd'
import './Home.scss'
import {useDb} from '../../../hooks'
import VideoItem from '../../../components/VideoItem'

const Home = ({history}) => {
    const {shares} = useDb()

    const content = shares 
    ? Object.keys(shares).reverse().map(key => <VideoItem video={shares[key]} key={key} noShare/>)
    : <h3>No Videos have been shared yet</h3>


    return (
        <div className="Home">
            <Button title={"share-a-video"} type="primary" className='share-button' onClick={() => history.push('/share')} >Share a video</Button>
            <h2>Shared Recently</h2>
            <div className="video-list">
                {content}
            </div>
        </div>
    )
}

export default Home
