import React from 'react'
import logo from '../../assets/AI Planet Logo.png';
import './Nav.css'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className='navcomp'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo'/>
        </Link>
    </div>
  )
}

export default Nav