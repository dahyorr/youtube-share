import React, {useState} from 'react'
import './Share.scss'
import SearchForm from '../../forms/SearchForm'
import VideoItem from '../../VideoItem'
import Loader from '../../Loader'
import YoutubeApi from '../../../helpers/YoutubeApi'
import {useAuth, useDb} from '../../../hooks'
import {toast} from 'react-toastify'

const Share = ({history}) => {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)
    const {user} = useAuth()
    const {addNewShare} = useDb()

    const onShare = async (video) => {
        const data = {...video, author: user.email, date: new Date().getTime()}
        try{
            setLoading(true)
            await addNewShare(data)
            setLoading(false)
            toast.success("Video Shared Successfully")
            history.push('/')
        }
        catch(err){
            toast.error("An error occured")
        }

    }

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

    const renderedVideos = videos.map(video => <VideoItem video={video} key={video.id.videoId} onShare={onShare}/>)

    return (
        <>
        <div className="Share">
            <SearchForm onSearch={onSearch} />
            <div className="result-list">
                {renderedVideos}
            </div>
        </div>
        {loading && <Loader/>}
        </>
    )
}

export default Share
