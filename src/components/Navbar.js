import React from 'react';
import '../styles/navbar.css';
import netflix from '../assets/netflix.png';
import profile from '../assets/profile.png'
// import class from '../styles/navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
       <img className='netflixLogo' src={netflix}></img>
       <img src={profile} className='profileLogo'></img>
    </div>
  )
}

export default Navbar