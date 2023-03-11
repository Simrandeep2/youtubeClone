import React,{useEffect,useState} from 'react'
import {YOUTUBE_VIDEOS_API}  from "../constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    useEffect(()=>
    {
      getVideos();
    },[]);
    const getVideos=async()=>
    {
       const data=await fetch(YOUTUBE_VIDEOS_API);
       const response=await data.json();
       console.log("response :::",response)
       setVideos(response.items)
    }
  return (
    <div className='flex flex-wrap'>
     {videos && videos.map((video,i)=>
     {
       return <Link to={`/watch?v=`+video.id}>
       <VideoCard key={i} data={video} />
       </Link> 
     })}
    </div>
  )
}

export default VideoContainer