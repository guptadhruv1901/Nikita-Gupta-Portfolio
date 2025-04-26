import React from 'react'
import './Highlights.css'
import { assets } from '../../assets/assets'

export default function Highlights() {
  return (
    <div className='hl-container' id='highlights'>
      <h1>Highlights</h1>
      <div className="logos">
        <div className="logos-slide">
          <img src={assets.AI1} className='item1' alt="" />
          <img src={assets.AI2} className='item2' alt="" />
          <img src={assets.AI3} className='item3' alt="" />
          <img src={assets.AI4} className='item4' alt="" />
          <img src={assets.AI5} className='item5' alt="" />
          <img src={assets.AI6} className='item6' alt="" />
          <img src={assets.AI7} className='item7' alt="" />
          <img src={assets.AI8} className='item8' alt="" />
          <img src={assets.AI9} className='item9' alt="" />
          <img src={assets.AI10} className='item10' alt="" />
        </div>
      </div>
      <div className="logos">
        <div className="logos-slide alt">
          <img src={assets.Event1} className='item1' alt="" />
          <img src={assets.Event2} className='item2' alt="" />
          <img src={assets.Event3} className='item3' alt="" />
          <img src={assets.Event4} className='item4' alt="" />
          <img src={assets.Event5} className='item5' alt="" />
          <img src={assets.Event6} className='item6' alt="" />
          <img src={assets.Event1} className='item7' alt="" />
          <img src={assets.Event2} className='item8' alt="" />
          <img src={assets.Event3} className='item9' alt="" />
          <img src={assets.Event4} className='item10' alt="" />
        </div>
      </div>
      <div className="logos">
        <div className="logos-slide">
          <img src={assets.Logo1} className='item1' alt="" />
          <img src={assets.Logo2} className='item2' alt="" />
          <img src={assets.Logo3} className='item3' alt="" />
          <img src={assets.Logo4} className='item4' alt="" />
          <img src={assets.Logo5} className='item5' alt="" />
          <img src={assets.Logo1} className='item6' alt="" />
          <img src={assets.Logo2} className='item7' alt="" />
          <img src={assets.Logo3} className='item8' alt="" />
          <img src={assets.Logo4} className='item9' alt="" />
          <img src={assets.Logo5} className='item10' alt="" />
        </div>
      </div>
      <div className="logos">
        <div className="logos-slide alt">
          <img src={assets.Painting1} className='item1' alt="" />
          <img src={assets.Painting2} className='item2' alt="" />
          <img src={assets.Painting3} className='item3' alt="" />
          <img src={assets.Painting4} className='item4' alt="" />
          <img src={assets.Painting5} className='item5' alt="" />
          <img src={assets.Painting6} className='item6' alt="" />
          <img src={assets.Painting1} className='item7' alt="" />
          <img src={assets.Painting2} className='item8' alt="" />
          <img src={assets.Painting3} className='item9' alt="" />
          <img src={assets.Painting4} className='item10' alt="" />
        </div>
      </div>
      
    </div>
  )
}
