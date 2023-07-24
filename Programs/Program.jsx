import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Program = () => {
  return (
    <div className='Programs' id="Programs">
        {/*header*/}
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

      <div className='program-categories'>
       {programsData.map((Program)=>(
        <div className='category'>
        {Program.image}
        <span>{Program.heading}</span><span>{Program.details}</span>
          <div className='join-now'><span>Join Now</span><img src={RightArrow} alt="">
          
          </img>
          </div>
          </div>
       ))}
    

      </div>
    </div>
  )
}

export default Program
