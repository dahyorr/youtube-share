import React, {useState} from 'react'
import './Share.scss'
import SearchForm from '../../forms/SearchForm'
import VideoItem from '../../VideoItem'
import YoutubeApi from '../../../helpers/YoutubeApi'


const Share = () => {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState([])

    const onSearch = (term) => {
        YoutubeApi.get('/search', {
            params: {
                q: term,
                type: 'video'
            }
        })
        .then((res) => {
            setVideos(res.data.items)
        }) 
        .catch(err => {
            console.log(err)
        })
    }

    const renderedVideos = videos.map(video => <VideoItem video={video} key={video.id.videoId}/>)

    return (
        <div className="Share">
            <div className="search-box">
                <SearchForm onSearch={onSearch} />
                <div className="result-list">
                    {renderedVideos}
                </div>
            </div>
        </div>
    )
}

export default Share
