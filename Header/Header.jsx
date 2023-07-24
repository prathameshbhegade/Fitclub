import React from 'react'
import './Header.css'
 import Logo from '../../assets/logo.png'
 import { useState } from 'react';
 import { Link } from 'react-scroll';
import Bars from '../../assets/bars.png'
const Header = () => {


  const mobile = window.innerWidth<=760 ?true:false;
  const[menuOpened,setMenuOpened]=useState(false);
  return (
    <div className='header'>
     <img src={Logo} alt="" className="logo"/>
      {menuOpened === false && mobile=== true ? (

        <div className='scroll'
        
        onClick={()=> setMenuOpened(true)}
        
        
        
        
        > 
          <img src={Bars} alt=""  style={{width :'1.5 rem',height : '1.5rem'}}/>
        </div>
      ):
      (
     <ul className='header-menu'>
        <li >
          <Link 
          
          onClick={()=> setMenuOpened(false)}
          to='home'
        spy={true}
        activeClass='active'
        smooth={true}
          
          >Home</Link>
          </li>
        <li>
          
          <Link
          onClick={()=> setMenuOpened(false)}
          to='Programs'
        spy={true}
        smooth={true}
          
          
          
          >Programs</Link></li>
        <li >
          <Link
          
          onClick={()=> setMenuOpened(false)}
          to='Join'
        spy={true}
        smooth={true}
          
          >Why us</Link></li>
        <li >
          <Link
          onClick={()=> setMenuOpened(false)}
          to='plans'
        spy={true}
        smooth={true}
          
          
          
          >Plans</Link></li>
        <li> <Link 
        
        onClick={()=> setMenuOpened(false)}
        to='Testimonials'
        spy={true}
        smooth={true}
        
        >
        Testimonals</Link></li>
     </ul>
     )}
    </div>
  );
};

export default Header
