import React from 'react'

export const Services = () => {
  return (
    <div className='service_container' id='services' style={{height:'70vh',marginTop:'2rem'}}>
            <div>
                <h2 style={{color:'#003B79'}}>Our Services</h2>
            </div>
            <div>
                <p>We provide the most full medical services ,so very person could<br/>have the oppurtunity to receive qualitative medical help.</p>
            </div>
            <div className='card-container'>
                <div className='card'>
                        <img  height="75%" src='https://www.freeiconspng.com/thumbs/tooth-icon/dental-tooth-icon-12.png'/>
                        <span>Dental Care</span>
                </div>
                <div className='card'>
                        <img height="80%" src='https://cdn-icons-png.flaticon.com/512/3699/3699480.png'/>
                        <span>Pulmonary</span>
                </div>
                <div className='card'>
                        <img height="80%" src='https://www.freeiconspng.com/thumbs/brain-icon-png/brain-2.png'/>
                        <span>Neurological</span>
                </div>
                <div className='card'>
                        <img height="80%" src='https://icon-library.com/images/appointment-icon-png/appointment-icon-png-24.jpg'/>
                        <span>Prediatrics</span>
                </div>
            </div>
    </div>
  )
}

