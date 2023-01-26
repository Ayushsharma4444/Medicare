import React from 'react'

export const Home = () => {
  return (
    <div className='home_container' id='home'>
  
      <div className='navbar'>
        <div className='logo'>
          {/* <img src=''/> */}
          <span>MediCare+</span>
        </div>
        <div className='nav-items'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li ><a href='#services'>Services</a></li>
            <li><a href="#newsletter">News</a></li>
          </ul>
          <button className='btn-1'>Contact</button>
        </div>
      </div>
      <div className='home' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='left'>
          <h5 style={{color:'darkblue',fontSize:'1.3rem'}}> Welcome to MediCare+ Clinic</h5>
          <h1 style={{color:'#003B79'}}> Best Specialists</h1>
          <span> We are on the leading edge of cancer care. Providing the full <br /> continum of cancer treatments and supportive care supportive care Services in a <br />single convient location.</span>
          <div className='buttons'>
            <button className='btn-1'>Make an Appointment</button>
            <button className='btn-2'>Departments</button>
          </div>
        </div>
        <div className='nav-right'>
          <div className='box'>

          </div>
        </div>
      </div>

    </div>
  )
}
