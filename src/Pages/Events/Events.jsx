import React from 'react'
import './Events.css'
import { event_list } from '../../assets/assets'

const Events = () => {
    
  return (
    <div className='event-main'>
        <h1>Events</h1>
        {event_list.map((event,index)=>{
            return <div className='event'>
                <img src={event.image} alt="" />
                </div>
        })}
    </div>
  )
}

export default Events