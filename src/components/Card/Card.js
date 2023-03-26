import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
function Card({image,heading,description,posted,id}) {
  let navigate = useNavigate('/')
 let  clickHandle=()=>{
  console.log('clicked',id)
    navigate('/description/'+id,{state:{id}})
  }
  return (
    <div className='cardcontaner' onClick={()=>clickHandle()}>
        <div className='card-top-hero'>
        <img src={image} alt={heading} className='card-image'/>
        <h4 className='card-heading'>{heading}</h4>
        </div>
        <div className='card-btm-desc'>
            <p className='card-desc'>{description}</p>
            <p className='card-posted'>{posted}</p>
        </div>
            
    </div>
  )
}

export default Card