import React from 'react'

const VideoCard = ({data}) => {
    console.log("data is::",data)
    const {snippet,statistics}=data;
    const {thumbnails,title,channelTitle}=snippet;
  return (
    <div className='p-2 shadow-lg w-72 hover:scale-105 m-2 flex flex-col items-baseline '>
        <img src={thumbnails.high.url} alt={title} className="h-44 rounded-md w-full object-cover"/>
        <ul>
           <li className='font-bold text-sm'>{title}</li>
           <li className='text-xs'>{channelTitle}</li>
           <li className='text-xs'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard