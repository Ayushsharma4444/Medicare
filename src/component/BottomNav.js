import React from 'react'

export const BottomNav = () => {
  return (
    <div>
    <div className='navbar' style={{padding:'3rem 0 2rem  0'}}>
        <div className='logo'>
          {/* <img src=''/> */}
          <span>MediCare+</span>
        </div>
        <div className='nav-items'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li ><a href='#services'>Services</a></li>
            <li><a href="#newsletter">News</a></li>
          </ul>
        
        </div>
      </div>
    </div>
  )
}
