import React from 'react'
import Button from '../commonComponents/Button'

const ButtonList = () => {
  const list=['All','Games','Kapil Sharma','Gaming','Computer Science','Songs','Live','Cricket','Karan Aujla','Python','Comedy']
  return (
    // <div className='grid grid-flow-col'>
    <div className='flex flex-wrap pt-4'>
    {/* <div className='p-1'><Button text="All"/></div>
    <div className='p-1'><Button text="Games"/></div>
    <div className='p-1'><Button text="Kapil Sharma"/></div>
    <div className='p-1'><Button text="Gaming"/></div>
    <div className='p-1'><Button text="Computer Science"/></div>
    <div className='p-1'><Button text="Songs"/></div>
    <div className='p-1'><Button text="Live"/></div>
    <div className='p-1'><Button text="Cricket"/></div>
    <div className='p-1'><Button text="Karan Aujla"/></div>
    <div className='p-1'><Button text="Python"/></div>
    <div className='p-1'><Button text="Comedy"/></div> */}
    {
      list && list.map((item,i)=>
      {
        return <Button key={i} text={item}/>
      })
    }
   
    </div>
  )
}

export default ButtonList