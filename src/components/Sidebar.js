import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen)  return null;  //this type of code is called early return
  
  return (
    <div className='p-5 shadow-lg col-span-1 w-48'>
      
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-4'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-4'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar