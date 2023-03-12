import React,{useState,useEffect} from 'react'
import {HiMenu} from "react-icons/hi"
import {ImYoutube2} from "react-icons/im"
import {HiUserCircle} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { SUGGESTIONS_API } from '../constants'
const Header = () => {
  const dispatch=useDispatch();
  const [suggestions,setSuggestions]=useState([])
  const [searchQuery,setSearchQuery]=useState("")
  const toggleMenuHandler=()=>
  {
    console.log("click")
    dispatch(toggleMenu());
  };
  useEffect(()=>
  {
      // console.log(searchQuery)
      setTimeout(()=>
      {
          setYoutubeSuggestions()
      },200)
  },[searchQuery])
  const setYoutubeSuggestions=async ()=>
  {
    const data= await fetch(SUGGESTIONS_API+searchQuery)
    const json=await data.json();
    setSuggestions(json)
  }
  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
      <div className='flex col-span-1'>
      <HiMenu size={40} onClick={toggleMenuHandler} className="cursor-pointer"/>
      <ImYoutube2 size={60} color="red" className='ml-2 -mt-2'/>
      </div>
      <div className='col-span-10 flex'>
        <input type="text" placeholder='Enter text to search'
          value={searchQuery}
          onChange={(e)=>
            setSearchQuery(e.target.value)
          }
         className='border-2 border-gray-300 p-1 w-1/2 rounded-l-full' />
        <button className='border-2 border-gray-300 p-1 rounded-r-full px-5 bg-gray-100 ' >
          <BiSearch size={30}/>
        </button>
      </div>
      <div className='col-span-1'>
        
        <HiUserCircle size={40}/>
      </div>
    </div>
  )
}

export default Header