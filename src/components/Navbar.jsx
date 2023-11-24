import React, { useState } from 'react'
 import  {Link} from 'react-router-dom'
 import '../styles/Navbar.css'
 import {CiMenuBurger } from 'react-icons/ci'
 import {GiCrossedBones} from 'react-icons/gi'
function Navbar() {
    const [nav , setNav] = useState(false);
    const closeNav = ()=>{
        setNav(false);
    }
    const handleNav= ()=>{
        setNav(!nav);
    }
  return (
    <div>
        <div className="navbar-conatiner">
       <nav className='navbar'>
          <Link to='/' className='navbar-logo-link'>  <h1 className='logo'> Zeeshan<span className='dot'>. </span></h1>   </Link>
        <ul className= {nav ? "nav-links active" : 'nav-links'}>
        <Link to='/' className='links' onClick={closeNav}>Home</Link>
        <Link to='about' className='links' onClick={closeNav}>About</Link>
        <Link to='skills' className='links' onClick={closeNav}>Skills</Link>
       
        <Link to='projects' className='links' onClick={closeNav}>Projects</Link>
        <Link to='contact' className='links' onClick={closeNav}>Contact</Link>
          
        </ul>
         <Link to='#' className='burgur' onClick={handleNav} > {nav ?  <GiCrossedBones  color='black'/> : <CiMenuBurger />}    </Link>
        
        </nav>


        </div>
      
    </div>
  )
}

export default Navbar
