import React,{useState,useEffect} from 'react'
import {HiMenu} from "react-icons/hi"
import {ImYoutube2} from "react-icons/im"
import {HiUserCircle} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { searchAPI, YOUTUBE_SEARCH_API } from '../constants'
import { GOOGLE_API_KEY } from '../constants'
const Header = () => {
  const dispatch=useDispatch();
  const [suggestions,setSuggestions]=useState([])
  const [searchQuery,setSearchQuery]=useState("")
  const [showSuggestions,setShowSuggestions]=useState(false)
  const toggleMenuHandler=()=>
  {
    console.log("click")
    dispatch(toggleMenu());
  };
  useEffect(()=>
  {
      // console.log(searchQuery)
     const timer=setTimeout(()=>
      {
        console.log("inside")
          setYoutubeSuggestions()
      },200)
      return ()=>clearTimeout(timer)
  },[searchQuery])
  const setYoutubeSuggestions=async ()=>
  {
    if(searchQuery){
    const data=await fetch(searchAPI(searchQuery))
    // const data=await fetch("https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=Nectar&xhr=t&xssi=t&gl=us")
    const json=await data.json();
    setSuggestions(json)
    console.log("search api response:::",json)
    }
  }
  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
      <div className='flex col-span-1'>
      <HiMenu size={40} onClick={toggleMenuHandler} className="cursor-pointer"/>
      <ImYoutube2 size={60} color="red" className='ml-2 -mt-2'/>
      </div>
      <div>

      <div className='col-span-10 flex'>
        <input type="text" placeholder='Enter text to search'
          value={searchQuery}
          onChange={(e)=>
            setSearchQuery(e.target.value)
          }
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>
            {
              console.log("blur fnc")
              setShowSuggestions(false)
            }}
          className='border-2 border-gray-300 p-1 w-1/2 rounded-l-full relative' />
        <button className='border-2 border-gray-300 p-1 rounded-r-full px-5 bg-gray-100 ' >
          <BiSearch size={30}/>
        </button>
      </div>
      {showSuggestions && (<div className='absolute bg-white w-72 z-50 '>
        <ul>
          <li className='p-2' onMouseOver={(e)=>setSearchQuery(e.target.value)} value="Home">OHome</li>
          <li className='p-2'>IHPNEM</li>
          <li className='p-2'>nKJOI</li>
          <li className='p-2'>woiqjwp</li>
          <li className='p-2'>kjhiu3e3</li>
          <li className='p-2'>3298ebcj</li>
        </ul>
      </div>)
       }
          </div>
      <div className='col-span-1'>
        
        <HiUserCircle size={40}/>
      </div>
    </div>
  )
}

export default Header