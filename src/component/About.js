import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const About = () => {
   const[review,setreview] = useState([])
   
   const getComments = ()=>{
    return axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1'+'.data')
    .then((resp)=>{
       setreview(resp.data.data);
    })
    .catch(error=>console.error('Error'))
   }
    

   useEffect(()=>{
    getComments();
   },[]);

  return (
    <div id="about" className='about-container'>
            <div className='about-top'>
                    <h1 className='about-heading' style={{color:'#003B79'}}>We Have The Best Specialists</h1>
                    <p>We have a wide experience design and strategy,<br/>with locally-rooted knowledge.</p>
                    <div className='doctor_card'>
                            <div className='dr_card'>
                                    <span>Dr.Awaati Al <br/> Dental Care</span>
                                    
                            </div>
                            <div className='dr_card'>
                                    <span>Dr.Filipa Gaspar<br/>Cardiology </span>
                            </div>
                            <div className='dr_card'>
                                    <span>Dr. Sukhmeet Gorae<br/>Neuological</span>
                            </div>
                            <div className='dr_card'>
                                    <span>Dr Siri Jakobsson<br/>Prediatrics</span>
                                    
                            </div>
                    </div>
            </div>
            <div className='about-bottom'>
                <h1 style={{color:'#003B79'}}>What our Customers Says</h1>
                {/* <div className='all-reviews'>
                    {review.map((item)=>{
                        return (
                            <div className='review'>
                                <span>{item.Reviews}</span>
                                <small>{item.Name}</small>
                
                        </div>
                        )
                        
                    })}
                </div> */}
                <div className='all-review'>
                    <div className='review'>
                        <span>I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</span>
                        <br/><br/>  <small>Jacqueline Asong</small>
                        {/* <p>Patient</p> */}
                    </div>
                    <div className='review'>
                        <span>I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</span>
                      <small><br/>  <br/> Patricia Riberio</small>
                      {/* <p style={{textAlign:'none'}}>Patient</p> */}
                     </div>
                </div>
               
            </div>
    </div>
  )
}
